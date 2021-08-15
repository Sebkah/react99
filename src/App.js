import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/pages/About';
import Movies from './components/pages/Movies';
import Movie from './components/movies/Movie';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/about'>
            <About in={true} />
          </Route>
          <Route exact path='/director'>
            Hi
          </Route>
          <Route exact path='/movies'>
            <Movies />
          </Route>
          <Route
            exact
            path='/movies/:movie'
            render={(props) => <Movie {...props} />}
          />
        </Switch>

        <NavBar />
      </Router>
    </div>
  );
}

export default App;
