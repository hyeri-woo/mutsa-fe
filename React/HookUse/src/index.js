import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { Consumer } from "./HookContext/Consumer";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Consumer />);
