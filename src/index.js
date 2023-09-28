import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LlmPortal from './LlmPortal';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LlmPortal />
  </React.StrictMode>
);
