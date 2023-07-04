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
      <button className="selected__back" onClick={() => navigate(MAIN_ROUTE)}>
        Back
      </button>
      <p className="selected__text">
        {itemData?.date} - {itemData?.time}
      </p>
      <p className="selected__title">
        {itemData?.comandA} - {itemData?.comandB}
      </p>
    </div>
  )
}

export default Event
