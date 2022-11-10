import styles from "./CanvasSticker.module.css";
const CanvasSticker = ({ sticker }) => {
  return (
    <div className={styles.sticker}>
      <video
        id="videoSticker"
        className={styles.video}
        src={sticker}
        alt="sticker"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default CanvasSticker;
