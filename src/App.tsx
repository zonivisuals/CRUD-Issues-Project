import React from 'react';
import Navbar from './components/navbar';
import Admin from './pages/admin';
import './App.css';

function App() {
  return (
    <div className='bg-[#0E0F2E] h-screen'>
      <Navbar/>
      <Admin/>
    </div>
  );
}

export default App;
