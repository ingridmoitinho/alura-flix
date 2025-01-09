import styles from './Inicio.module.css';
import { useContext, useState, useEffect } from 'react';
import { VideoContext } from '../../context/VideoContext';
import Banner from '../../components/Banner';
import SessaoPorCategoria from '../../components/SessaoPorCategoria';
import ModalEditar from '../../components/ModalEditar';
import ModalPlay from '../../components/ModalPlay';
import categorias from '../../json/categorias.json';
import db from '../../json/db.json'; 

function Inicio() {
    const { videos: contextVideos, deletarVideo: deletarVideoContext, atualizarVideo } = useContext(VideoContext);

    const [videos, setVideos] = useState([]);

    const [videoSelecionado, setVideoSelecionado] = useState(null);
    const [videoVer, setVideoVer] = useState(null);

    // Inicializa os vídeos apenas uma vez
    useEffect(() => {
        setVideos((prevVideos) => [...new Set([...prevVideos, ...contextVideos, ...db.videos])]);
    }, []);

    const editarVideo = (video) => setVideoSelecionado(video);
    const fecharModal = () => {
        setVideoSelecionado(null);
        setVideoVer(null);
    };
    const verVideo = (video) => setVideoVer(video);

    // Função para deletar vídeo
    const deletarVideo = (videoId) => {
        // Remove o vídeo do estado local
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));       
        deletarVideoContext(videoId);
    };

    return (
        <>
            <Banner categoria={categorias} aoVerVideo={verVideo} />
            <section className={styles.categorias}>
                {categorias.map((categoria, indice) => (
                    <SessaoPorCategoria
                        key={indice}
                        categoria={categoria}
                        videos={videos.filter(video => video.categoria === categoria.nome)} // Filtra os vídeos
                        aoDeletar={deletarVideo}
                        aoEditar={editarVideo}
                        aoVerVideo={verVideo}
                    />
                ))}
            </section>
            <ModalEditar
                video={videoSelecionado}
                aoSalvar={atualizarVideo}
                aoFecharModal={fecharModal}
                categorias={categorias.map((categoria) => categoria.nome)}
            />
            <ModalPlay video={videoVer} aoFecharModal={fecharModal} />
        </>
    );
}

export default Inicio;
