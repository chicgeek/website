import React, { Fragment } from 'react';

export const data = [
  {
    id: 'person',
    title: <Fragment>Personal details</Fragment>,
    content: <Fragment>
      <h3>About me</h3>
      <p>I'm a Canadian living and working in Sheffield&nbsp;UK.</p>
      <p>I am a front end developer with over 10 years of experience as part of agency and in-house teams. In addition to technical excellence, I am a leader of people and advocate for inclusive work cultures.</p>
    </Fragment>
  },
  {
    id: 'skills',
    title: <Fragment>Technical skills</Fragment>,
    content: <Fragment>
      <ul>
        <li>
          <h3>HTML</h3>
          Semantic code, ARIA, microdata…
        </li>
        <li>
          <h3>CSS</h3>
          SCSS, LESS, styled components…
        </li>
        <li>
          <h3>JavaScript</h3>
          React, ES6+, jQuery…
        </li>
      </ul>
   </Fragment>
  },
  {
    id: 'approach',
    title: <Fragment>User-centric approach</Fragment>,
    content: <Fragment>
        <h3>Users first</h3>
      <p>I focus on the intersection of user need, client demand, and technical limitation.</p>
      <p>I prioritise user experience, accessibility, and brand identity in my work.</p>
    </Fragment>
  },
  {
    id: 'leadership',
    title: <Fragment>Team leadership</Fragment>,
    content: <Fragment>
      <ul>
        <li>
          <h3>Leader and mentor</h3>
          I am organised and proactive. I am a caring line manager and mentor others.
        </li>
        <li>
          <h3>Recruiter and manager</h3>
          I interview candidates and play an active role in recruitment. I also have experience with line management.
        </li>
        <li>
          <h3>Positive influencer</h3>
          I strive for a safe and inclusive work environment for everyone.
        </li>
      </ul>
    </Fragment>
  },
  {
    id: 'jobs',
    title: <Fragment>Employment history</Fragment>,
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
    title: <Fragment>Contact&nbsp;me online</Fragment>,
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
