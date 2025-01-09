import styles from "./PaginaBase.module.css";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main className={styles.main}>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </main>
  );
}

export default PaginaBase;
