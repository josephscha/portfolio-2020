import React from 'react';
import resume from './resume.pdf'

class Resume extends React.Component {

    render () {
        return (
            <div className="center">
                <embed src={resume} width="800px" height="700px" />
            </div>
        )
    }    
}

//need to find a way to display pdf or keep as just a link on navbar
export default Resume;