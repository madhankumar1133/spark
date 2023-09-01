import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Regiester } from './component/regiester';
import { Login } from './component/login';
import { Dashboard } from './component/dashboard';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Regiester/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
