const SearchBar = ({onSearch}) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input type="text" placeholder="Search Rooms...." onChange={handleChange} />
  )
}

export default SearchBar;