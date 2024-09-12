import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authslice'

function Logout() {
    const dispatch = useDispatch()
    const logouthandler = () => {
             authService.logout().then(() => {
              dispatch(logout());
             })
            //  you will get a promise wen you called logout
    }

  return (
    <div>
        <button type="button" className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logouthandler} >Logout </button>
    </div>
  )
}

export default Logout
