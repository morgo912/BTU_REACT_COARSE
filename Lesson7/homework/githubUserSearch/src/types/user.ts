export interface userDataTypes {
  login:string,
  id:number,
  followers:number,
  following:number,
  public_repos:number,
  bio:string | null,
  email:string,
  location:string,
  name:string,
  created_at:string,
  blog:string | null,
  twitter_username:string,
  url:string,
  company:string | null,
  avatar_url:string
}

export interface searchUserPropsType {
  setUserData:(e:object | null) => void,
  setError:(e: string) => void
}

export interface userInfoPropsTypes {
  userData:userDataTypes,
  darkMode:boolean
}

export interface headerPropsTypes {
  darkMode:boolean,
  setDarkMode: (e:boolean) => void
}