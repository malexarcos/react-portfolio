import React, { useState } from 'react';
import Project from '../Project';

// function Portfolio() {
// return (
//     <div>
//         <h2> This is the portfolio</h2>

//     </div>
// )
// }

function Portfolio() {
    const [portfolio] = useState([
        {
          name: 'calender',
          description: 'HTML/CSS/JavaScript',
          link: "https://malexarcos.github.io/calendar/",
          repo: "https://github.com/malexarcos/calendar"
        },
        {
          name: 'HTML-Portfolio',
          description: 'HTML, CSS',
          link: "https://malexarcos.github.io/Portfolio/",
          repo: "https://github.com/malexarcos/Portfolio"
        },
        {
          name: 'NHL app tracker A Group Project',
          description: 'HTML, CSS JavaScript',
          link: "https://justinberg97.github.io/group-project-1/",
          repo: "https://github.com/justinberg97/group-project-1"
        },
        {
          name: 'ORM-Ecommerce',
          description: 'JavaScript',
          link: "https://drive.google.com/file/d/1g_DiA5Hg6w9mkIUiwEyHsQeYI7yqfJ8N/view",
          repo: "https://github.com/malexarcos/ORM-Ecommerce"
        },

      ]);

      return (
          <div className="flex-row">
            {portfolio.map((project, idx) => (
              <Project
              project={project}
              key={"project" + idx}
            />
            ))}
          </div>
      );
}

export default Portfolio;

// return (
//     <div>
//         <h2> This is the portfolio</h2>
//     </div>
// )