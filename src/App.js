import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/pages/About';
import Movies from './components/pages/Movies';

function App() {
  return (
    <div className='container'>
      <Router>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/director'>
          Hi
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>

        <NavBar />
      </Router>
    </div>
  );
}

export default App;
