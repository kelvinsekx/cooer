import fetch from "node-fetch"


const routes = [
    {
        path: "/home",
        component: 'Muha',
        loadData: (match, req)=>{
            // if(req.cookies){
            //     console.log("client cookies",req.cookies.user)
            // }
            return fetch(`http://localhost:4006/_v1/api/gists/feed/kelvin97`)
        }
    },
    {
        path: "/profile/:userId",
        component: 'Profile',
        loadData: (match, req)=>fetch(`http://localhost:4006/_v1/api/users/${match.params.userId}`)
    },
    {
        path: "/ayoze/:gossiptitle/:gossipId",
        component: 'AyozeDiscuss',
        loadData: (match, req)=> console.log("heyye")
    },
]

export default routes