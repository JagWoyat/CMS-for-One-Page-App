import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './views/App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './views/Admin/Admin';
import MainView from './views/Admin/MainView/MainView';
import DescriptionView from './views/Admin/DescriptionView/DescriptionView';
import ContactView from './views/Admin/ContactView/ContactView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/main"
            element={
              <Admin>
                <MainView />
              </Admin>
            }
          />
          <Route
            path="/admin/description"
            element={
              <Admin>
                <DescriptionView />
              </Admin>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <Admin>
                <ContactView />
              </Admin>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
