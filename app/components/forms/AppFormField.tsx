import React, { ComponentProps } from 'react';
import { useFormikContext } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppTextinput } from '../AppTextinput';
import { ErrorMessage } from './ErrorMessage';

type appFormFieldProps = {
  name: string;
  textContentType?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: string;
  icon?: ComponentProps<typeof MaterialCommunityIcons>['name'] | '';
  keyboardType?: string;
};

const AppFormField = ({
  name,
  icon = '',
  ...otherProps
}: appFormFieldProps): JSX.Element => {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext<Record<string, string>>();

  return (
    <>
      <AppTextinput
        icon={icon}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export { AppFormField };
