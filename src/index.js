import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Grommet } from "grommet";
const customBreakpoints = {
  global: {
    breakpoints: {
      xsmall: {
        value: 375,
      },
      small: {
        value: 568,
        edgeSize: {
          none: '0px',
          small: '6px',
          medium: '12px',
          large: '24px',
        },
      },
      medium: {
        value: 768,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      large: {
        value: 1024,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      xlarge: {
        value: 1366,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
    },
  },
};
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Grommet theme={customBreakpoints} full>
        <App />
      </Grommet>
    </RecoilRoot>
  </React.StrictMode>,

  document.getElementById("root")
);
