import React from 'react';
import HomeStyles from './home.module.css'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaMedium } from 'react-icons/fa';

function Home() {
    return (
        <div className={HomeStyles.Homepage}>
            <div className={HomeStyles.Home}>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Calligraffitti" />
                {/* <img className="profile-picture" src="./profilepicture.jpg" alt="default"/> */}
                <div>Joseph S. Cha</div>
                <br></br>
                <br></br>
                <br></br>
                <div>Software Engineer</div>
                <br></br>
                <a 
                    href="https://www.linkedin.com/in/joseph-cha-316639174/" 
                    target="_blank" 
                    rel="noopener noreferrer"><FaLinkedin className={HomeStyles.Icon}/>
                </a>
                <a 
                    href="https://github.com/josephscha" 
                    target="_blank" 
                    rel="noopener noreferrer"><FaGithubSquare className={HomeStyles.Icon}/>
                </a>
                <a 
                    href="https://www.facebook.com/JoeChaCha/" 
                    target="_blank" 
                    rel="noopener noreferrer"><FaFacebookSquare className={HomeStyles.Icon}/>
                </a>
                <a 
                    href="https://medium.com/@cha_joseph" 
                    target="_blank" 
                    rel="noopener noreferrer"><FaMedium className={HomeStyles.Icon}/>
                </a>
            </div>
        </div>
    )
}

// add styling to icons
export default Home;