import Profile from "./Profile"

export default function Gallery () {
    return(
      <div>
        <h1>Amazing Nono</h1>
        <br></br>
        <div className="flex">
        <Profile />
         <Profile />
          <Profile />
           <Profile />
        </div>
      </div>
    )
  }