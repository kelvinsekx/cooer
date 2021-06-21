import { SIGNOUT } from "../apis/auth/api-auth";

const AUTH = {
    /**
     * 
     * @param {string} jwt 
     * @param {} cb 
     * This sets the jwt args to the sessionStorage
     * 
     * sessionStorage.setItem('jwt', JSON.stringify(jwt))
     * 
     * cb()
     */
    authenticate(jwt, cb) {
        if(typeof window !== 'undefined'){
            sessionStorage.setItem('jwt', JSON.stringify(jwt))
        }
        cb()
    },

    isAuthenticated() {
        if(typeof window == 'undefined') {
            return false
        }
        let item = false;
        if(sessionStorage.getItem('jwt')){
         item = JSON.parse(sessionStorage.getItem("jwt"));
            return item;
        }else {
            return item;
        }
    },

    clearJWT(cb) {
        if (typeof window !== 'undefined'){
            sessionStorage.removeItem("jwt")
        }
        cb()
        SIGNOUT().then(data=> {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/;"
        })
    }

}

export default AUTH