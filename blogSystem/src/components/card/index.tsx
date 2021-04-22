import './index.less';

const Card = (props: any) => {
    const { id, username, time, title, describe, url } = props;
    return (
        <div className="entry-box">
            <div className="card-header">
                <span className="card-name">
                    { username }
                </span>
                <div className="card-border">
                </div>
                <span className="card-time">
                    { time }
                </span>
            </div>
            <div className="card-title">
                { title }
            </div>
            <div className="card-describe">
                { describe }
                这个是描述文章内容这个是描述文章内容这个是描述文章内容
                这个是描述文章内容这个是描述文章内容这个是描述文章内容
                这个是描述文章内容这个是描述文章内容这个是描述文章内容
                这个是描述文章内容这个是描述文章内容这个是描述文章内容
            </div>
            <img src={url} alt=""/>
        </div>
    );
}

export default Card

