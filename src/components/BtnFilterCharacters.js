import styles from "./BtnFilterCharacters.module.css";
const BtnFilterCharacters = ({
  arrOptions,
  firstText = "",
  onChange,
  dataQueryParam,
  dataField,
  selectedQueryValue,
}) => {
  return (
    <select
      data-query-param={dataQueryParam}
      data-field={dataField}
      onChange={onChange}
      value={selectedQueryValue}
      className={styles.select}
    >
      <option value="">{firstText}</option>
      {arrOptions.map((opt, i) => (
        <option
          // selected={selectedQueryValue === opt.queryValue}
          key={i}
          value={opt.queryValue}
        >
          {opt.title}
        </option>
      ))}
    </select>
  );
};

export default BtnFilterCharacters;
