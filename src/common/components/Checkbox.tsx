interface CheckboxProps {
  label: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ label, isChecked, setIsChecked }: CheckboxProps) => {
  return (
    <div className="flex items-center text-white mb-4 md:mb-0">
      <input
        type="checkbox"
        className={`checked ${isChecked ? 'active' : ''}`}
        id="lecture"
        onClick={() => setIsChecked((prevState) => !prevState)}
      />
      <label className="text-2xl leading-9" htmlFor="lecture">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
