import React, { Component } from 'react';
import Nav from 'pages/Nav';
import './Assignment.css'

class Assignment extends Component {
    render () {
        return (
            <div>
                <Nav />
                <div className="Submit">
                    <h2>과제제출</h2>
                    <select className="Select">
                        <option value="">과목선택</option>
                        <option value="C">C</option>
                        <option value="Python">Python</option>
                        <option value="Network">Network</option>
                    </select>
                    <from>
                        <input type="text" className="Title" placeholder="제목" required></input><br/>
                        <input type="file" className="File" required></input><br/>
                        <input type="submit" className="Submit-button"></input>
                    </from>
                </div>
            </div>
        )
    }
}

export default Assignment;