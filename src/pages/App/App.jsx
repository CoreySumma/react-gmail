import logo from "../../../src/logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to API HELL. So nice to see you again.</h2>
        <p>
          This app will attempt to use google Oauth2 API and Gmail API so you
          can login to your email and get a summary
          <br /> of each message for the day classified by urgency using OpenAI
          API.
        </p>
        <p>I will try to see how well gpt-4 can interpret human language</p>
      </header>
    </div>
  );
}
