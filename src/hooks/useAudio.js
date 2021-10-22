import { useRef } from "react";

const useAudio = (path, volume) => {
  const audioRef = useRef(new Audio(path));
  audioRef.current.volume = volume;
  return () => {
    audioRef.current.play();
  };
};

export default useAudio;
