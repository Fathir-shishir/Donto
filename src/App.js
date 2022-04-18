import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Nav from './Pages/Home/Nav/Nav';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div >
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home></Home>} />
        
        <Route path="/appointment" element={<RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>} />
        
        
        <Route path="/about" element={<Home></Home>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
