import Bugsnag, { NotifiableError } from '@bugsnag/expo';

const log = (error: NotifiableError) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
  else {
  Bugsnag.notify(error);}}

const start = () => {
  Bugsnag.start({
    apiKey: process.env.EXPO_PUBLIC_BUGSNAG_API_KEY,
  });
};

export { log, start };
