import { useContext } from 'react';
import { VideoContext } from '../../context/VideoContext';
import Formulario from '../../components/Formulario';
import categorias from '../../json/categorias.json';

function NovoVideo() {
    const { adicionarNovoVideo } = useContext(VideoContext);

    return (
        <Formulario
            aoCadastrar={adicionarNovoVideo}
            categorias={categorias.map((categoria) => categoria.nome)}
        />
    );
}

export default NovoVideo;
