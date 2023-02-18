import React, {FunctionComponent} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';



type Route = {
    path: string,
    redirect?:string,
    element: FunctionComponent,
    protected: boolean
    routes?: Route[]
}

const RoutingConfig: FunctionComponent<{routes : Route[]}> = (props) => {
  return (
    <Routes>
        {
            props.routes.map((route: Route) =>
                {
                    console.log(route)
               
             return (
                <Route path={route.path} element={!route.redirect?  route.protected ? <ProtectedRoute><route.element/></ProtectedRoute> :  <route.element/> : <Navigate to={route.redirect!}/>  } key={route.path}>
                    {
                        route.routes && route.routes.map((routerItem: Route) => 
                        {   console.log(routerItem)
                        
                         return   (
                                <Route path={routerItem.path} element={!routerItem.redirect? <routerItem.element/> :  <Navigate to={routerItem.redirect!}/>} key={routerItem.path}/>
                            )

                        }
                         ) 
                            
                        
                    }
                </Route>
            )
            
                })

        }
    </Routes>
  )
}

export default RoutingConfig