import React from 'react';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label htmlFor="">Enter Search Term</label>
            <input
              type="text"
              className="input"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
