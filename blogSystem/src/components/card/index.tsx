import { history } from 'umi'
import './index.less';

const data = [
    {
      id: "1",
      username:"真男人",
      time: '3小时之前',
      title: '你多久没有',
      describe: '100%tjkl词语表寒假快乐规划VG渤海金控乘飞机回',
      url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'
    },
    {
      id: "2",
      username:"真男人",
      time: '3小时之前',
      title: '你多久没有',
      describe: '100%tjkl词语表寒假快乐规划VG渤海金控乘飞机回',
      url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'
    },
    {
      id: "3",
      username:"真男人",
      time: '3小时之前',
      title: '你多久没有',
      describe: '100%tjkl词语表寒假快乐规划VG渤海金控乘飞机回',
      url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'
    },
  ]

const Card = (props: any) => {
    const { id, username, addTime, title, introduce, url } = props;
    return (
        <div className="entry-box" onClick={() => {
            history.push(`/detail/${id}`)
          }} >
            <div className="card-header">
                <span className="card-name">
                    { username || '默认姓名' }
                </span>
                <div className="card-border">
                </div>
                <span className="card-time">
                    { addTime }
                </span>
            </div>
            <div className="card-title">
                { title }
            </div>
            <div className="card-describe">
                { introduce }
            </div>
            <img src={url || 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'} alt=""/>
        </div>
    );
}

export default Card

