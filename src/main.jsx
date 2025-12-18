import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

// QueryClientを1つ作る
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);