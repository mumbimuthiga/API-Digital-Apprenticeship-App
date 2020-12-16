
import './App.css';
import chuck from './chuck.jpg';
import {useEffect ,useState} from 'react';
import axios from 'axios';

function App() {
   const [state ,setState]=useState({
    
    category:[]
   })
   const [joke ,setJoke]=useState({
    joke:'' 
   })
     
 const [specJoke ,setSpecJoke]=useState({
   specJoke:[]
 })

  useEffect(()=>{
    fetchData();
    fetchCategory();

  } ,[])

  const fetchData=async()=> {
    const results=await axios.get('https://api.chucknorris.io/jokes/categories');
    //console.log(results);
    setJoke({
      ...joke,
      joke:results.data
    }
      
    )

  }

  const fetchCategory=async()=>{
    const result=await axios.get('https://api.chucknorris.io/jokes/random');
    //console.log(result);
    setState({
      ...state,
      category:result.data.value

    })
    
  }
  const specCategory=async()=>{
    const res=await axios.get('https://api.chucknorris.io/jokes/random?category=animal');
    
    console.log(res)
    setSpecJoke({
      ...specJoke,
      specJoke:res.data

    })
  }
  return (
    <div className="container">
    
    <h1 className='title'>Chuck Norris Facts</h1>
    <div className="Categories">

<button className="btn btn-warning btn-lg" onClick={fetchData}>Show Categories</button>

<p>{joke.joke}</p>

</div>
<div className="row">

<div className="col-6">
<div className="displayjokes">
<button className="btn btn-warning btn-lg category" onClick={fetchCategory}>Random Jokes</button>
<p>{state.category}</p>
</div>

</div>
<div className="col-6">
<div>


<button className="btn btn-warning btn-lg jokecategory">Specify Category</button>
<div className="form-control">
<div>
<input type="text" id="spec" placeholder="Specify A Category"></input>
</div>

<div style={{
  margin: "5px"}}>
<button type="submit" onSubmit={specCategory}>Submit</button>
</div>

</div>
<p>{state.category}</p>
</div>
</div>
</div>
   
    





 </div>
  )
}
   
  
export default App;
  

