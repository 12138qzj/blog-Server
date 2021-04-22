import './index.less';

const contentTitle = (props: any) => {
    const { title, children } = props;
    return (
        <div className="content-header">
            <div className="content-title">
                { title }
            </div>
            { children }
        </div>
    );
}

export default contentTitle

