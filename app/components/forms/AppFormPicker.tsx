import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { useFormikContext } from 'formik';
import { AppPicker } from '../AppPicker';
import { ErrorMessage } from './ErrorMessage';

type items = {
  label: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  backgroundColor: string;
  value: number;
};

type appFormPickerProps = {
  items: items[];
  name: string;
  placeholder: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
};

const AppFormPicker = ({
  items,
  name,
  placeholder,
  icon,
}: appFormPickerProps) => {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<Record<string, items | null>>();

  return (
    <>
      <AppPicker
        icon={icon}
        items={items}
        onSelectedItems={(item: items) => setFieldValue(name, item)}
        selectedItems={values[name] ?? null}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name] as string} visible={touched[name]} />
    </>
  );
};

export { AppFormPicker };
