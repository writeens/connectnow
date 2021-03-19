import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Select from 'react-select';

/// OPTION FOR REACT-SELECT
const orderByOptions = [
  { value: 'release', label: 'Release Date' },
  { value: 'score', label: 'Score' },
  { value: 'name', label: 'Name' },

];

/// CUSTOM SELECT COMPONENT
const CustomSelect = ({ options, onSelect }:{options?:{}[], onSelect:Function}) => {
  const handleChange = (value:any) => {
    onSelect(value);
  };
  return (
    <div className="flex-1">
      <Select
        className="order-select-container"
        classNamePrefix="order-select"
        isClearable={false}
        name="order"
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

CustomSelect.defaultProps = {
  options: [],
};

const Filter = ({
  handleChangeName,
  handleChangeScore,
  handleChangeOrder,
  isAscending,
  changeDirection,
}
  :{handleChangeName:Function,
    handleChangeScore:Function,
    handleChangeOrder:Function,
    changeDirection:Function,
    isAscending:boolean,
  }) => {
  /// USER SELECTS AN ITEM FROM THE ORDER BY DROPDOWN
  const handleUserSelectsItem = (option:{value:string}) => {
    handleChangeOrder(option.value);
  };

  return (
    <div style={{ height: 'fit-content' }} className="flex flex-col w-full mb-10 lg:mb-0 lg:w-80 font-montserrat bg-c-firefly shadow-xl py-4 px-4 lg:mr-8">
      <p className="mb-6 md:mb-12 text-lg ">Filter Results</p>
      <label htmlFor="name" className="mb-6 md:mb-12">
        <p className="text-sm mb-1">Name</p>
        <input
          id="name"
          type="text"
          className=" bg-c-stone w-full text-sm h-10 pl-2"
          placeholder="Please enter a name"
          onChange={(e) => handleChangeName(e.target.value)}
        />
      </label>
      <div className="flex-col md:flex-row lg:flex-col flex lg:mb-0 mb-8">
        <label htmlFor="score" className=" mb-8 md:mb-0 lg:mb-12 w-full md:w-64 lg:w-auto lg:mr-0 mr-8">
          <p className="text-sm mb-1">Minimum Score</p>
          <input
            id="score"
            type="number"
            max={100}
            min={1}
            maxLength={2}
            className=" bg-c-stone w-full text-sm h-10 pl-2"
            placeholder="Please enter a minimum score"
            onChange={(e) => handleChangeScore(e.target.value)}
          />
        </label>
        <div className="lg:mb-16 flex-1">
          <p className="text-sm mb-1">Order By</p>
          <div className="flex-row flex">
            <button type="button" onClick={() => changeDirection()} className="bg-c-accent-blue outline-none focus:outline-none flex justify-center items-center w-10 h-10">
              {isAscending ? <BsArrowUp size="25" color="white" /> : <BsArrowDown size="25" color="white" />}
            </button>
            <CustomSelect
              options={orderByOptions}
              onSelect={handleUserSelectsItem}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" bg-c-accent-blue text-sm self-end px-6 py-1"
      >
        Clear

      </button>
    </div>
  );
};

export default Filter;
