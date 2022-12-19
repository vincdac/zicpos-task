import './App.css';
import { Route, Routes } from "react-router-dom";
import Lab from './components/Lab';
import Password from './components/Password';

function App() {

  return (

    <div className='border bg-dark'>
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/Lab" element={<Lab />} />
      </Routes>
    </div>
  );
}

export default App;
