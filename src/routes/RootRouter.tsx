import React from 'react'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'

import Dashboard from '../content/Dashboard/Dashboard'
import Listing from '../content/Listing/Listing'
import Login from '../content/Login/Login'
import SignUp from '../content/SignUp/SignUp'

export default function RootRouter() {

  return (
    <Router>
      <Route element={<Login />} path="/login" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<Dashboard />} path="/*" />
      <Route element={<Listing />} path="/listing" />
      <Route element={<SignUp />} path="/sign-up" />
    </Router>
  )
}
