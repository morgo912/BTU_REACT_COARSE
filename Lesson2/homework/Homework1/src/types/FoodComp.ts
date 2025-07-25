export interface foodCardProps{
  title:string,
  description:string,
  calorieAmount:number,
  calorieDetails:string,
  deg:number,
  newPrice:number,
  oldPrice:number,
  img:string,
  iconImgSrc:string,
  iconBackground:string,
  icons:iconProps[]
}

export interface iconProps{
  img:string,
  background:string
}

