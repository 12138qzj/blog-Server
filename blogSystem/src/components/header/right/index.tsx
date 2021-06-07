import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import MyLogin from '@/components/Public'
import { Button, Dropdown, Menu, Avatar } from 'antd'

import './index.less'

function UserInfo(props: any) {
  const [modalVisible, setModalVisible] = useState(false)
  const [type, setType] = useState('')

  const { userInfo = {} } = props;
  const { username = '', github= '', role = '' } = userInfo

  const MenuOverLay = (
    <Menu>
      <Menu.Item>
        <span onClick={e => {}}>写文章</span>
      </Menu.Item>
      <Menu.Item>
        <span className='user-logout' onClick={e => {}}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className='header-userInfo'>
      {username ? (
        <Dropdown placement='bottomCenter' overlay={MenuOverLay} trigger={['click', 'hover']}>
          <div className='header-avatar'>
            <Avatar size={35} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  />
            {username}
          </div>
        </Dropdown>
      )
        : (
          <>
            <Button
              ghost
              type='primary'
              size='small'
              style={{ marginRight: 20 }}
              onClick={() => {
                setType('login')
                setModalVisible(true)
              }}
            >
              登录
            </Button>
            <Button danger size='small'
              onClick={() => {
                setType('register')
                setModalVisible(true)
              }}
            >
              注册
            </Button>
          </>
        )}
      <MyLogin
        type={type}
        visible = {modalVisible}
        setVisible={setModalVisible}
      />
    </div>
  )
}

export default withRouter(UserInfo)
