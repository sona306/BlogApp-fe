import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createpost from './components/Createpost';
import Viewall from './components/Viewall';
import Viewmypost from './components/Viewmypost';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ='/' element={<Signin/>}/>
    <Route path ='/signup' element={<Signup/>}/>
    <Route path ='/create' element={<Createpost/>}/>
    <Route path ='/viewall' element={<Viewall/>}/>
    <Route path ='/viewmypost' element={<Viewmypost/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
