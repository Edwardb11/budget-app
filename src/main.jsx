import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ReloadPrompt from "./ReloadPrompt";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <ReloadPrompt />
    <App />
  </ChakraProvider>,
  rootElement
);
