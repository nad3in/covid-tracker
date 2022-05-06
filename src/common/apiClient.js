const get = async (url, body) => {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/${url}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("jwt")
        }
    })
        .then(response => {
            if (!response.ok) {
                throw response;
            }
            return response
        })
        .catch((e) => { return e });
}
const post = async (url, body) => {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/${url}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("jwt")
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw response;
            }
            return response
        })
        .catch((e) => { return e });
}
const put = async (url, body) => {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/${url}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("jwt")
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                throw response;
            }
            return response
        })
        .catch((e) => { return e });
}
export { get, post, put }
