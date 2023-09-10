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
      className="flex border border-standardGrey p-2 text-xl font-semibold cursor-pointer items-center justify-between outline-none bg-none mr-3 mb-2 hover:border-red-400"
      onClick={(e) => clearOption(e, option)}
    >
      {option}
      <span className="text-xl ml-1">&times;</span>
    </span>
  );
};

export default SelectTag;
