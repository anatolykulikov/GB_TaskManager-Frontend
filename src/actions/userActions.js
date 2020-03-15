let LoginPath = 'https://jsonplaceholder.typicode.com/posts';

export const loginUser = usrObj => ({
    type: "LOGIN_USER",
    payload: usrObj
})

export const userLoginFetch = user => {
    return dispatch => {
        return fetch(LoginPath, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                console.log(data.message);
            } else {
                console.log(data);
                dispatch(loginUser(data.user));
            }
        })
    }
}