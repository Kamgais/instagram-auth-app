import React, {FunctionComponent} from 'react'
import {Routes, Route} from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';


type Route = {
    path: string,
    element: FunctionComponent,
    routes?: Route[]
}

const RoutingConfig: FunctionComponent<{routes : Route[]}> = (props) => {
  return (
    <Routes>
        {
            props.routes.map((route: Route) => (
                <Route path={route.path} element={<route.element/>} key={route.path}>
                    {
                        route.routes && route.routes.map((routerItem: Route) => (
                            <RouteWithSubRoutes {...routerItem}/>
                        )) 
                            
                        
                    }
                </Route>
            ))
        }
    </Routes>
  )
}

export default RoutingConfig