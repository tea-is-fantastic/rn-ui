import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import { IListStore, useListQuery } from '@tisf/rn-providers';
import { Heading } from '../text';
import { MyRefreshControl } from './MyRefreshControl';
import { NothingToShow } from './NothingToShow';
import type { StoreApi, UseBoundStore } from 'zustand';

export interface IRestListConfig {
  enabled?: boolean;
  url: string;
  heading: React.ReactNode | string;
}

export interface IRestListProps {
  Component: React.ComponentType<any>;
  config: IRestListConfig;
  useListStore: UseBoundStore<StoreApi<IListStore>>;
}

export const RestList: React.FC<IRestListProps> = ({
  config,
  Component,
  useListStore,
}) => {
  const { url, heading } = config;
  const load = useListQuery(url, useListStore);

  const { data, loading, refreshing, hasMoreItems, resetData } = useListStore();

  const refresh = useCallback(async () => {
    return load(0, true);
  }, [load]);

  const onEndReached = useCallback(async (): Promise<void | null> => {
    if (hasMoreItems) {
      return load(data.length);
    }
    return null;
  }, [data, hasMoreItems, load]);

  useEffect(() => {
    const x = async () => {
      resetData && resetData();
      await refresh();
    };
    x();
  }, [refresh, resetData]);

  const renderFooter = React.useCallback(() => {
    if (loading) {
      return (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size={30} />
        </View>
      );
    }
    return null;
  }, [loading]);

  const renderItem: FlashListProps<any>['renderItem'] = React.useCallback(
    ({ item, index }) => {
      return <Component data={item} key={index} />;
    },
    [Component]
  );

  return (
    <FlashList
      ListHeaderComponent={
        <View
          style={{
            paddingHorizontal: 5,
            paddingTop: 15,
          }}
        >
          {typeof heading === 'string' ? <Heading>{heading}</Heading> : heading}
        </View>
      }
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      refreshControl={
        <MyRefreshControl
          // progressViewOffset={containerPaddingTop + 75}
          refreshing={refreshing}
          onRefresh={refresh}
        />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={1}
      keyExtractor={(item) => item?.key || item?.id}
      ListEmptyComponent={<NothingToShow load={refresh} />}
      ListFooterComponent={renderFooter}
      estimatedItemSize={100}
      data={data}
    />
  );
};
