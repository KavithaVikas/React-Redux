import React from "react";
import User from "./User";
import Main from "./Main";
import {connect} from "react-redux";

class APP extends React.Component {

changeName(){
    this.props.changeName("Vikas");
}

    render() {
        return (
            <div>
                <Main changeUser ="Kavitha"/>
                <User changeUserName ={this.props.user.name}/>
                <button onClick = {this.changeName.bind(this)}> Change Name</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        user:state.userReducer
    }

    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeName: (name) => {
            dispatch({
                type:"SET_NAME",
                payload:name
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(APP);


