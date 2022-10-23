import { useEffect, useState } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import { Router } from 'next/router';
import { delay } from '@utils/delay';

const DISAPPEAR_DELAY = 400;

export const useFetchIndicator = () => {
  const [loading, setLoading] = useState(false);

  const isFetching = useIsFetching();
  const [delayedFetching, setDelayedFetching] = useState(isFetching);

  // Make indicator less jarring by ensuring it is visible for at least the time of the disappear delay
  useEffect(() => {
    if (isFetching) {
      setDelayedFetching(isFetching);
      return;
    }

    const timeout = setTimeout(() => {
      setDelayedFetching(isFetching);
    }, DISAPPEAR_DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, [isFetching]);

  // Listen for router changes to show and hide the indicator
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };

    const delayedEnding = async () => {
      await delay(DISAPPEAR_DELAY);
      setLoading(false);
    };

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', delayedEnding);
    Router.events.on('routeChangeError', delayedEnding);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', delayedEnding);
      Router.events.off('routeChangeError', delayedEnding);
    };
  }, []);

  return { shouldSpin: loading || !!delayedFetching };
};
