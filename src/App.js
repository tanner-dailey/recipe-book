import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      {routes}
    </div>
  );
}

export default App;
