import React, { Component } from 'react'

class SubPartTitle extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
    <h3 className="SubPartTitle">{this.props.partNumber}. {this.props.titleName}</h3>
        )
    }
}

export default SubPartTitle