import './App.css';
import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import Profile from './components/Profile';
import GetBookMarks from './components/GetBookMarks.jsx'

function App() {

  return (
    <div className="App">
      <h1>TwitVice</h1>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
      <br />
      <header className="App-header">
        <Profile />
        <GetBookMarks/>
        
        <br />
      </header>
    </div>
  );
}

export default App;
