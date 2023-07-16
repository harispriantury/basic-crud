import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { ListUsers } from './views/Users/ListUsers.tsx';
import { FormUser } from './views/Users/Form.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/add' element={<FormUser />} />
        <Route path='/edit/:id' element={<FormUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
