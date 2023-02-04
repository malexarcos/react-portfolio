import React from "react";

function Resume() {
    return (
        <div className="my-2">
             <p>
                Download my <a href="https://www.linkedin.com/">resume</a>
              </p>
              <h3>Front-end Skills</h3>
              <ul className="skills">
                 <li>HTML</li>
                  <li>CSS</li>
                    <li>JavaScript</li>
                   <li>jQuery</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                 </ul>
                  <h3>Back-end Skills</h3>
                  <ul className="skills">
                    <li>API</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
             </div>
    );
}

export default Resume;