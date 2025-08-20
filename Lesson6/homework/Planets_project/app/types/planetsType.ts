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

export interface additionalInfoTypes {
    id:number,
    infoName: string,
    infoValue:string
}

export interface overviewProps{
  setActiveComponent:(value: "overview" | "structure" | "surface") => void
}