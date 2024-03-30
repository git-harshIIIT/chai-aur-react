import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext);

    if(!user) return <div>PLEASE LOGIN !</div>
    else return <div>Hi {user.username}</div>
    

}

export default Profile