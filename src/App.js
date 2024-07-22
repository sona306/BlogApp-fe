import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createpost from './components/Createpost';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ='/' element={<Signin/>}/>
    <Route path ='/signup' element={<Signup/>}/>
    <Route path ='/create' element={<Createpost/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
