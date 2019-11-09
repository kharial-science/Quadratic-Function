import React, { Component } from 'react'

class Paragraph extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Paragraph">
                <h4 className="ParagraphTitle">{this.props.title}</h4>
                <p className="ParagraphContent">{this.props.content}</p>
            </div>
        )
    }
}

export default Paragraph