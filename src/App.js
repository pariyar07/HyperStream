import Homepage from "pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import Explore from "pages/explore/explore.jsx"
import Playlist from "pages/playlist/playlist.jsx"
import History from "pages/history/history.jsx"
import WatchLater from "pages/watch-later/watch-later.jsx"
import Liked from "pages/liked/liked.jsx"
import SingleVideoPage from "pages/singleVideoPage";
import Login from "pages/login/login.jsx";
import SignUp from "pages/signup/signup.jsx";
import { RequiresAuth } from "services/requiresAuth.jsx";
import MainNav from "components/mainNav";

function App() {
  return (
    <div className="App">
      <MainNav/>
      <Routes>
            <Route path="/" element={<Homepage />} />
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
    </div>
  );
}

export default App;
