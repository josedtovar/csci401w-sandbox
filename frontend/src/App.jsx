import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReportsHome from './pages/ReportsHome';
import CreateReport from './pages/CreateReports';
import ShowReport from './pages/ShowReport';
import EditReport from './pages/EditReport';
import DeleteReport from './pages/DeleteReport';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ReportsHome />} />
      <Route path='/reports/create' element={<CreateReport />} />
      <Route path='/reports/details/:id' element={<ShowReport />} />
      <Route path='/reports/edit/:id' element={<EditReport />} />
      <Route path='/reports/delete/:id' element={<DeleteReport />} />
    </Routes>
  )
}

export default App
