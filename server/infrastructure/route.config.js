import fetch from "node-fetch"
import { Cookie } from "tough-cookie"

console.log(Cookie)
const routes = [
    {
        path: "/home",
        component: 'Muha',
        loadData: ()=>fetch(`http://localhost:4006/_v1/api/gists/feed/kelvin97`)
    },
    {
        path: "/profile/:userId",
        component: 'Profile',
        loadData: (match)=>fetch(`http://localhost:4006/_v1/api/users/${match.params.userId}`)
    },
]

export default routes