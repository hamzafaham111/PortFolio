import React from 'react';
import {CircleProgress} from 'react-gradient-progress'
import MyPicture from '../hamza faham yousafzai (3).webp';
const Skills = () =>
{
    return(
        <>
        <div className="skills" id="skills">

        <div className="skills_body">
        <div style={{textAlign:"center",marginBottom:"10px"}}>
            <h1>Skills</h1>
            <span>Following are the technologies that i know about</span>
        </div>
        <div className="mySkills">
        <div>
        <CircleProgress percentage="90" width="85"secondaryColor="#f0f0f0" primaryColor={['#CA6D35', '#CA6D35']}/>
        <h5>HTML5</h5>
        </div>
        <div>
        <CircleProgress percentage="90" width="85"secondaryColor="#f0f0f0" primaryColor={['#254BDD', '#254BDD']}/>
        <h5>CSS3</h5>
        </div>
        <div>
        <CircleProgress percentage="65" width="85"secondaryColor="#f0f0f0" primaryColor={['#EFD81D', '#EFD81D']}/>
        <h5>Javascript</h5>
        </div>
        <div>
        <CircleProgress percentage="75" width="85"secondaryColor="#f0f0f0" primaryColor={['#533B78', '#533B78']}/>
        <h5>Bootstrap</h5>
        </div>
        
        </div>
        <div className="mySkills">
        <div>
        <CircleProgress percentage="60" width="85"secondaryColor="#f0f0f0" primaryColor={['#61DAFB', '#61DAFB']}/>
        <h5>ReactJs</h5>
        </div>
        <div>
        <CircleProgress percentage="60" width="85"secondaryColor="#f0f0f0" primaryColor={['#0769AD', '#0769AD']}/>
        <h5>Jquery</h5>
        </div>
        <div>
        <CircleProgress percentage="50" width="85"secondaryColor="#f0f0f0" primaryColor={['#7377AD', '#7377AD']}/>
        <h5>PHP</h5>
        </div>
        <div>
        <CircleProgress percentage="70" width="85"secondaryColor="#f0f0f0" primaryColor={['#4479A1', '#F29111']}/>
        <h5>SQL</h5>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Skills;
