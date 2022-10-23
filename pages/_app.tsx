import { ReactElement, ReactNode } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ColorScheme } from '@mantine/core';
import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext, NextPage } from 'next';
import { AppProps } from 'next/app';
import { COLOR_THEME_COOKIE_KEY, MantineProvider } from '@providers/MantineProvider';
import { ReactQueryProvider } from '@providers/ReactQueryProvider';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps & {
  Component: NextPageWithLayout;
  savedColorScheme?: ColorScheme;
  pageProps: { dehydratedState?: unknown };
};

export default function App({ Component, pageProps: { dehydratedState, ...pageProps } = {}, savedColorScheme }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <UserProvider>
      <ReactQueryProvider dehydratedState={dehydratedState}>
        <MantineProvider savedColorScheme={savedColorScheme}>{getLayout(<Component {...pageProps} />)}</MantineProvider>
      </ReactQueryProvider>
    </UserProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  savedColorScheme: getCookie(COLOR_THEME_COOKIE_KEY, ctx) ?? undefined,
});
