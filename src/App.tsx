import React from 'react';
import InfoCard from './components/infoCard';
import './App.css';

function App() {
  return (
    <div className='bg-[#171652] h-screen'>
      <InfoCard title="All Feedback" totalRequests={1084} monthlyRequests={30} />
    </div>
  );
}

export default App;
