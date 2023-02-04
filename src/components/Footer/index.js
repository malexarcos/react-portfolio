import React from "react";

function Footer() {
        const icons = [
            {
              name: "fab fa-github",
              link: "https://github.com/malexarcos?tab=repositories"
            },
            {
              name: "fab fa-linkedin",
              link: "https://www.linkedin.com/in/alex-arcos-418a10260/"
            },
            {
              name: "fab fa-stack-overflow",
              link: "https://stackoverflow.com/users/19703346/alex-arcos"
            }
          ]

          return (
            <footer className="flex-row px-1">
              {icons.map(icon =>
              (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
              )
                )}
            </footer>
          );

    
}

export default Footer;