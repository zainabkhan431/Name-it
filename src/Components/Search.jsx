import "./Search.css";
function Search({ onInputChange }) {
  return (
    <div className="search-bar">
      <input
        onChange={(e) => onInputChange(e.target.value)}
        type="text"
        placeholder="Enter Your KeyWords"
        className="search-container"
      />
    </div>
  );
}

export default Search;
