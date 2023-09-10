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
      <span className="flex flex-wrap w-5/6 md:w-4/5">
        {selectedOptions.map((option) => (
          <SelectTag key={option} option={option} clearOption={clearOption} />
        ))}
      </span>
      <div className="flex flex-row justify-end w-full md:w-1/5">
        <div
          className="cursor-pointer bg-darkGrey hover:bg-topbar x-btn"
          onClick={(e) => clearOptions(e)}
        />
        <div className="bg-standardGrey w-px h-10 mx-3" />
        <div className="caret text-xl" />
        <SelectOptions
          isMenuOpen={isMenuOpen}
          selectedOptions={selectedOptions}
          handleSelectedOptions={handleSelectedOptions}
        />
      </div>
    </div>
  );
};

export default Select;
