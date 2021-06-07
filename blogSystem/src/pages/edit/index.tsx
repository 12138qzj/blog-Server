import { useEffect } from 'react'
import { connect } from 'dva'
import { useParams } from 'umi'
import E from "wangeditor";
import './index.less';

const txt = `<h1 id="j3mhp" style="text-align:center;">活动&nbsp;</h1><p style="text-align:center;">fasd半蛇兜<span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">【掘金读书会】掘金x异步你有多久没有翻开一本书了？&nbsp;</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">“买书如山倒，读书如抽丝”，买来的书堆得书架上放不下，但读过的书屈指可数。</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">趁着国际读书日的到来，给自己一个读书的契机和我们一起阅读吧～&nbsp;</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">活动时间：4月19日-4月25日（7天）</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"></span><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">活动规则：选择一本书（类型不限，技术类、文学类、小说类都可以），</span></p><p style="text-align:center;"><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">在活动期间坚持阅读，并在沸点话题#读书笔记#</span><a href="https://juejin.cn/topic/6824710202248396813?sort=newest" target="_blank" style="background-color: rgb(255, 255, 255); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;"><img alt="https://juejin.cn/topic/6824710202248396813?sort=newest" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDI3RkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iLjgxOCI+CiAgICAgICAgPHBhdGggZD0iTTguMDMgNS4yNzZsMS41ODUtMS41ODRjMS4wOTMtMS4wOTMgMi45My0xLjAzIDQuMS4xNDEgMS4xNzIgMS4xNzIgMS4yMzYgMy4wMDguMTQyIDQuMTAyTDEyLjY3IDkuMTIzbC0uNzkyLjc5MmMtMS4wOTMgMS4wOTMtMi45MyAxLjAzLTQuMS0uMTQyIi8+CiAgICAgICAgPHBhdGggZD0iTTkuMjE5IDEyLjU3M2wtMS41ODQgMS41ODRjLTEuMDk0IDEuMDk0LTIuOTMgMS4wMy00LjEwMi0uMTQxLTEuMTcxLTEuMTcyLTEuMjM0LTMuMDA4LS4xNDEtNC4xMDFMNC41OCA4LjcyN2wuNzkyLS43OTJjMS4wOTMtMS4wOTQgMi45My0xLjAzIDQuMTAxLjE0MSIvPgogICAgPC9nPgo8L3N2Zz4K"/>juejin.cn</a><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">上分享读后感/读书笔记。达到相应的数量即可领取不同奖项（具体看p2）</span></p>`

const Edit = ( props: any) => {
    const { dispatch, operationArticle } = props;
    const { id }: any= useParams();

    useEffect(() => {
        dispatch({
            type:'global/getOperationArticle',
            payload: { id }
        })
        console.log('operationArticle', operationArticle, window.editor)

        if(!window.editor){
          const editor = new E('#edit');
          window.editor = editor;
          window.editor.create();
        }
        window.editor.txt.html(operationArticle || txt)
       
    }, [operationArticle])

    return (
        <div className="edit-content">
            <div id='edit' className="edit">
            </div>
            <div className="edit-operation">
                <button onClick={() =>{
                    // 拿到html纯文本
                    const htmlText = window.editor.txt.html();
                    // 拿到纯文本
                    // const text = window.editor.txt.text();
                    console.log('editor', htmlText);
                }}>
                    提交
                </button>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
