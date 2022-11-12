import styles from "./CanvasSticker.module.css";
const CanvasSticker = ({ video, title = "" }) => {
  return (
    <div className={styles.sticker}>
      <video
        id="videoSticker"
        className={styles.video}
        src={video}
        alt="sticker"
        autoPlay
        muted
        loop
      ></video>
      {title && <h3 className={styles.title}>{title}</h3>}
    </div>
  );
};

export default CanvasSticker;
