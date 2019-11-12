import React, { Component } from 'react'

class Paragraph extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let p = <p className="ParagraphContent">{this.props.content}</p>
        if (typeof this.props.content == 'object') {
            p = []
            this.props.content.forEach(pContent => {
                p.push(<p className="ParagraphContent">{pContent}</p>)
            })
        }

        return (
            <div className="Paragraph">
                <h4 className="ParagraphTitle">{this.props.title}</h4>
                {p}
            </div>
        )
    }
}

export default Paragraph