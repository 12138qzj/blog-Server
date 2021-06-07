import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Modal,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete,
 } from 'antd'
import { useLocation } from 'react-router-dom'
// import { FormComponentProps } from 'antd/lib/form/Form' 
import Icon from '@ant-design/icons';

// import { GITHUB } from '@/config'
// import { save } from '@/utils/storage'

// redux
// import { login, register } from '@/redux/user/actions'
import { useDispatch } from 'react-redux'

// hooks
// import { useListener } from '@/hooks/useBus'
const { Option } = Select;
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

// @Form.create()
function SignModal(props: any) {
  const [form] = Form.useForm();

  // const { form } = props;
  console.log('object', form, props)
  const { getFieldDecorator } = form


  const dispatch = useDispatch() // dispatch hooks
  const location = useLocation() // location
  const [visible, setVisible] = useState(false)
  const [type, setType] = useState('login')
  // const { getFieldDecorator } = props.form

  // useListener('openSignModal', (type: any) => {
  //   props.form.resetFields()
  //   setType(type)
  //   setVisible(true)
  // })

  function handleSubmit(e: any) {
    e.preventDefault()
  //   form.validateFields((err: any, values: any) => {
  //    console.log('123456', err, values)
  // });
    // props.form.validateFieldsAndScroll((errors: any, values: string) => {
    //   if (errors) return
    //   // const action = type === 'login' ? login : register
    //   // dispatch(action(values)).then(() => {
    //   //   setVisible(false) // type =  login | register
    //   // })
    // })
  }

  // function githubLogin() {
  //   const { pathname, search } = location
  //   save('prevRouter', `${pathname}${search}`)
  //   window.location.href = `${GITHUB.url}?client_id=${GITHUB.client_id}`
  // }

  // 确认密码
  function compareToFirstPassword(rule: any, value: string, callback: any) {
    const form = props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  return (
    <div className="login-div">
      <Form 
      style={{ width: 400 }}
      layout='horizontal'
      {...FormItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
        {/* {type === 'login' ? (
          <>
            <FormItem label='用户名'>
              {getFieldDecorator('account', {
                rules: [{ required: true, message: 'Username is required' }]
              })(<Input placeholder='请输入用户名' />)}
            </FormItem>
            <FormItem label='密码'>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Password is required' }]
              })(<Input placeholder='请输入密码' type='password' />)}
            </FormItem>
          </>
        )
          : (
            <>
              <FormItem label='用户名'>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Username is required' }]
                })(<Input placeholder='请输入用户名' />)}
              </FormItem>
              <FormItem label='密码'>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Password is required' }]
                })(<Input placeholder='请输入密码' type='password' />)}
              </FormItem>
              <FormItem label='确认密码'>
                {getFieldDecorator('confirm', {
                  rules: [
                    { required: true, message: 'Password is required' },
                    { validator: compareToFirstPassword }
                  ]
                })(<Input placeholder='确认密码' type='password' />)}
              </FormItem>
              <FormItem label='邮箱'>
                {getFieldDecorator('email', {
                  rules: [
                    { type: 'email', message: 'The input is not valid E-mail!' },
                    { required: true, message: 'Please input your E-mail!' }
                  ]
                })(<Input placeholder='请输入您的邮箱' />)}
              </FormItem>
            </>
          )} */}
          {/* <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    > */}
      <FormItem
        name="email"
        label="E-mail"
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
        label="Password"
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

      <FormItem
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
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

      <FormItem {...FormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </FormItem>
      </Form>
      {/* <Button type='primary' block onClick={handleSubmit}>
        {type}
      </Button> */}
      {/* {GITHUB.enable && (
        <Button block icon='github' onClick={githubLogin} style={{ marginTop: 10 }}>
          github login
        </Button>
      )} */}
    </div>
  )
}
export default SignModal
