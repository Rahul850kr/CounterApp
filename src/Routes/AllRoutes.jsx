import React from 'react';
import {Routes,Route} from "react-router-dom"
import CounterPage1 from './CounterPage1';
import CounterPage2 from './CounterPage2';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CounterPage1/>} />
        <Route path='/page2' element={<CounterPage2/>} />
    </Routes>
  )
}

export default AllRoutes