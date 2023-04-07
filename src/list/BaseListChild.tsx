import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { MyRefreshControl } from './MyRefreshControl';
import { NothingToShow } from './NothingToShow';
import { useBaseListCtx } from './BaseList';
import { FlashList, FlashListProps } from '@shopify/flash-list';

export interface IBaseListChildConfig {
  scroll: 'infinite' | 'finite';
  Nothing?: React.ElementType;
  Component?: React.ReactElement;
  renderFunc?: () => React.ReactElement;
  listProps?: Partial<FlashListProps<any>>;
}

export interface IBaseListChildProps {
  listConfig: IBaseListChildConfig;
}

export const BaseListChild = React.forwardRef<
  FlashList<any>,
  IBaseListChildProps
>(({ listConfig }, ref) => {
  const { data, refreshing, refresh, loadItems, loading } = useBaseListCtx();
  const { Nothing, Component, renderFunc, listProps = {} } = listConfig;

  const Comp =
    Component || ((renderFunc && renderFunc()) as React.ReactElement);

  // @ts-ignore
  const renderItem: FlashListProps<any>['renderItem'] = ({ item, index }) => {
    return React.cloneElement(Comp, {
      data: item,
      key: index,
    });
  };

  const NothingComp: React.ElementType = Nothing || NothingToShow;

  const renderFooter = () => {
    if (loading) {
      return (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size={30} />
        </View>
      );
    }
    return null;
  };
  // contextVars.scrollProps = {
  //   condition: !loading && hasMoreItems,
  //   load: loadItems,
  //   loading,
  //   error,
  //   noItem: count === 0 && <NothingComp load={load} />,
  // };

  return (
    <FlashList
      data={data}
      bounces
      ref={ref}
      // contentContainerStyle={{
      //   paddingTop: containerPaddingTop + 75,
      // }}
      // scrollIndicatorInsets={{
      //   top: scrollIndicatorInsetTop + 75,
      // }}
      onEndReached={loadItems}
      onEndReachedThreshold={0.1}
      keyExtractor={(item) => item.key || item.id}
      ListFooterComponent={renderFooter}
      renderItem={renderItem}
      refreshControl={
        <MyRefreshControl
          // progressViewOffset={containerPaddingTop + 75}
          refreshing={!!refreshing}
          onRefresh={refresh}
        />
      }
      ListEmptyComponent={<NothingComp load={refresh} />}
      {...listProps}
    />
  );
});
