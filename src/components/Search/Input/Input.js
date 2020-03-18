import React from 'react';
import './search.scss';

const SearchInput = ({ placeholder, handleChange, setValue }) => {
	return (
		<div className='input_wrapper'>
          <input
            type="text"
            placeholder={placeholder}
            // className={`form-control ${innerClasses}`}
            onChange={handleChange} />
	    </div>
	)
}

export default SearchInput