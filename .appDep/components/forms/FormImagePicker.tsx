import React from 'react';
import { useFormikContext } from 'formik';

import { AppImageInputList } from '../imagePick/AppImageInputList';
import { ErrorMessage } from './ErrorMessage';

const FormImagePicker = ({ name }: { name: string }) => {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<Record<string, string[]>>();
  const imageUris = values[name];

  const handleAdd = (uri: string | null) => {
    if (Array.isArray(imageUris)) {
      setFieldValue(name, [...imageUris, uri]);
    }
  };

  const handleRemove = (uri: string | null) => {
    setFieldValue(
      name,
      imageUris?.filter((imageUri: string) => imageUri !== uri) ?? []
    );
  };

  return (
    <>
      <AppImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export { FormImagePicker };
