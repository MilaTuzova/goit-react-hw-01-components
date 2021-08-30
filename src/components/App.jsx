import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticalData from '../data/statistical-data.json'
import { Container } from './App.styled';


export const App =() => {
  return  ( 
    <Container>
<Profile 
name={user.name}
avatar={user.avatar}
tag={user.tag}
location={user.location}
stats={user.stats}
 />

<Statistics
  title="Upload stats"
  stats={statisticalData}
 />

 {/* <Statistics stats={statisticalData} /> */}

    </Container>
  );
}




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
