import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import AddPost from './AddPost';
import { Link, Route, Routes } from 'react-router-dom';
import EditPost from './EditPost';
import { useEffect } from 'react';
import { fetchPost } from './redux/postsActions';


function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchPost())

  },[])
  return (

    <div className="App">

<div className='nav'>
  <h1>logo</h1>
  <ul>
    <Link to='/'><li>home
    </li></Link>
    <Link to={'/add'}><li>add
    </li></Link>
  </ul>
</div>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/add' element={<AddPost/>}/>
<Route path='/edit/:id' element={<EditPost/>}/>

</Routes>

    </div>
  );
}

export default App;
