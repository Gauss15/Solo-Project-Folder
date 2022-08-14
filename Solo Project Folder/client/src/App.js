import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Main from './Views/Main';
// import DisplayAll from './components/DisplayAll';
import CreateFrame from './components/CreateFrame';
import Frame from './components/Frame';
import EditFrame from './components/EditFrame';
import Login from './components/Login';
import Register from './components/Register';
import Display from './Views/Display'

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
      <div className="App">
    <div>
    <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Main/>} />
          <Route path="/warframes" element={<Display/>} />
          <Route path="/warframes/new" element={<CreateFrame />} />
          <Route path="/warframes/:id" element={<Frame />} />
          <Route path="/warframes/:id/edit" element={<EditFrame />} />
          <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} />
          <Route path="/register" element={<Register setIsLoggedin={setIsLoggedin} />} /> 
        </Routes>
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;