
import './index.less'
const num = 13
const ArticlePanel =()=>{


    return (
        <div className="article-suspended-panel">
            <div className="like-btn panel-btn" data-badge={num}></div>
            <div className="comment-btn panel-btn" data-badge={num} ></div>
            <div className="share-title">分享</div>
            <div className="copy-btn panel-btn"></div>
        </div>
    )
}

export default ArticlePanel