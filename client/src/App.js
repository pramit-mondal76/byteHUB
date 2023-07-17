import './App.css';
import Post from './Post';
import Header from './header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
