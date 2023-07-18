import { useState } from 'react';
import { GROUPS_OPTIONS } from '../../constants';

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

  return (
    <div
      className="selectContainer"
      onClick={toggleMenu}
      onBlur={() => setMenuOpen(false)}
    >
      <span className="tagsContainer">
        {selectedOptions.map((option) => (
          <span key={option} className="selectTag">
            {option}
          </span>
        ))}
      </span>
      <button type="button" className="clearBtn">
        &times;
      </button>
      <div className="bg-standardGrey w-px" />
      <div className="caret" />
      <ul className={`selectMenu ${isMenuOpen ? 'open' : ''}`}>
        {GROUPS_OPTIONS.map((group) => (
          <li key={group.name} className="font-semibold">
            <p className="p-3">{group.name}</p>
            <ul className="font-normal">
              {group.options.map((option) => (
                <li
                  key={option}
                  className="p-3 pl-5 hover:bg-standardGrey"
                  onClick={() => handleSelectedOptions(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
