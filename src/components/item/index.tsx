import React, { FC } from 'react'
import './styles.css'
import { iItem } from '../interfaces/item'

const Item: FC<iItem> = ({ comandA, comandB, date, win, lose, draw, time }) => {
  return (
    <div className="item">
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
