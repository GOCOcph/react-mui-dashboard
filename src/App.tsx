import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

import Dashboard from './content/Dashboard/Dashboard'
import Listing from './content/Listing/Listing'
import Login from './content/Login/Login'
import SignUp from './content/SignUp/SignUp'

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<Listing />} path="/listing" />
      <Route element={<SignUp />} path="/sign-up" />
    </Routes>
  )
}

export default App
