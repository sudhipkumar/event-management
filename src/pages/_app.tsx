import { AppProps } from "next/app";
import "../styles/global.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
