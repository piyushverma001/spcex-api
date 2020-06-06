import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import './App.css';
import './Components/Missions'
import Missions from './Components/Missions';
import Launches from './Components/Launches';
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// })

class App extends React.Component {
  render(){

    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/missions" component={Missions}/>
        <Route path="/launches" component={Launches}/>
      </>
    );
  }
}

export default App;
