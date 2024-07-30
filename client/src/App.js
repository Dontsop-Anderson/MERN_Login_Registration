// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Present from './views/Present'
import Form from './views/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main /> } path='/' default/>
          <Route element={<Present /> } path='/Signup' />
          <Route element={<Form /> } path='/dashboard' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
