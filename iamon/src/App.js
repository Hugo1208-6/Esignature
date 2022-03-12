import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<PrivateRoute/>}>
          <Route exact path='/' element={<Home/>}/>
      </Route>
      <Route exact path="/Register" element={<Register />}></Route>
      <Route exact path="/Login" element={<Login />}></Route> 
      <Route exact path="/Profile" element={<Profile/>}></Route>
      <Route exact path='/Profile' element={<PrivateRoute/>}>
          <Route exact path='/Profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
