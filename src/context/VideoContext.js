import { createContext, useState } from 'react';

export const VideoContext = createContext();

export function VideoProvider({ children }) {
    const [videos, setVideos] = useState([]);

    const adicionarNovoVideo = (novoVideo) => {
        setVideos((prevVideos) => [...prevVideos, novoVideo]);
    };

    const deletarVideo = (id) => {
        setVideos((prevVideos) => prevVideos.filter(video => video.id !== id));
    };

    const atualizarVideo = (videoAtualizado) => {
        setVideos((prevVideos) => 
            prevVideos.map(video => (video.id === videoAtualizado.id ? videoAtualizado : video))
        );
    };

    return (
        <VideoContext.Provider value={{ videos, adicionarNovoVideo, deletarVideo, atualizarVideo }}>
            {children}
        </VideoContext.Provider>
    );
}
