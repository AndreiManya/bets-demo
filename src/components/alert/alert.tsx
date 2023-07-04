import React, { FC, useEffect } from 'react'
import './alert.css'

const Alert: FC<{
  type: string
  message: string
  setAlert: (e: { alertVisable: boolean; alertMessage: string }) => void
}> = ({ type, message, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({
        alertVisable: false,
        alertMessage: '',
      })
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return <div className={`alert ${type}`}>{message}</div>
}
export default Alert
