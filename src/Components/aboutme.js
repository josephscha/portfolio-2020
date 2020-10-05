import React from 'react';
// import pdf from './resume.pdf'

function AboutMe() {
    return (
        <div className="aboutme">
            <h1>Joseph S Cha</h1>
            <img className="profile-picture" src="./profilepicture.jpg" alt="default"/>
                <div className="profile-info">         
                    Flatiron School Graduate
                    <br></br>
                    Experienced in Ruby and JavaScript based programming and frameworks such as Rails and ReactJS/React native. 
                    <br></br>
                    Expert in Project Management and Problem Solving with a driven mind-set seeking like-minded teams and companies to change the world through code. 
                </div>
                <div className="portfolio-techstack">
                Technologies | Frameworks | Libraries: JavaScript (ES5/ES6), Ruby, HTML, CSS, SQL
                    Ruby on Rails, React, React Native, Redux, Node.js, PostgreSQL, SQLite3, Bootstrap, Semantic-UI
                </div>
                {/* <a href={pdf}>Resume</a> */}
        </div>
    )
}

export default AboutMe;