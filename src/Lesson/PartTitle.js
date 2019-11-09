import React, { Component } from 'react'

class PartTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2 className="PartTitle">{this.props.title}</h2>
        )
    }
}

export default PartTitle