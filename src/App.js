import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id='page-body'>
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} />
          <Route path='/articles-list' component={ArticlesList} />
          <Route path='/article/:name' component={ArticlePage} />
        </div>
        </div>

    </Router>
  
  );
}

export default App;