import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "context/videoContext";
import { AuthProvider } from "context/authContext";
import { ToastContainer } from "react-toastify";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <VideoProvider>
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer
            position="bottom-right"
            autoClose="3000"
            hideProgressBar="false"
            closeOnClick="true"
            pauseOnHover="true"
            draggable="true"
            progress="undefined"
          />
          <App/>
        </AuthProvider>
      </BrowserRouter>
    </VideoProvider>
  </React.StrictMode>,
);
