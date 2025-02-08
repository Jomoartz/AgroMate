import React, { ReactNode } from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

type AppFormPropsValidationSchema<T extends object> = Yup.ObjectSchema<T>;

interface AppFormProps<T extends object> {
  initialValues: T;
  onSubmit: (
    values: T,
    formikHelpers: FormikHelpers<T>,
    otherProps?: Record<string, unknown>
  ) => void | Promise<unknown>;
  validationSchema: AppFormPropsValidationSchema<T>;
  children: ReactNode;
}

const AppForm = <T extends object>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...otherProps
}: AppFormProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) =>
        onSubmit(values, formikHelpers, otherProps)
      }
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export { AppForm };
