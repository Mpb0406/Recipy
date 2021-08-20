import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
      <Login />
    </div>
  );
}

export default App;
