import logo from "../../assets/two.png";
import NavBar from '../../components/NavBar/NavBar';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1 className="text-5xl">Skip the appetizer and cut right to the main course.</h1>
        <br />
        <p className="text-3xl">Get the run down on all your daily emails with the click of a button.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
