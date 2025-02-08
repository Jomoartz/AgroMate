import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

const AppTextinput = ({
  icon,
  ...otherProps
}: {
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'] | '';
  value?: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.dark}
          style={styles.icon}
        />
      )}

      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: ' 100%',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    margin: 10,
    borderRadius: 25,
  },
});

export { AppTextinput };
