import { useState } from "react";
import styles from "./Video.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

function Video({ video, categoria, aoDeletar, aoEditar, aoVerVideo }) {
  return (
    <div className={styles.container} style={{ borderColor: categoria.cor }}>
      <div className={styles.imagem}>
        <img
          className={styles.imagemItem}
          src={video.imagem}
          alt={video.titulo}
        />
        <div
          onClick={() => aoVerVideo(video)}
          className={styles.divImg}
          style={{ color: categoria.cor }}
        ></div>
      </div>
      <div className={styles.opcoes}>
        <div className={styles.item_opcao} onClick={() => aoDeletar(video.id)}>
          <button className={styles.deleteButton}>
            <FaTrashAlt /> Delete{" "}
          </button>
        </div>
        <div
          className={styles.item_opcao}
          onClick={() => {
            aoEditar(video);
          }}
        >
          <button className={styles.editButton}>
            <FaEdit /> Edit
          </button>
        </div>

        <Link to={`/${video.id}`} className={styles.aboutButton}>
          <MdOutlineReadMore className={styles.icon} /> About
        </Link>
      </div>
    </div>
  );
}

export default Video;
