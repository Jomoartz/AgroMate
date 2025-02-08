import React from 'react';
import { useFormikContext } from 'formik';

import { AppButton } from '../AppButton';

interface submitButtonProps {
  title: string;
  color?: string;
}
const SubmitButton = ({ title, color }: submitButtonProps) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton color={color} onPress={handleSubmit}>
      {title}
    </AppButton>
  );
};

export { SubmitButton };
