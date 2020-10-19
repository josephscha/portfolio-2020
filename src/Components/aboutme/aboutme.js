import React from 'react';
import AboutMeStyles from './aboutme.module.css'

function AboutMe() {
    return (
        <div className={AboutMeStyles.AboutMe}>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Calligraffitti" />
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
            <h1 className={AboutMeStyles.Name}>Joseph S Cha</h1>
            <div className={AboutMeStyles.ImgDiv}>
                <img className={AboutMeStyles.ProfilePicture} src="./profilepicture.jpg" alt="default"/>
            </div>
                {/* <div className="profile-info">         
                    - Flatiron School Graduate
                    - Experienced in Ruby and JavaScript based programming and frameworks such as Rails and ReactJS/React native. 
                    - Expert in Project Management and Problem Solving with a driven mind-set seeking like-minded teams and companies to change the world through code. 
                    Technologies: JavaScript (ES5/ES6), Ruby, HTML, CSS, SQL
                    Ruby on Rails, React, React Native, Redux, Node.js, PostgreSQL, SQLite3, Bootstrap, Semantic-UI
                </div> */}
                <div className={AboutMeStyles.ProfileInfo}>
                    <p> Hello! I'm Joseph, a Software Engineer based in New York City. </p>
                    <br></br>
                    <p>My journey to become a full stack developer began on the 17th of February of 2020 when I first attended Flatiron School's Full stack web development course.</p>
                    <br></br>
                    <p>I enjoy creating websites, applications, and anything in between that serve a real life purpose while maintaining top of the line user experience.</p>
                    <br></br>
                    <p>Here are a few technologies that I use:</p>
                    <ul>
                        <li>JavaScript (ES6)</li>
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>Ruby on Rails</li>
                        <li>HTML</li>
                        <li>(S)CSS</li>
                    </ul>
                    <p> And currently in the process of getting familiar with Python!</p>
                </div>
        </div>
    )
}

export default AboutMe;