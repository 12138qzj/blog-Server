import { useEffect, useState} from 'react'
import { history, useParams } from 'umi'
import { connect } from 'dva'
import { Button, BackTop } from 'antd'
import { cookie, handleReturn } from '@/utils/common'
import Author from '@/components/author'
import ArticlePanel from '@/components/articlePanel'
import ArticleAuth from '@/components/articleAuth'



import './index.less';

const txt = `<h1 id="j3mhp" style="text-align:center;">活动&nbsp;</h1><p style="text-align:center;">fasd半蛇兜<span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">【掘金读书会】掘金x异步你有多久没有翻开一本书了？&nbsp;</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">“买书如山倒，读书如抽丝”，买来的书堆得书架上放不下，但读过的书屈指可数。</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">趁着国际读书日的到来，给自己一个读书的契机和我们一起阅读吧～&nbsp;</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">活动时间：4月19日-4月25日（7天）</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"></span><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">活动规则：选择一本书（类型不限，技术类、文学类、小说类都可以），</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">在活动期间坚持阅读，并在沸点话题#读书笔记#</span><a href="https://juejin.cn/topic/6824710202248396813?sort=newest" target="_blank" style="background-color: rgb(255, 255, 255); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><img alt="https://juejin.cn/topic/6824710202248396813?sort=newest" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDI3RkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iLjgxOCI+CiAgICAgICAgPHBhdGggZD0iTTguMDMgNS4yNzZsMS41ODUtMS41ODRjMS4wOTMtMS4wOTMgMi45My0xLjAzIDQuMS4xNDEgMS4xNzIgMS4xNzIgMS4yMzYgMy4wMDguMTQyIDQuMTAyTDEyLjY3IDkuMTIzbC0uNzkyLjc5MmMtMS4wOTMgMS4wOTMtMi45MyAxLjAzLTQuMS0uMTQyIi8+CiAgICAgICAgPHBhdGggZD0iTTkuMjE5IDEyLjU3M2wtMS41ODQgMS41ODRjLTEuMDk0IDEuMDk0LTIuOTMgMS4wMy00LjEwMi0uMTQxLTEuMTcxLTEuMTcyLTEuMjM0LTMuMDA4LS4xNDEtNC4xMDFMNC41OCA4LjcyN2wuNzkyLS43OTJjMS4wOTMtMS4wOTQgMi45My0xLjAzIDQuMTAxLjE0MSIvPgogICAgPC9nPgo8L3N2Zz4K"/>juejin.cn</a><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">上分享读后感/读书笔记。达到相应的数量即可领取不同奖项（具体看p2）</span></p>`

const Detail = (props: any) => {
    const { dispatch, operationArticle } = props;
    const { id }: any= useParams();
    // const [article, setArticle] = useState({})
    // const [txt, setTxt] = useState('')

    useEffect(() => {

        dispatch({
            type:'global/getOperationArticle',
            payload: { id }
        })

        // request({
        //     url: '/blogServer/findArticle',
        //     method: 'post',
        //     data: { id },
        //     headers: { 
        //         'x-csrf-token': cookie.get("csrfToken"),
        //     }
        // }).then((res: any) => {
        //     const { data, errmsg, errno } = handleReturn(res);
        //     if(errno === 0) {
        //         setArticle(data.data);
        //         setTxt(data.data.article_content_html)
        //     }
        //     console.log('文章数据', res)
        // })
        console.log('params', id)
        // effect
        // return () => {
        //     cleanup
        // }
    }, [])
    const handleEdit = () => {
        history.push(`/edit/${id}`)
    }

    return (
        <>
            <div className="article-container" >
                <div className="article-header">
                    <div className="article-user">
                        <img src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/d2e36b26cc51113c7f8451e1d4500e35~300x300.image" alt=""/>
                        <div className="article-info">
                            <div className="user-name">
                                来自外星球的程序员
                            </div>
                            <div className="article-time">
                                4天前
                            </div>
                        </div>

                    </div>
                    <div className="article-operation">
                        <Button
                            ghost
                            type='primary'
                            size='small'
                            style={{ marginRight: 20 }}
                            onClick={handleEdit}
                        >
                            编辑文章
                        </Button>
                        <Button
                            ghost
                            type='primary'
                            size='small'
                            style={{ marginRight: 20 }}
                            onClick={handleEdit}
                        >
                            权限管理
                        </Button><Button
                            ghost
                            type='primary'
                            size='small'
                            style={{ marginRight: 20 }}
                            onClick={handleEdit}
                        >
                            关注
                        </Button>
                    </div>
                </div>
                <div className="article-content" dangerouslySetInnerHTML={{ __html: operationArticle }}/>
                <div className="author-info">
                    <Author />
                </div>
                <ArticlePanel />
                <ArticleAuth />
            </div>
            <BackTop />
        </>
        
    );
}

const mapStateToProps = (state: any) => ({
    operationArticle: state.global.operationArticle,
})
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);