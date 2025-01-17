import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SetImage from './pages/SetImage';
import Error404NotFound from './pages/Error404NotFound';
import InternalServerError from './pages/InternalServerError';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>}/>
        <Route path="setImage" element={<SetImage />} />
        <Route path="/internalServerError" element={<InternalServerError />} />

        <Route path="*" element={<Error404NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
