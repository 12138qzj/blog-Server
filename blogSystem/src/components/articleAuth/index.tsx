
import {Avatar} from 'antd'
import './index.less'
const num = 13

const user = [
    {
        id:1,
        avatarUrl: 'http://blogimages.jspang.com/blogtouxiang1.jpg',
        username: '程序员1号'
    },
    {
        id:2,
        avatarUrl: 'http://blogimages.jspang.com/blogtouxiang1.jpg',
        username: '程序员2号'
    },
    {
        id:3,
        avatarUrl: 'http://blogimages.jspang.com/blogtouxiang1.jpg',
        username: '程序员3号'
    },
    {
        id:4,
        avatarUrl: 'http://blogimages.jspang.com/blogtouxiang1.jpg',
        username: '程序41号'
    },
    {
        id:5,
        avatarUrl: 'http://blogimages.jspang.com/blogtouxiang1.jpg',
        username: '程序员5号'
    },
]

const ArticleAuth =()=>{

    const authItem = (url: string, name: string) => {
        return (
            <div className="auth-item">
                <Avatar size={40} src={url || "http://blogimages.jspang.com/blogtouxiang1.jpg" } />
                <div className="username">{name || '熬夜写代码'}</div>
            </div>
        )

    }

    return (
        <div className="auth-suspended-panel">

            {
                user?.map((item: any) => authItem(item.avatarUrl, item.username))
            }
            <div className="auth-view auth-title">浏览权限</div>
            {
                user?.map((item: any) => authItem(item.avatarUrl, item.username))
            }
            <div className="auth-edit auth-title">编辑权限</div>
            {
                user?.map((item: any) => authItem(item.avatarUrl, item.username))
            }
        </div>
    )
}

export default ArticleAuth