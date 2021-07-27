import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  value: string | null;
  index: number;
  markerHandler: (item: number) => void;
  highlight?: boolean | string;
}

const Square: React.FC<Props> = ({
  value,
  index,
  markerHandler,
  highlight,
}) => {
  const dynamicStyles = {
    squareHighlight: {
      backgroundColor: highlight ? 'lightgreen' : 'white',
    },
  };

  return (
    <TouchableOpacity
      onPress={() => markerHandler(index)}
      style={[styles.square, dynamicStyles.squareHighlight]}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;
