import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from '../pages'

export function AppRoutes (): JSX.Element {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
