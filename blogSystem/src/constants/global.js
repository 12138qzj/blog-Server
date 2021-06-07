
import { get, post } from '@/utils/axios'

const APFix = '/blogServer'

const Service = {
    getArticle(){
        return get(`${APFix}/getArticle`);
    },
    getOperationArticle(params){
        console.log('post', params)
        return post(`${APFix}/findArticle`, params);
    }
}
export default Service;