import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-cmicj1i4.us.auth0.com"
    clientId='VHAyLqFt2Lflt95Z7muag9ZRdEiqF5er'
    redirectUri={window.location.origin}
    // audience="https://api.twitter.com/oauth2/token"
    // scope="tweet.read users.read bookmark.write"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
