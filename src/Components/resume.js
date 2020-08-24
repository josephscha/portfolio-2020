import React from 'react';
import pdf from './resume.pdf'

class Resume extends React.Component {

    render () {
        return (
            <a href={pdf}>Resume</a>
        )
    }    
}

export default Resume;