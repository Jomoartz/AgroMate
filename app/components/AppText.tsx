import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

const AppText = ({
  children,
  style,
}: PropsWithChildren & { style?: Record<string, unknown> }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export { AppText };
