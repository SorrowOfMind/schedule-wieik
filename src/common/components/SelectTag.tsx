interface SelectTagProps {
  option: string;
  clearOption: (
    e: React.MouseEvent | React.PointerEvent,
    option: string
  ) => void;
}

const SelectTag = ({ option, clearOption }: SelectTagProps) => {
  return (
    <span
      key={option}
      className="selectTag"
      onClick={(e) => clearOption(e, option)}
    >
      {option}
      <span className="text-xl">&times;</span>
    </span>
  );
};

export default SelectTag;
