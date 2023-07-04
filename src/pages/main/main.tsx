import React, { FC, useState, useEffect, useContext } from 'react'
import Header from '../../components/header'
import Item from '../../components/item'
import './main.css'
import { iItem } from '@/interfaces/item'

const list = [
  {
    id: 1,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '04/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 2,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 3,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '17:00',
  },
  {
    id: 4,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '04/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 5,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 6,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '17:00',
  },
  {
    id: 7,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '04/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 8,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 9,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '17:00',
  },
  {
    id: 10,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '04/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 11,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 12,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '05/07/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '17:00',
  },
]

const Main: FC = () => {
  const [data, setData] = useState<iItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setData(list)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Header />
      <div className="content">
        <p className="content__label">Top events</p>
        <div className="content-header">
          <div className="content-header__date">Date</div>
          <div className="content-header__comands">Comands</div>
          <div className="content-header__totals">
            <span>Win</span>
            <span>Draw</span>
            <span>Lose</span>
          </div>
        </div>
        <div className="events">
          {data?.map((e, i) => (
            <Item
              key={i}
              id={e.id}
              comandA={e.comandA}
              comandB={e.comandB}
              date={e.date}
              win={e.win}
              lose={e.lose}
              draw={e.draw}
              time={e.time}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Main
