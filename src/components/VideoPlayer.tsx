
import React from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  duration: string;
  className?: string;
}

const VideoPlayer = ({
  thumbnail,
  title,
  duration,
  className,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Aqui você implementaria a lógica para iniciar um vídeo real
    // Por enquanto vamos apenas simular
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <div className={cn("relative rounded-lg overflow-hidden w-full", className)}>
      <div className="relative aspect-video bg-muted">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </button>
          )}
          {isPlaying && (
            <div className="text-white font-medium">Carregando vídeo...</div>
          )}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default VideoPlayer;
