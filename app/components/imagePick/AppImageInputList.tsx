import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { AppImageInput } from './AppImageInput';

interface appImageInputListProps {
  imageUris: string[] | undefined;
  onRemoveImage: (uri: string | null) => void;
  onAddImage: (uri: string | null) => void;
}

const AppImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: appImageInputListProps) => {
  const scrollView = useRef<ScrollView | null>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri: string) => (
            <View key={uri} style={styles.image}>
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput
            onChangeImage={(uri: string | null) => onAddImage(uri)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 15,
  },
});

export { AppImageInputList };
