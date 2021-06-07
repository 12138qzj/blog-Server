import  { useState, useEffect } from 'react';
import { cookie, handleReturn } from '@/utils/common'
import { SaveIsLogin, GetIsLogin } from '@/utils/storage'
import Login from './login'
import Register from './register'
import MyLogin from '@/components/Public'


// import axios from 'axios'
import './index.less'
// import  servicePath  from '../config/apiUrl'

const Public = (props: any) =>{

    const [isLoginPage, setIsLoginPage] = useState(true);
    return (
        <>
            {
                isLoginPage ? <Login isLoginPage={isLoginPage} setIsLoginPage={setIsLoginPage} /> : <Register isLoginPage={isLoginPage} setIsLoginPage={setIsLoginPage}/>
            }
        </>
    )
}



export default Public


