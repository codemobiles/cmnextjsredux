import React, { ReactElement, Component } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import Head from "next/head";
interface Props{  
}

function CMApp({ Component, pageProps }: AppProps) {
    console.log("Hey")
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default CMApp;
