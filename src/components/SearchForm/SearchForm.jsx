const SearchForm = ({ resultBySearch, setSearchParams, querySearch }) => {
  const handleChange = ({ target: { value } }) => {
    const nextParams = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    resultBySearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search
        <input
          onChange={handleChange}
          type="text"
          name="search"
          value={querySearch}
        />
      </label>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
