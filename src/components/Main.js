import React from "react";

export default class Main extends React.Component {

    render() {

        return (
            <div>
                <h1> Main Component </h1>
                <p>Main User :{this.props.changeUser}</p>

            </div>
        )
    }
}