import React from 'react';
import {Route,Link} from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>HI JINI</h1>
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
          </ul>
      </nav>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/contacts" component={Contacts} />
  </header>
)

const Welcome = ({match}) => <h1>Welcome to the JINI APP</h1>

// const Welcome = ({ match }) => console.log(match);

const Contacts = () => (
	<ul>
		<li>Seojin</li>
    <li>Dong</li>
    <li>Choi man</li>
	</ul>
);

export default App;
