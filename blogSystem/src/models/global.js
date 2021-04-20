export default {
    namespace: 'global',
    state: {
        home: 'qzj12138'
    },
    effects: {
        * querytesst({ payload }, { call, put }) {
            console.log('payload', payload);
            yield put({
                type: 'updataState',
                payload,
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