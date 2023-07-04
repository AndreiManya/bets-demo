export interface iAlert {
  alertVisable: boolean
  alertMessage: string
}

export interface setAlertState {
  setAlert: (e: iAlert) => void
}
