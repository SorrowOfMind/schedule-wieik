import React, { useState } from 'react';
import SelectOptions from './SelectOptions';
import SelectTag from './SelectTag';

interface SelectProps {
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedOptions: string[];
}

const Select = ({ setSelectedOptions, selectedOptions }: SelectProps) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleSelectedOptions = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectOption) => selectOption !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const clearOptions = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    setSelectedOptions([]);
  };

  const clearOption = (
    e: React.MouseEvent | React.PointerEvent,
    option: string
  ) => {
    e.stopPropagation();
    setSelectedOptions(
      selectedOptions.filter((selectOption) => selectOption !== option)
    );
  };

  return (
    <div
      tabIndex={0}
      className="selectContainer"
      onClick={toggleMenu}
      onBlur={() => setMenuOpen(false)}
    >
      <span className="flex flex-wrap grow gap-2">
        {selectedOptions.map((option) => (
          <SelectTag key={option} option={option} clearOption={clearOption} />
        ))}
      </span>
      <button
        type="button"
        className="bg-none border-none cursor-pointer p-0 outline-none text-4xl flex justify-center items-center leading-none"
        onClick={(e) => clearOptions(e)}
      >
        &times;
      </button>
      <div className="bg-standardGrey w-px h-10" />
      <div className="caret" />
      <SelectOptions
        isMenuOpen={isMenuOpen}
        selectedOptions={selectedOptions}
        handleSelectedOptions={handleSelectedOptions}
      />
    </div>
  );
};

export default Select;
