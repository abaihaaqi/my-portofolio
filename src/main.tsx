import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "@fontsource/fira-code";
import "@fontsource/noto-sans";
import "@fontsource/merriweather";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        components: {
          Text: {
            styles: {
              root: {
                fontFamily: ["Noto Sans", "sans-serif"].join(","),
              },
            },
          },
          Title: {
            styles: {
              root: {
                fontFamily: ["Merriweather", "serif"].join(","),
              },
            },
          },
          Code: {
            styles: {
              root: {
                fontFamily: ["Fira Code", "monospace"].join(","),
              },
            },
          },
        },
        colorScheme: "dark",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
