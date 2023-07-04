import React, { FC, useState, useEffect } from 'react'
import './event.css'
import { iItem } from '../../interfaces/item'
import { MAIN_ROUTE } from '../../routes'
import { useNavigate, useLocation } from 'react-router-dom'
import { list } from '../main/main'

const Event: FC = () => {
  const [itemData, setItemData] = useState<iItem | null>(null)
  const [select, setSelect] = useState(0)
  const locationId = useLocation().pathname?.split('/').reverse()[0]
  const navigate = useNavigate()
  useEffect(() => {
    setItemData(list.filter((e) => e.id === +locationId)[0])
  }, [])

  return (
    <div className="selected">
      <button className="button selected__back" onClick={() => navigate(MAIN_ROUTE)} type="button">
        Back
      </button>
      <p className="selected__text">
        {itemData?.date} - {itemData?.time}
      </p>
      <p className="selected__title">
        {itemData?.comandA} - {itemData?.comandB}
      </p>
      <div className="selected__bet-wrapper">
        <div className={`bet-item ${select === 1 && 'active'}`} onClick={() => setSelect(1)}>
          <span className="bet-item__value">{itemData?.win}</span>
          <span className="bet-item__text">Owners wins</span>
        </div>
        <div className={`bet-item ${select === 2 && 'active'}`} onClick={() => setSelect(2)}>
          <span className="bet-item__value">{itemData?.draw}</span>
          <span className="bet-item__text">Draw</span>
        </div>
        <div className={`bet-item ${select === 3 && 'active'}`} onClick={() => setSelect(3)}>
          <span className="bet-item__value">{itemData?.lose}</span>
          <span className="bet-item__text">Guests wins</span>
        </div>
      </div>
      <button
        className={`button selected__bet-button ${select === 0 && 'disabled'}`}
        disabled={select === 0}
        onClick={() => navigate(MAIN_ROUTE)}
        type="button"
      >
        Make a bet
      </button>
    </div>
  )
}

export default Event
