import "../src/index.css"
import { api } from "./API/api"
import type { Posts } from "./types/posts"
import { useEffect, useState } from "react"
import type { Photos } from "./types/photos"
import { photosApi } from "./API/photosApi"
import { usersApi } from "./API/usersApi"
import type {Users} from "./types/users"

function App() {
  const[posts, setPosts] = useState<Posts[]>([])
  const[loading, setLoading] = useState(false)
  
  const[photos,setPhotos] = useState<Photos[]>([])
  const[users,setUsers] = useState<Users[]>([])

  useEffect(() => {
    //POSTS
    const fetchPosts = async () => {
      setLoading(true) // now we have the info so there is no need of loading
      try{
        const res = await api.get<Posts[]>("posts")
        setPosts(res.data)
      }catch(error:unknown){
        if(error instanceof Error){
          console.log(error.message || "Something went wrong")
        }
      }finally{
        setLoading(false)
      }
    }

    //PHOTOS
    const fetchPhotos = async () => {
      try{
        const res = await photosApi.get("photos")
        setPhotos(res.data.slice(0,20))
      }catch(error : unknown){
        if(error instanceof Error){
          console.log(error.message || "Something went wrong")
        }
      }finally{
        setLoading(false)
      }
    }
    //USERS
    const fetchUsers = async () => {
      try{
        const res = await usersApi.get("users")
        setUsers(res.data.slice(0.10))
        console.log(res.data.slice(0.10))
      }catch(error : unknown){
        if(error instanceof Error){
          console.log(error.message || "Something went wrong")
        }
      }finally{
        setLoading(false)
      }
    }
    fetchPosts()
    fetchPhotos()
    fetchUsers()
  },[])
  return(
    <div>
      <h1 className="text-4xl">Posts:</h1>
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-4 ">
        {
          posts.map((item) => {
            return <div key={item.id} className="w-[400px]  rounded-2xl bg-gray-600 p-5 m-3 flex flex-col justify-center">
            <h1 className="font-bold">userId: <span className="font-normal">{item.userId}</span></h1>
              <p className="font-bold">Id: <span className="font-normal">{item.id}</span></p>
              <p className="font-bold">Title: <span className="font-normal">{item.title}</span></p>
              <p className="font-bold">body: <span className="font-normal">{item.body}</span></p>
            </div>
        })
        }
      </div>
      <hr />
      <h1>Photos</h1>
      <div className="grid grid-cols-4 ">
        {
          photos.map((item) => {
            return <div key={item.id} className="w-[400px]  rounded-2xl bg-blue-950 p-5 m-3 flex flex-col justify-center">
              <h1>albumId : {item.albumId}</h1>
              <p>id: {item.id} </p>
              <img src={item.thumbnailUrl} alt="apiImg" />
              <p>Title: {item.title}</p>
              <img src={item.url} alt="imgUrl" />
            </div>
          })
        }
      </div>
      <hr />
      <h1>Users:</h1>
      <div className="grid grid-cols-4 ">
        {
          users.map((item) => {
            return <div key={item.id} className="w-[400px]  rounded-2xl bg-blue-500 p-5 m-3 flex flex-col justify-center">
              <p>id <span>{item.id}</span></p>
              <p>name <span>{item.name}</span></p>
              <p>username <span>{item.username}</span></p>
              <p>email <span>{item.email}</span></p>
              <p>address-street: <span>{item.address.street}</span></p>
              <p>address-suite: <span>{item.address.suite}</span></p>
              <p>address-zipcode <span>{item.address.zipcode}</span></p>
              <p>geo-lat: <span>{item.address.geo.lat}</span></p>
              <p>geo-lng: <span>{item.address.geo.lng}</span></p>
              <p>Phone <span>{item.phone}</span></p>
              <p>company-name: <span>{item.company.name}</span></p>
              <p>company-catchPhrase: <span>{item.company.catchPhrase}</span></p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
