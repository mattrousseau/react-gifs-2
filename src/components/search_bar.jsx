import React from 'react';


const SearchBar = (props) => {
  const handleChange = (event) => {
    props.search(event.currentTarget.value);
  };

  return (
    <input type="text" className="form-control form-search" onChange={handleChange} />
  );
};

export default SearchBar;
