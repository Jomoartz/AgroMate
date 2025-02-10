import { View } from 'react-native';
import React, { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface appIconProps {
  name: ComponentProps<typeof MaterialCommunityIcons>['name'];
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const AppIcon = ({
  name,
  size = 50,
  backgroundColor,
  iconColor = '#fff',
}: appIconProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export { AppIcon };
