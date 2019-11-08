import React, { Component } from 'react'

class PartTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2 id="PartTitle">{this.props.partNumber}. {this.props.titleName}</h2>
        )
    }
}

export default PartTitle