import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/Appoinment/Appoinment';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Nav from './Pages/Home/Nav/Nav';
import NotFound from './Pages/NotFoundPage/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Services from './Pages/Services/Services';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div >
    
    <Nav></Nav>
      <Routes>
      
        <Route path="/" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        
        <Route path="/appointment" element={<RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>} />
        
        
        {/* <Route path="/about" element={<Home></Home>} /> */}
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
