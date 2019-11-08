import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="Header">
                <h1> f(x) = <span className = "coefficient a">a</span>x² + <span className = "coefficient b">b</span>x + <span className = "coefficient c">c</span></h1>
                <h2>La fonction polynôme du second degré</h2>
            </div>
        )
    }
}

export default Header