import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface ListRendererProps<T> {
  data: T[];
  renderItem: (item: T) => ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}

const ListRenderer = <T,>({
  data,
  renderItem,
}: ListRendererProps<T>) => {
  console.log(data);
  return (
    <>
      {data.map((item, index) => (
        renderItem({ ...item, key: index })
      ))}
    </>
  );
};

export default ListRenderer;
