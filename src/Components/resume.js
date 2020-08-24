import React from 'react';
import pdf from './resume.pdf'

class Resume extends React.Component {

    render () {
        return (
            <a href={pdf}>Resume</a>
        )
    }    
}

//need to find a way to display pdf 
export default Resume;