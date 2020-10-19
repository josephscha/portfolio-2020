import React from 'react';
import AboutMeStyles from './aboutme.module.css'

function AboutMe() {
    return (
        <div className={AboutMeStyles.AboutMe}>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Calligraffitti" />
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
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
                    <p> Hello! I'm Joseph S. Cha, a Software Engineer based in New York City. </p>
                    <br></br>
                    <p>My journey to become a full stack developer began on the 17th of February of 2020 when I first attended Flatiron School's Full stack web development course. I graduated on the 19th of June, 2020.</p>
                    <br></br>
                    <p>I enjoy creating websites, applications, and anything in between that serve a real life purpose while maintaining top of the line user experience.</p>
                    <br></br>
                    <p>My previous work experience starting from an early age in retail and sales, all the way up the managerial ladder and last few years in the health field, working as a surgical coordinator and site manager have helped me build up the necessary discipline and attention to detail to tackle any challenges but most importantly, empathy.</p>
                    <br></br>
                    <p>Here are a few technologies that I use:</p>
                    <ul className={AboutMeStyles.TechList}>
                        <li className={AboutMeStyles.ListItem}>☞ JavaScript(ES6)</li>
                        <li className={AboutMeStyles.ListItem}>☞ ReactJS</li>
                        <li className={AboutMeStyles.ListItem}>☞ React Native</li>
                        <li className={AboutMeStyles.ListItem}>☞ Ruby on Rails</li>
                        <li className={AboutMeStyles.ListItem}>☞ HTML</li>
                        <li className={AboutMeStyles.ListItem}>☞ (S)CSS</li>
                        <li className={AboutMeStyles.ListItem}>☞ Bootstrap</li>
                        <li className={AboutMeStyles.ListItem}>☞ JSON</li>
                        <li className={AboutMeStyles.ListItem}>☞ API</li>
                        <li className={AboutMeStyles.ListItem}>☞ SQL</li>
                    </ul>
                    <p> And currently in the process of getting familiar with Python!</p>
                </div>
        </div>
    )
}

export default AboutMe;