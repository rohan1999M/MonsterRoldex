import logo from './logo.svg';
import './App.css';
import Monster from './Components/Monster';
import SearchBox from './Components/search-box/SearchBox-component';
import Employee from './Components/Employees/Employee-component';

function App() {
  return (
    <div className="App">
      
      {/* <Employee/> */}
      <h1 className= 'app-title'>Monster Rolodex</h1>
       <Monster/>
       
     
    </div>
  );
}

export default App;
