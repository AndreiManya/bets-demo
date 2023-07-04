import React, { FC, useContext, createContext, useState } from 'react'
import './app.css'
import Main from './pages/main/main'
import Event from './pages/event/event'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MAIN_ROUTE, EVENT_ROUTE } from './routes'

const App: FC = () => {
  return (
    <BrowserRouter>
      <main className="root">
        <Routes>
          <Route path={MAIN_ROUTE} element={<Main />} />
          <Route path={`${EVENT_ROUTE}/:id`} element={<Event />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
