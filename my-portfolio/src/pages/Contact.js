import React from 'react';
import "../index.css";

export const Contact = () => {
  return (
    <div>
    <div id="contact" className="blue-background"></div> {/* Add id="contact" */}
    <div className="personal-background">
    <p>In 2020, I graduated from NYU Gallatin's School of Individualized Study with a B.A. in Entertainment Public Relations & Multimedia Communications. Building on this foundation, I furthered my education by completing a software development professional certificate program at NYU's School of Professional Studies this past December of 2023. <br /><br />Throughout my academic and professional endeavors, my passion for multimedia arts, digital storytelling and brand development has only grown. If you are interested in working together or have any additional inquiries, please contact me at eliana.freudenberger@gmail.com.</p>
    </div>
    <div className='contact-black-background'></div>
      <div className='contact-links'>
        <a className="LinkedIn" href="https://www.linkedin.com/in/eliana-freudenberger-2b23b5149/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
        </a>
        <a className="Email" href="mailto:eliana.freudenberger@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
        </a>
      </div>
      <div className='contact-background'> 
      </div>
      <div className='contact-picture-description'>
      Image from&nbsp;<a href="https://www.freepik.com/free-vector/blue-flowers-pattern-background_1128620.htm#fromView=search&page=1&position=0&uuid=3d7b8afe-8659-49ba-890d-e14dc3d566ba">Freepik</a>
      </div>
    </div>
  );
}

export default Contact;
