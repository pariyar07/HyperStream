import axios from "axios";

export const getVideos = () => axios.get("/api/videos");