import React, { FC } from 'react'
import './styles.css'
import { iItem } from '../../interfaces/item'
import { useNavigate } from 'react-router-dom'
import { EVENT_ROUTE } from '../../routes'

const Item: FC<iItem> = ({ id, comandA, comandB, date, win, lose, draw, time }) => {
  const navigate = useNavigate()
  const handleEvent = () => {
    navigate(`${EVENT_ROUTE}/${id}`)
  }

  return (
    <div className="item" onClick={handleEvent}>
      <div className="info">
        <span className="info__time">{time}</span>
        <span className="info__date">{date}</span>
      </div>
      <div className="comand">
        <span className="comand__first">{comandA}</span>
        <span className="comand__second">{comandB}</span>
      </div>
      <div className="results">
        <span className="results__section">{win}</span>
        <span className="results__section">{lose}</span>
        <span className="results__section">{draw}</span>
      </div>
    </div>
  )
}

export default Item
