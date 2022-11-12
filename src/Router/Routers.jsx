import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom';
import FriendsRefered from '../Pages/FriendsRefered/FriendsRefered';
import ReferAndEarn from '../Pages/ReferAndEarn/ReferAndEarn';


const Routers = () => {
  return (
    <Routes>
        <Route path='' element={<Navigate to='/referandearn'/>}/>

        <Route path='referandearn' >
            <Route path='' element={<ReferAndEarn />}/>
            <Route path='friendsrefered' element={<FriendsRefered/>}/>
        </Route> 
    </Routes>
  )
}

export default Routers