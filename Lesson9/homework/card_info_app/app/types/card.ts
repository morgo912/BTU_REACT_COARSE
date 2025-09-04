export interface cardDataTypes {
  setUserName: (value: string) => void
  setCardNumber: (value: string) => void
  setExpirationMonth: (value: string) => void
  setExpirationYear: (value: string) => void
  setCvc: (value: string) => void
}


export interface formTypes {
  userName:string,
  cardNumber:string,
  expirationMonth:string,
  expirationYear:string,
  cvc:string
}

export interface comleatedTypes {
  setUserName: (value: string) => void
  setCardNumber: (value: string) => void
  setExpirationMonth: (value: string) => void
  setExpirationYear: (value: string) => void
  setCvc: (value: string) => void
  setCompleated:(e:boolean) => void
}