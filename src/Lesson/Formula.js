import React, { Component } from 'react'

class Formula extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Formula">
                {this.props.content}
            </div>
        )
    }
}

export default Formula