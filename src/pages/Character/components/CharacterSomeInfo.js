import styles from "./CharacterSomeInfo.module.css";
const CharacterSomeInfo = ({ title, titleInfo }) => {
  return (
    <div className={styles.someInfo}>
      <span className={styles.title}>{title}:</span>
      <span>{titleInfo}</span>
    </div>
  );
};

export default CharacterSomeInfo;
