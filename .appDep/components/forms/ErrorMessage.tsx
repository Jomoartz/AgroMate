import { FormikErrors } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';

import { AppText } from '../AppText';

const ErrorMessage = ({
  error,
  visible,
}: {
  error?: FormikErrors<string | string[] | undefined>;
  visible?: boolean;
}) => {
  if (!visible || !error) {
    return null;
  }

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
export { ErrorMessage };
