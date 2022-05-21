import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "pages/explore/explore.jsx"
import Playlist from "pages/playlist/playlist.jsx"
import History from "pages/history/history.jsx"
import WatchLater from "pages/watch-later/watch-later.jsx"
import Liked from "pages/liked/liked.jsx"
import SingleVideoPage from "pages/singleVideoPage";
import { VideoProvider } from "context/videoContext";
import { AuthProvider } from "context/authContext";
import Login from "pages/login/login.jsx";
import SignUp from "pages/signup/signup.jsx";
import { RequiresAuth } from "services/requiresAuth.jsx";
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
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/explore" element={<RequiresAuth><Explore /></RequiresAuth>} />
            <Route path="/video/:videoId" element={<SingleVideoPage />} />
            <Route path="/playlist" element={<RequiresAuth><Playlist /></RequiresAuth>} />
            <Route path="/history" element={<RequiresAuth><History /></RequiresAuth>} />
            <Route path="/liked" element={<RequiresAuth><Liked /></RequiresAuth>} />
            <Route path="/watch-later" element={<RequiresAuth><WatchLater /></RequiresAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<div style={{ display: "flex", justifyContent: "center" }}><h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1></div>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </VideoProvider>
  </React.StrictMode>,
);
