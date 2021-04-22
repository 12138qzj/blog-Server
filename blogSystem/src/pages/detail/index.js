import { history } from 'umi'
import styles from './index.less';

const IndexPage = () => {

    history.push('/home');

    return ( <
        div className = "acticle-container" >
        <
        h1 className = { styles.title } > Page index < /h1> <
        /div>
    );
}

export default IndexPage;