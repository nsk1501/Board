import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
