import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-128.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Pete Salcedo</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A web developer that lovess to hack on free time and woud love to hck the wrold man haha well not really but any way i will someday.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2018}
              schoolName="Hola Code"
              schoolDescription="Hola Code the program that will change Mexico one talented migrant at a time, we will have no border and we will not stop until we change the worlds view of migrants"
               />
               <Education
                 startYear={2013}
                 endYear={2016}
                 schoolName="CECYTEM technical school of Systems maintnance and support"
                 schoolDescription="Teachnicall school focused on making talented systems admins for better security"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Compucom Intel"
              jobDescription="A place to put your problem solving skils to the test always having to solve a problem from a wide variety"
              />
              <Experience
                startYear={2016}
                endYear={2017}
                jobName="Compucom Amerisourceberger"
                jobDescription="Amerisource bergen one of the largest pharmaceutical companies"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;