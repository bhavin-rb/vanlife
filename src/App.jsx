import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Vans from './components/Vans.jsx';
import VanDetail from './components/VanDetail.jsx';
import Layout from './layout/Layout.jsx';
import Dashboard from './components/host/Dashboard.jsx';
import Income from './components/host/Income.jsx';
import Reviews from './components/host/Reviews.jsx';
import HostLayout from './components/host/HostLayout.jsx';

import './App.css';
import "./server";

function App() {
  

  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="host" element ={<HostLayout />}>
            <Route path="host" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
