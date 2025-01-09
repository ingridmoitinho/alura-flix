import styles from './ModalPlay.module.css';
import { MdOutlineCancel } from "react-icons/md";

function ModalPlay({ video, aoFecharModal }) {
  return (
    <>
      {video && (
        <>
          <div className={styles.overley} />
          <div open={!!video} className={styles.modal}>
            <form method="dialog">
              <div>
                <iframe
                  className={styles.video}
                  width="100%"  
                  height="100%"  
                  src={`https://www.youtube.com/embed/${new URL(video.link).searchParams.get('v')}?autoplay=1`}  
                  title={video.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <MdOutlineCancel onClick={aoFecharModal} className={styles.iconeFechar} />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default ModalPlay;
