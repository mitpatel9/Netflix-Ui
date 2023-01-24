import './App.css';
import {Routes, Route ,redirect} from "react-router-dom"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import  Watch  from './pages/watch/Watch';


function App() {
  const user=true;
  return (
    <div className="App">
      <Routes>
        <Route eaxct path='/' element={user ? <Home/> : <redirect to="/register"><Register/></redirect>}/>
        {!user &&(
          <>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          </>
        )}
        {user &&(
          <>
          <Route  path='/movie' element={<Home type="movie"/>}/>
          <Route  path='/series' element={<Home type="series"/>}/>
          <Route path='/watch' element={<Watch/>}/>
          </>
        )}
        
        </Routes>
    </div>
  );
}

export default App;
