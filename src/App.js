import "./App.css";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  return (
    <div className="app">
      <div className="search__bar">
        <input type="text" />
        <span>
          <SearchIcon />
        </span>
      </div>
      <div className="main__box">
        <h2>New York</h2>
        <h2>23</h2>
        <h2>Clear Sky</h2>
        <h5>Monday 12:00pm</h5>
      </div>
      <div className="grid__container">
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
        <div className="box1">
          <h2>New York</h2>
          <h2>23</h2>
          <h2>Clear Sky</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
