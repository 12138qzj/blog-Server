import Service from '@/constants/global.js'

const {
    getArticle,
    getOperationArticle,
} = Service

export default {
    namespace: 'global',
    state: {
        home: 'qzj12138',
        allArticle: [],
        operationArticle: '',

    },
    effects: {
        * querytesst({ payload }, { call, put }) {
            console.log('payload', payload);
            yield put({
                type: 'updataState',
                payload,
            })
        },

        * getArticle({ payload }, { call, put }) {
            const { data: { data: { data }}} = yield call(getArticle);
            yield put({
                type: 'updataState',
                payload: {
                    allArticle: data
                },
            })
        },

        * getOperationArticle({ payload }, { call, put }) {
        const { data: {data: {data }}} = yield call(getOperationArticle, payload);
        // const data = yield call(getOperationArticle, payload);

        console.log('datadata', data, payload)
        yield put({
            type: 'updataState',
            payload: {
                operationArticle: data?.article_content_html || ''
            },
        })
    }
    },
    reducers: {
        updataState(state, { payload }) {
            return {
                ...state,
                ...payload,
            };

        }
    }
}