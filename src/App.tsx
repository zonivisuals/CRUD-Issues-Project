import React from 'react';
import Navbar from './components/navbar';
import Admin from './pages/admin';
import Sidebar from './components/sidebar';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className='bg-[#171652] h-full flex items-start'>
      <Sidebar/>
      <div id='content' className='px-8 pt-5 flex-grow bg-[#0E0F2E] border-none rounded-[1.25rem] m-2'>
        <Navbar/>
        <Admin/>
      </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;
