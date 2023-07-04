import React, { FC, useState, useEffect } from 'react'
import Header from '../../components/header'
import Item from '../../components/item'
import './main.css'
import { iItem } from '@/interfaces/item'

export const list = [
  {
    id: 1,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '10/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 2,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '16/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '22:00',
  },
  {
    id: 3,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '16/09/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '21:00',
  },
  {
    id: 4,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '20/11/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '16:00',
  },
  {
    id: 5,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '15/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '15:00',
  },
  {
    id: 6,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '05/04/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '19:00',
  },
  {
    id: 7,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '29/12/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '17:00',
  },
  {
    id: 8,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '23/07/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '08:00',
  },
  {
    id: 9,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '09/09/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '9:00',
  },
  {
    id: 10,
    comandA: 'Arsenal',
    comandB: 'Manchester City',
    date: '09/10/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '12:00',
  },
  {
    id: 11,
    comandA: 'Barcelona',
    comandB: 'Manchester united',
    date: '15/08/2023',
    win: 2,
    lose: 1.5,
    draw: 3,
    time: '20:00',
  },
  {
    id: 12,
    comandA: 'Paris',
    comandB: 'Manchester united',
    date: '22/12/2023',
    win: 3,
    lose: 2,
    draw: 5,
    time: '13:00',
  },
]

const Main: FC = () => {
  const [data, setData] = useState<iItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const requestMock = setTimeout(() => {
      setData(list)
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(requestMock)
    }
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
          {data
            ?.sort(
              (a, b) =>
                +new Date(b.date?.split('/').reverse().join('/')) -
                +new Date(a.date?.split('/').reverse().join('/')),
            )
            ?.reverse()
            ?.map((e, i) => (
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
