import React from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import data from '../../json/db.json'; 
import NaoEncontrada from '../NaoEncontrada';

function Player() {
    // Pega o parâmetro 'id' da URL
    const parametros = useParams();

    // Encontra o vídeo pelo 'id' da URL
    const video = data.videos.find((video) => video.id === Number(parametros.id));

    // Se o vídeo não for encontrado, renderiza o componente de não encontrado
    if (!video) {
        return <NaoEncontrada />;
    }

    // Renderiza o player do vídeo
    return (
        <div className={styles.playerContainer}>
            <h1 className={styles.videoTitle}>{video.titulo}</h1>
            <iframe
                className={styles.videoFrame}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${new URL(video.link).searchParams.get('v')}?autoplay=1`}
                title={video.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <p className={styles.videoDescription}>{video.descricao}</p>
        </div>
    );
}

export default Player;
