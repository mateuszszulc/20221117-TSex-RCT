import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppSimpleStaticData } from './71-simple-static-data/AppSimpleStaticData'
import { AppUseStateAndHooks } from './72-use-state-and-hooks/AppUseStateAndHooks'
import { AppMyOwnHook } from './73-my-own-hook/AppMyOwnHook'
import { AppFunctionAsAChildComponent } from './74-function-as-a-child-component/AppFunctionAsAChildComponent'

import 'bulma/css/bulma.css';
import { AppContextCommunication } from './75-context-communication/AppContextCommunication'
import {
  AppWithHigherOrderComponents
} from './76-higher-order-component/AppWithHigherOrderComponents'
import AppWithClassComponent from './77-legacy-class-components/AppWithClassComponent'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/*
* Here you have a list of tasks to do,
* In practice, these are separate folders from the `root` Component.
* */
const Run = {
  Task71: AppSimpleStaticData,
  Task72: AppUseStateAndHooks,
  Task73: AppMyOwnHook,
  Task74: AppFunctionAsAChildComponent,
  Task75: AppContextCommunication,
  Task76: AppWithHigherOrderComponents,
  Task77: AppWithClassComponent,
}

root.render(
  <React.StrictMode>
    {/*
         Here below you replace the task number, e.g. Run.Task73
         and then you can see them after `npm start` in the browser, and you can start solving.
       */}
    <Run.Task73 />
  </React.StrictMode>
);
