
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Overview from './pages/Overview/Overview.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Favorite from './pages/Favorite/Favorite.jsx';
import NewUser from './components/NewUser/NewUser.jsx';


function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Overview />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/newUser' element={<NewUser />} />
        </Routes>
      </Router>
    );
}

export default App
