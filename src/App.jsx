import { useState } from 'react'
import Header from './companent/Header'
import Panel from './companent/Panel'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Davomat from './pages/Davomat';
import Guruh from './pages/Guruh';
import Oqtuvchilar from './pages/Oqtuvchilar';
import Oquvchilar from './pages/Oquvchilar';
import Tolovlar from './pages/Tolovlar';
import NoPage from './pages/404'

function App() {

  return (
    <>


      <Routes>
        <Header />
        <Panel />
        <Route path="/" element={<Home />} />
        <Route path="/davomat" element={<Davomat />} />
        <Route path="/guruh" element={<Guruh />} />
        <Route path="/oqtuvchi" element={<Oqtuvchilar />} />
        <Route path="/oquvchi" element={<Oquvchilar />} />
        <Route path="/tolov" element={<Tolovlar />} />
        <Route path='*' element={<NoPage />} />
      </Routes>


    </>
  )
}

export default App
