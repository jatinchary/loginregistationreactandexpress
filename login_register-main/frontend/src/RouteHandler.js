import React from "react";
import {Outlet} from 'react-router-dom'

function RouteHandler(){
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default RouteHandler