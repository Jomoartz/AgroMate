import { useState, useEffect } from 'react';
import { Unsubscribe } from 'firebase/auth';
import { log } from '../utility/logger';

type ApiFunction<TArgs extends unknown[], TResult> = (
  ...args: TArgs
) => TResult;

const useApi = <TArgs extends unknown[], TResult>(
  apiFunc: ApiFunction<TArgs, TResult>
) => {
  const [data, setData] = useState<TResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [unsubscribe, setUnsubscribe] = useState<Unsubscribe | null>(null);

  const request = async (...args: TArgs): Promise<TResult | null> => {
    setLoading(true);
    try {
      const response = await apiFunc(...args);
      if (typeof response === 'function') {
        setUnsubscribe(() => response as Unsubscribe);
      } else {
        setData(response);
      }
      setError(null);
      return response;
    } catch (err) {
      console.log('API function error:', err);
      if (err instanceof Error) {
        setError(err.message || 'An unexpected error occurred');
        log(err.message);
      }
      setData(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [unsubscribe]);
  log(`${error}`)
  return { data, error, loading, request };
};

export { useApi };
