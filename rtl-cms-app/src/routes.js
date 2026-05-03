import Comments from './Components/Comments/Comments'
import Products from './Components/Products/Products'
import Users from './Components/Users/Users'
import Orders from './Components/Orders/Orders'
import Offs from './Components/Offs/Offs'


let routes = [
    {path:'/products',element:<Products/>},
    {path:'/comments',element:<Comments/>},
    {path:'/users',element:<Users/>},
    {path:'/orders',element:<Orders/>},
    {path:'/offs',element:<Offs/>},
]


export default routes