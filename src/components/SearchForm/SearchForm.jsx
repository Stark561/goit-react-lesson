import { useState } from 'react';

const SearchForm = ({ resultBySearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    resultBySearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search
        <input
          onChange={handleChange}
          type="text"
          name="search"
          value={searchQuery}
        />
      </label>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
