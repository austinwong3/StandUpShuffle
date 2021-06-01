import logo from './logo.svg';
import ShufflePage from './Components/ShufflePage'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import SideNav from './Components/SideNav'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCz0qbMUPOmaFGR63mtCfMo5eaVW0UquKA",
    authDomain: "stand-up-shuffle.firebaseapp.com",
    projectId: "stand-up-shuffle",
    storageBucket: "stand-up-shuffle.appspot.com",
    messagingSenderId: "268887686235",
    appId: "1:268887686235:web:30c26272c1945fd6bfd37e"

})

const firestore = firebase.firestore();
 

function App() {
  const testRef = firestore.collection('teams')
  const query = testRef.orderBy('name')

  const [teamsData] = useCollectionData(query)
  const teams = {}
  teamsData && teamsData.map((data) => teams[data.name] = {name: data.name, members: data.members})
  const keys = []
  teamsData && teamsData.map((data) => keys.push(data.name))
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Router>
        <NavBar />
        <SideNav teams={keys ? keys : []}/>
        <Switch>
          <Route path='/StandUpShuffle/team/:name' render={(props) => teamsData ? <ShufflePage team={teams[props.match.params.name]}/> : null}>
            {/* <div class="d-flex flex-column justify-content-center">
              {teamsData ? <ShufflePage team={teams['LCD']}/> : null}
            </div> */}
          </Route>
          <Route path='/StandUpShuffle'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
