import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
interface CustomAppProps extends AppProps {
  session: any;
}

function MyApp({ Component, pageProps, session }: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
