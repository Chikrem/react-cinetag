import { createContext, useContext, useState } from "react";

const VideosContext = createContext();
VideosContext.displayName = "Videos";

export function VideosProvider({ children }) {
  const [videos, setVideos] = useState(null);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideosContext() {
  return useContext(VideosContext);
}