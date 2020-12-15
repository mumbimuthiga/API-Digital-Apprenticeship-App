
import './App.css';
import chuck from './chuck.jpg'

function App() {
  return (
    <div className="container">
    <div className="row">
    <div className="col-6">
    <h1 className='title'>Chuck Norris Facts</h1>
    <img src={chuck} alt="Chuck Norris" height='200px' width='200px'></img>
    </div>


    <div className="col-6 searchjokecol">
    <div className="card">
    <div className="card-header">
    Search for a joke
    </div>
    <div className='card-body'>
    <input type="search"></input>
    </div>
    </div>
    <div>
    <button className="btn btn-warning btn-lg">Generate Joke</button>
    </div>
    </div>
   
    </div>
     
    </div>
  );
}

export default App;
