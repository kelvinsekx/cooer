import fetch from "node-fetch"


const routes = [
    {
        path: "/home",
        component: 'Muha',
        loadData: (match, req)=>{
            console.log(req)
            if(req.cookies){
                console.log(req.cookies.user)
            }
            return fetch(`http://localhost:4006/_v1/api/gists/feed/${req.cookies.user}`)
        }
    },
    {
        path: "/profile/:userId",
        component: 'Profile',
        loadData: (match, req)=>fetch(`http://localhost:4006/_v1/api/users/${match.params.userId}`)
    },
]

export default routes