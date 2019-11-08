import React, { Component } from 'react'

import './Lesson.css'

import PartTitle from './PartTitle'
import SubPartTitle from './SubPartTitle'

class Lesson extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Lesson">
                <div className="border-header"></div>
                <div id="LessonContent">
                    <PartTitle partNumber={1} titleName="Polynômes du second degré"/>
                </div>
                
            </div>
        )
    }
}

export default Lesson