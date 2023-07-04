import React, { FC, useContext, createContext, useState } from 'react'
import './app.css'
import Main from './pages/main/main'
import Event from './pages/event/event'
import { iItem } from './interfaces/item'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MAIN_ROUTE, EVENT_ROUTE } from './routes'

interface eventContext {
  event: iItem | null
  setEvent: React.Dispatch<React.SetStateAction<iItem>>
}
const initial: iItem = {
  id: 0,
  comandA: '',
  comandB: '',
  date: '',
  time: '',
  win: 0,
  lose: 0,
  draw: 0,
}

const iEventContextState = {
  event: null,
  setEvent: () => undefined,
}
export const EventContext = createContext<eventContext>(iEventContextState)
const App: FC = () => {
  const [event, setEvent] = useState<iItem>(initial)

  return (
    <BrowserRouter>
      <main className="root">
        <EventContext.Provider value={{ event, setEvent }}>
          <Routes>
            <Route path={MAIN_ROUTE} element={<Main />} />
            <Route path={`${EVENT_ROUTE}/:id`} element={<Event {...event} />} />
          </Routes>
        </EventContext.Provider>
      </main>
    </BrowserRouter>
  )
}

export default App
