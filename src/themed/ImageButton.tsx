import React from 'react';
import {
  Image,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IImageButton extends Partial<TouchableOpacityProps & ImageProps> {
  square?: boolean;
  height?: number;
  width?: number;
  source: ImageProps['source'];
}

export const ImageButton: React.FC<IImageButton> = ({
  height,
  width,
  source,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={source}
        style={{
          height,
          width: width || height,
        }}
      />
    </TouchableOpacity>
  );
};
