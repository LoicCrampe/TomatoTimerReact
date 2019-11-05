import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Timer duration="45" title="Pomodoro"/>
      <Timer duration="5" title="Courte pause"/>
      <Timer duration="10" title="Longue pause"/>
    </div>
  );
}

export default App;
