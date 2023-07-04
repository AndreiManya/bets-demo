import React, { FC, useState } from 'react'
import './app.css'
import Main from './pages/main/main'
import Event from './pages/event/event'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MAIN_ROUTE, EVENT_ROUTE } from './routes'
import Alert from './components/alert/alert'

const App: FC = () => {
  const [alert, setAlert] = useState({
    alertVisable: false,
    alertMessage: '',
  })
  return (
    <BrowserRouter>
      <main className="root">
        <Routes>
          <Route path={MAIN_ROUTE} element={<Main />} />
          <Route path={`${EVENT_ROUTE}/:id`} element={<Event setAlert={setAlert} />} />
        </Routes>
        {alert.alertVisable && (
          <Alert type="success" message={alert?.alertMessage} setAlert={setAlert} />
        )}
      </main>
    </BrowserRouter>
  )
}

export default App
