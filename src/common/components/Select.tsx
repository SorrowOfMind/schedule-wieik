import { useState } from 'react';
import { GROUPS_OPTIONS } from '../../constants';

const Select = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="selectContainer" onClick={toggleMenu}>
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
                <li key={option} className="p-3 pl-5 hover:bg-standardGrey">
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
