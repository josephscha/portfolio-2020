import React from 'react';
import pdf from './resume.pdf'

class Resume extends React.Component {

    render () {
        return (
            <div className="center">
                <a href={pdf}>Resume</a>
            </div>
        )
    }    
}

//need to find a way to display pdf or keep as just a link on navbar
export default Resume;