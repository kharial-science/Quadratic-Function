import React, { Component } from 'react'

import LessonJSON from './LessonContent.jsx'

import './Lesson.css'

import PartTitle from './PartTitle'
import SubPartTitle from './SubPartTitle'
import Paragraph from './Paragraph'

class Lesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lesson: []
        }
    }

    componentDidMount() {
        for (const Part of LessonJSON) {
            this.state.lesson.push(<PartTitle title={Part.PartTitle} />)
            if (Part.content) {

                for (const SubPart of Part.content) {
                    this.state.lesson.push(<SubPartTitle title={SubPart.SubPartTitle} />)
                    if (SubPart.content) {

                        let ParagraphArray = []
                        for (const ParagraphObj of SubPart.content) {
                            ParagraphArray.push(<Paragraph title={ParagraphObj.ParagraphTitle} content={ParagraphObj.content} />)
                        }
                        this.state.lesson.push(<div className="paragraph-container">{ParagraphArray}</div>)

                    }
                }

            }
        }
        this.setState({})
    }

    render() {
        return (
            <div id="Lesson">
                <div className="border-header"></div>
                <div id="LessonContent">
                    {this.state.lesson}
                </div>
                <p>Exemple sur une ligne pour bien te montrer tout ça: <div className="fraction"><span className="numerator">19</span><span className="denominator">16</span></div> Et la suite</p>
            </div>
        )
    }
}

export default Lesson