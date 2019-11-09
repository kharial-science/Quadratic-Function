import React, { Component } from 'react'

import LessonJSON from './LessonContent.json'

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

                        for (const ParagraphObj of SubPart.content) {
                            this.state.lesson.push(<Paragraph title={ParagraphObj.ParagraphTitle} content={ParagraphObj.content} />)
                        }

                    }
                }

            }
        }
        console.log(this.state.lesson)
        this.setState({})
    }

    render() {
        return (
            <div id="Lesson">
                <div className="border-header"></div>
                <div id="LessonContent">
                    {this.state.lesson}
                </div>
            </div>
        )
    }
}

export default Lesson