import { useState,useEffect } from "react"
import '../styles/userList.css'

const UserList = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch("https://biodb-0wdv.onrender.com/lib-users")
            let data= await response.json()
            setUsers(data)
        }
        fetchData()
    },[])   //its is used delete ,[]
    let handleClick = (id,name)=>{
        setUsers(users.filter(s=>s.id!=id))
        alert(`${name} has been deleted`)
    }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="user_section">
                {users.map(data=>(
                    <div className="user">
                        <h1>Name : {data.name}</h1>
                        <h3>Age : {data.age}</h3>
                        <h3>phno : {data.phoneNumber}</h3>
                        {/* <h6>PageCount:{data.pageCount}</h6> */}
                        <button onClick={()=>handleClick(data.id,data.name)}>Remove</button>
                    </div>
                    
                ))}
            </div>
            </div>
        
     );
}
 
export default UserList;