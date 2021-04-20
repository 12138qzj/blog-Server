import axios from 'axios'

async function Ajax(options) {
    return new Promise((resolve, rejet) => {
        let Promise;
        if (type === 'GET') {
            Promise = axios.get(url, {
                params: data
            })
        } else {
            Promise = axios.post(url, {
                params: data
            })
        }
        Promise.then((response) => {
            resolve(response);
        }).catch((error) => {
            console.error("数据请求异常！", error)
        })
    })
}

function parseErrorMessage(data, options) {

    if (hasProperty(data, 'erno') && data.errno === 3620) {
        window.location.href = data.data;
        return data;
    }

    if (options.checkError === false) {
        return data;
    }

    if (hasProperty(data, 'errno') && data.errno !== 0) {
        return Promise.reject(data);
    }


    if (hasProperty(data, 'errcode') && data.errcode !== 0) {

        const mockError = {
            errno: data.errcode,
            errmsg: data.errmsg,
            err_show: true,
        };
        return Promise.reject(mockError);
    }
}