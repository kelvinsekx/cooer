export const CREATE = async (user) => {
    try {
        let response = await fetch(
            "/_v1/api/users/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const LIST = async () => {
    try {
        let response = await fetch(
            "/_v1/api/users/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const UPDATE = async (userId, token, user) => {
    try {
        let response = await fetch(
            `/_v1/api/users/${userId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: user
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const READ = async (param, token, signal) => {
    try {
        let response = await fetch(
            `/_v1/api/users/${param.userId}`, {
            method: "GET",
            signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+ token.token
            }
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}

export const FOLLOW = async (params, credentials, followId) =>{
    try {
        let response = await fetch(`/_v1/api/users/${params.userId}/follow`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ credentials.token
            },
            body: JSON.stringify({userId: params.userId, followId})
        })
        return await response.json()
    }catch (err){
        console.log(err)
    }
}

export const UNFOLLOW = async (params, credentials, unfollowId) =>{
    try {
        let response = await fetch(`/_v1/api/users/${userId}/unfollow`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ credentials.token
            },
            body: JSON.stringify({userId: params.userId, unfollowId})
        })
        return await response.json()
    }catch (err){
        console.log(err)
    }
}
