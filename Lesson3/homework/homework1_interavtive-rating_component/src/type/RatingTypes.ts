export interface BtnProps{
  background:string,
  btnText:string,
  btnHoveredBackgorund:string,
  btnClickedFunction:() => void // function as a props
}

export interface finalCompProps{
  ratingNumber:number
}

export interface ratingsProps{
  selectedNumberFunction:(number:number) => void // function as a props
}