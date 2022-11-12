import styles from "./CardEpisode.module.css";
const CardEpisode = ({ name, episode, air_date }) => {
  return (
    <article className={styles.episode}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.wrap}>
        <span className={styles.subtitleCard}>air date:</span>
        <span>{air_date}</span>
      </div>
      <div className={styles.wrap}>
        <span className={styles.subtitleCard}>episode:</span>
        <span>{episode}</span>
      </div>
    </article>
  );
};

export default CardEpisode;
