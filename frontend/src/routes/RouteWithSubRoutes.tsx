import React, {FunctionComponent} from 'react'
import {Route} from 'react-router-dom';


type Route = {
    path: string,
    element: FunctionComponent,
    routes?: Route[]
}


const RouteWithSubRoutes:FunctionComponent<Route> = (props: Route) => {
  return (
    <Route path={props.path} element={<props.element/>}>
      {
        props.routes && props.routes.map((route: Route) => (
            <RouteWithSubRoutes {...route}/>
        ))
      }
    </Route>
  )
}

export default RouteWithSubRoutes