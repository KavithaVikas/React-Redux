import React from "react";

export const User = (props) =>{ 

        return(
            <div>
                <h1>User Page</h1>
                <p>Second User :  {props.changeUserName}   </p>
                </div>
        )
    }
