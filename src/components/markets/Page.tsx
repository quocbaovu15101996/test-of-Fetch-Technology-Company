import React, { FC } from "react";
import { Dimensions, FlatList, ListRenderItem, Text, View } from "react-native";
import { CoinCard } from "../../screens/types/Markets";
import Card from "./Card";

const { width } = Dimensions.get("window");

type Props = {
  list: CoinCard[];
  findPriceInfoCoin: (marketName: string) => any;
};

const Page: FC<Props> = (props) => {
  const renderItem: ListRenderItem<CoinCard> = ({ item }) => {
    return (
      <Card item={item} priceInfo={props.findPriceInfoCoin(item.marketName)} />
    );
  };
  const keyExtractor = (_item: CoinCard, index: number): string =>
    index.toString();

  return (
    <View style={{ width }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
        data={props.list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={20}
      />
    </View>
  );
};
export default Page;