import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />
        <footer>
          <a
            href="https://github.com/aliciaelena/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/alicia-nagele-789b5561?originalSubdomain=at"
            target="_blank"
            rel="noreferrer"
          >
            Alicia Nagele
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
