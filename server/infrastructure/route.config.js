import fetch from "node-fetch"


const routes = [
    {
        path: "/home",
        component: 'Muha',
	loadData : (match, req) => console.log('')
    },
    {
        path: "/profile/:userId",
        component: 'Profile',
        loadData: (match, req)=> console.log("")
    },
    {
        path: "/ayoze/:gossiptitle/:gossipId",
        component: 'AyozeDiscuss',
        loadData: (match, req)=> console.log("")
    },
]

export default routes
