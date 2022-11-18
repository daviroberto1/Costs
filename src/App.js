import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project'
import Container from './components/layout/Container';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
     <Router>
     <NavBar />
     
    <Container customClass='min-height'>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/Contato' element={<Contato />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/project/:id' element={<Project />} />
         
        </Routes> 
         </Container>
         <Footer />
        </Router>
     
  );
}

export default App;