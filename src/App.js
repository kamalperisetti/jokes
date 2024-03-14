import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import JockesPage from './component/Jockes';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path = '/jokes' element = {<JockesPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;


