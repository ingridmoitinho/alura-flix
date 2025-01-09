import erro404 from "./erro404.png";
import styles from "./NaoEncontrada.module.css";

function NaoEncontrada () {
    return (
        <div className={styles.container}>
            <img src={erro404} alt="Erro 404" className={styles.img}></img>
            <p className={styles.paragrafo}>Oops! Página não encontrada. Parece que você se perdeu pelo caminho. Volte para a página inicial.</p>
        </div>
    )
}

export default NaoEncontrada;