import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Modal, message } from 'antd'
import { useLocation } from 'react-router-dom'
import { cookie, handleReturn } from '@/utils/common'
import { SaveIsLogin, GetIsLogin } from '@/utils/storage'
import Icon from '@ant-design/icons';
import axios from 'axios'
import { GITHUB } from '@/config'
import { useDispatch } from 'react-redux'

const FormItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
}

function FormItem(props: any) {
  const { children, ...rest } = props
  return <Form.Item {...FormItemLayout} {...rest}>{children}</Form.Item>
}

function SignModal(props: any) {
  const [form] = Form.useForm();
  const { type, visible, setVisible } = props;
  const location = useLocation() // location

  const checkLogin = (userInfo: any)=>{
    const { username='', password= ''} = userInfo;
    // setIsLoading(true);
   
    if(!username){
        message.error('用户名不能为空')
        // setIsLoading(false);
        return false
    }else if(!password){
        message.error('密码不能为空')
        // setIsLoading(false)
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
            // setIsLoading(false)
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
        // setIsLoading(false)
    })
}

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log('form',form)
    form.validateFields().then((values: any) => {
        console.log('values', values);
        if (values) {
          checkLogin(values)
        }
    });
  }

  // 第三方登陆
  function githubLogin() {
    const { pathname, search } = location
    // save('prevRouter', `${pathname}${search}`)
    window.location.href = `${GITHUB.url}?client_id=${GITHUB.client_id}`
  }


  const comDOM = (
    <>
    <FormItem
      name="username"
      label="用户名"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
    </FormItem>
    <FormItem
      name="password"
      label="密码"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password />
    </FormItem>
  </>
  )

  return (
    <Modal
      width={460}
      title={type}
      visible={visible}
      onCancel={e => setVisible(false)}
      footer={null}>
      <Form layout='horizontal' form={form}>
        {type === 'login' ? (
          comDOM
        )
          : (
            <>
            {comDOM}
              <FormItem
                label='确认密码'
                name="confirm"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }: any) => ({
                    validator(_: any, value: string) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </FormItem>
              <FormItem
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
              >
                <Input />
              </FormItem>
            </>
          )}
      </Form>
      <Button type='primary' block onClick={handleSubmit}>
        {type}
      </Button>
    </Modal>
  )
}

export default SignModal
