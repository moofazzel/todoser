import Header from "../components/Header";
import "../styles/globals.css";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "../Context/AuthProvider";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
