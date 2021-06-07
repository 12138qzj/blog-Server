import  { useState, useEffect } from 'react';
import  { withRouter } from 'umi';

import { Card, Input, Button ,Spin, message } from 'antd';
import Footer from '@/components/footer'
import { cookie, handleReturn } from '@/utils/common'
import { SaveIsLogin, GetIsLogin } from '@/utils/storage'
import Icon from '@ant-design/icons';
import { request } from '@/utils/axios'
import axios from 'axios'
import './index.less'
// import  servicePath  from '../config/apiUrl'

const Login = (props: any) =>{

    const { isLoginPage, setIsLoginPage} = props;
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        //检查是否已经登录
        if(GetIsLogin()){
            props.history.push('/home')
        }
    },[])

    const checkLogin = ()=>{
        setIsLoading(true);
       
        if(!username){
            message.error('用户名不能为空')
            setIsLoading(false);
            return false
        }else if(!password){
            message.error('密码不能为空')
            setIsLoading(false)
            return false
        }
        let dataProps = {
            'username':username,
            'password':password
        }
        axios({
            method: 'post',
            url: '/blogServer/login',
            data:dataProps,
            headers: { 
                'x-csrf-token': cookie.get("csrfToken"),
            }
        })
        .then((res: any)=>{
                console.log('res.data', res.data)
                const { errno } = handleReturn(res)
                setIsLoading(false)
                if(errno === 0){
                    SaveIsLogin(res.data.data)
                    props.history.push('/home')
                }else{
                    message.error('用户名密码错误')
                }
           }
        ).catch(err => {
            console.log('err', err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="欢迎使用小杰博客" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="username"
                        size="large"
                        placeholder="输入账号"
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setUsername(e.target.value)}}
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="输入密码"
                        prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <a onClick={() => { setIsLoginPage(!isLoginPage)}}>没有账号去注册？</a>
                    <Button type="primary" size="large" block onClick={checkLogin} > 登陆 </Button>
                </Card>
            </Spin>
            <Footer />
        </div>
    )
}



export default withRouter(Login)


