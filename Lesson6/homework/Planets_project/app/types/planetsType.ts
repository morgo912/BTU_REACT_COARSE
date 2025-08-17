export interface PlanetsTypes {
  id:number,
  circleImg:string,
  planetName:string,
  routeLink:string
}

//********* */
export interface headerProps{
  isBgClicked: boolean;
  setIsBgClicked: (value: boolean) => void;
}