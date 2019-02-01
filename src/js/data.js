import React, { Fragment } from 'react';

export const data = [
  {
    id: 'person',
    title: <Fragment>Personal <span>details</span></Fragment>,
    content: <Fragment>
      <h3>About me</h3>
      <p>I'm a Canadian living and working in Sheffield&nbsp;UK.</p>
      <p>I am a front end developer with over 10 years of experience as part of agency and in-house teams. In addition to technical excellence, I am a leader of people and advocate for inclusive work cultures.</p>
    </Fragment>
  },
  {
    id: 'skills',
    title: <Fragment>Developer <span>skills</span></Fragment>,
    content: <Fragment>
      <h3>User-centric approach</h3>
      <p>I focus on the intersection of user need, client demand, and technical limitation. I prioritise user experience, accessibility, and brand identity in my work.</p>
      <h3>HTML, CSS, JavaScript</h3>
      <p>I write accessible HTML styled with SCSS. I have experience with React, Redux, Styled Components, and complex JavaScript applications. I work with my team to ensure quality code, modularity, and maintainability.</p>
   </Fragment>
  },
  {
    id: 'leadership',
    title: <Fragment><span>People</span> leadership</Fragment>,
    content: <Fragment>
      <h3>Leader and organiser</h3>
      <p>I am organised and proactive. I strive to create and encourage a safe and inclusive work environment for everyone.</p>
      <h3>Manager and mentor</h3>
      <p>I play an active role in recruitment and am an experienced line manager.</p>
    </Fragment>
  },
  {
    id: 'jobs',
    title: <Fragment>Employment <span>history</span></Fragment>,
    content: <Fragment>
      <ul>
        <li>
          <h3>Inviqa</h3>
          Technical team lead, Senior front end developer (2013&nbsp;&#8209;&nbsp;present)
        </li>
        <li>
          <h3>Evoluted</h3>
          Lead front end developer (2017&nbsp;&#8209;&nbsp;2018)
        </li>
        <li>
          <h3>Previous roles</h3>
          Mountain Equipment Co-op,
          Vancity,
          University of York,
          University of Western Ontario
        </li>
      </ul>
    </Fragment>
  },
  {
    id: 'contact',
    title: <Fragment>Contact me <span>online</span></Fragment>,
    content: <Fragment>
        <ul>
        <li>
          <a href="https://www.twitter.com/chicgeek">chicgeek on Twitter</a>
        </li>
        <li>
            <a rel="me" href="https://mastodon.social/@chicgeek">chicgeek on Mastodon.social</a>
        </li>
        <li>
            <a href="https://www.github.com/chicgeek">chicgeek on Github</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/chicgeek">chicgeek on LinkedIn</a>
        </li>
        <li>
            <a href="mailto:hello@laurakishimoto.com?subject=An email from laurakishimoto.com">Email me at hello@laurakishimoto.com</a>
        </li>
      </ul>
    </Fragment>
  }
]

export default data;
