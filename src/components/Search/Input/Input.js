import React from 'react';
import './search.scss';

const SearchInput = ({ placeholder, handleChange, setValue }) => {
	return (
		<div className='input_wrapper'>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange} />
	    </div>
	)
}

export default SearchInput