import "./SearchButton.scss";

function SearchButton() {
  return (
    <div className="search-button container">
      <div className="input-group d-flex justify-content-center flex-nowrap">
        <input
          type="search"
          className="input"
          id="Email"
          name="Email"
          placeholder="Search query..."
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchButton;
