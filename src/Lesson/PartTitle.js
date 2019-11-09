import React, { Component } from 'react'

class PartTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2 className="PartTitle">{this.props.partNumber}. {this.props.titleName}</h2>
        )
    }
}

export default PartTitle