import React, { FC, useState, useEffect } from 'react'
import './event.css'
import { iItem } from '../../interfaces/item'
import { MAIN_ROUTE } from '../../routes'
import { useNavigate } from 'react-router-dom'

const Event: FC<iItem> = ({ comandA, comandB, date, time, win, lose, draw }) => {
  const navigate = useNavigate()
  return (
    <div className="selected">
      <button className="selected__back" onClick={() => navigate(MAIN_ROUTE)}>
        Back
      </button>
      <p className="selected__title">
        {comandA} - {comandB}
      </p>
    </div>
  )
}

export default Event
