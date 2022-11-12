const BtnGeneral = ({ className, onClick, icon: Icon }) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon />
    </button>
  );
};

export default BtnGeneral;
