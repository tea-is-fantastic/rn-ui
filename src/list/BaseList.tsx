import React, { ContextType, useCallback } from 'react';
import type { IRestConfig, ReactFC } from '@tisf/rn-providers';
import { apiStandalone } from '@tisf/rn-providers';
import { StoreApi, useStore } from 'zustand';

export interface IBaseListData {
  hasMoreItems: boolean;
  data: any[];
  count: number;
  before: number;
  after: number;
}

export interface IBaseListConfig {
  noInitial?: boolean;
  loadFunc?: (current: number) => void;
  onLoad?: (data: IBaseListData) => void;
}

export type IBaseListStore = IBaseListData & {
  error?: boolean;
  loading?: boolean;
};

export interface IBaseListProps {
  config: IBaseListConfig;
  restConfig: IRestConfig;
  store?: StoreApi<IBaseListStore>;
}

export interface IBaseListContext {
  load?: (current: number) => void;
  loadItems?: () => void;
  refresh?: () => void;
  data?: any[];
  setData?: (data: any[]) => void;
  count?: number;
  setCount?: (count: number) => void;
  before?: number;
  setBefore?: (before: number) => void;
  after?: number;
  setAfter?: (after: number) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  refreshing?: boolean;
  setRefreshing?: (refreshing: boolean) => void;
  error?: boolean;
  setError?: (error: boolean) => void;
  hasMoreItems?: boolean;
  setHasMoreItems?: (hasMoreItems: boolean) => void;
  config?: IBaseListConfig;
  setConfig?: (config: IBaseListConfig) => void;
  restConfig?: IRestConfig;
  setRestConfig?: (restConfig: IRestConfig) => void;
}

export const BaseListCtx = React.createContext<IBaseListContext>({});
export const useBaseListCtx = (): ContextType<typeof BaseListCtx> =>
  React.useContext(BaseListCtx);

export const BaseList: ReactFC<IBaseListProps> = ({
  config: configProp,
  restConfig: restConfigProp,
  children,
  store,
}) => {
  const [hasMoreItems, setHasMoreItems] = React.useState(true);
  const [data, setData] = React.useState<Array<any>>([]);
  const [count, setCount] = React.useState<number>(0);
  const [before, setBefore] = React.useState<number>(0);
  const [after, setAfter] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [config, setConfig] = React.useState<IBaseListConfig>(configProp);

  const { loadFunc, noInitial, onLoad } = config;
  const [restConfig, setRestConfig] =
    React.useState<IRestConfig>(restConfigProp);

  let dataFromAbove: IBaseListStore | undefined;

  if (store) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dataFromAbove = useStore(store);
  }

  React.useEffect(() => {
    if (dataFromAbove) {
      setHasMoreItems(dataFromAbove.hasMoreItems);
      setData(dataFromAbove.data);
      setCount(dataFromAbove.count);
      setBefore(dataFromAbove.before);
      setAfter(dataFromAbove.after);
      setError(!!dataFromAbove.error);
      setLoading(!!dataFromAbove.loading);
    }
  }, [dataFromAbove]);

  const load = useCallback(
    async (current = 0, refresh?: boolean): Promise<void | null> => {
      if (loading || refreshing) {
        return;
      }
      const q = restConfig.queryParams || {};
      const currentBool = !current || current <= 0;
      let spinnerFunc: (x: boolean) => void = setLoading;
      if (refresh || currentBool) {
        spinnerFunc = (x) => {
          setRefreshing(x);
        };
      }
      setError(false);
      if (loadFunc) return loadFunc(current);

      await apiStandalone({
        ...restConfig,
        queryParams: { ...q, current },
        loadingStart: () => spinnerFunc(true),
        loadingEnd: () => spinnerFunc(false),
        displaySpinner: false,
        displayError: false,
        displaySuccess: false,
        onSuccess: async (resp: IBaseListData) => {
          const dataReceived = resp.data || [];
          const countReceived = resp.count;
          const beforeReceived = resp.before;
          const afterReceived = resp.after;
          let newData;
          if (currentBool) {
            newData = [...dataReceived];
          } else {
            newData = [...data, ...dataReceived];
          }
          const hasMoreReceived = newData.length < countReceived;

          setData(newData);
          setCount(countReceived);
          setBefore(beforeReceived);
          setAfter(afterReceived);
          setHasMoreItems(hasMoreReceived);
          // setLoading(false);
          // setRefreshing(false);
          const fData = {
            data: newData,
            count: countReceived,
            before: beforeReceived,
            after: afterReceived,
            hasMoreItems: hasMoreReceived,
          };
          onLoad && onLoad(fData);
        },
        onError: () => {
          // setLoading(false);
          // setRefreshing(false);
          setError(true);
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadFunc, loading, onLoad, refreshing, restConfig]
  );

  const loadItems = useCallback(async (): Promise<void | null> => {
    if (hasMoreItems) {
      return load(data.length);
    }
    return null;
  }, [data.length, hasMoreItems, load]);

  const refresh = async (): Promise<void | null> => {
    setRefreshing(true);
    return load(0, true);
  };

  React.useEffect(() => {
    !noInitial && loadItems();
  }, [loadItems, noInitial]);

  const contextVars: IBaseListContext = {
    hasMoreItems,
    setHasMoreItems,
    data,
    setData,
    count,
    setCount,
    before,
    setBefore,
    after,
    setAfter,
    error,
    setError,
    loading,
    setLoading,
    loadItems,
    load,
    refresh,
    refreshing,
    setConfig,
    setRefreshing,
    setRestConfig,
  };

  return (
    <BaseListCtx.Provider value={contextVars}>{children}</BaseListCtx.Provider>
  );
};
