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
import { VideoProvider } from "context/videoContext";


// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <VideoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="*" element={<div style={{ display: "flex", justifyContent: "center" }}><h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1></div>} />
        </Routes>
      </BrowserRouter>
    </VideoProvider>
  </React.StrictMode>,
);
