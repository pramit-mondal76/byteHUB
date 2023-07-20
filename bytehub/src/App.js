

import "./style.scss"
import "./media-query.css"
import './App.css';
import Home from './pages/Home';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link} from 'react-router-dom';
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import NotFound from './pages/NotFound';import About from './pages/About';
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [active, setActive]=useState("home");
  return (
    <div className="App">
      <Header setActive={setActive} active={active}/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/create" element={<AddEditBlog />}/>
        <Route path="/update/:id" element={<AddEditBlog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
