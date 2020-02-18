import React, { Fragment } from "react";

export const data = [
  {
    id: "person",
    title: (
      <Fragment>
        Personal <span>details</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <h3>About me</h3>
        <p>
          I am a front end developer with over 15 years of experience as part of
          agency and in-house teams. In addition to technical excellence, I am a
          leader of people and advocate for inclusive work cultures.
        </p>
        <p>
          I'm a Canadian living and working in Sheffield&nbsp;UK. I have a
          master's degree in music and love design, board games, and red pandas.
        </p>
      </Fragment>
    )
  },
  {
    id: "skills",
    title: (
      <Fragment>
        Developer <span>skills</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <h3>User-centric approach</h3>
        <p>
          I focus on the intersection of user need, client demand, and technical
          limitation. I prioritise user experience, accessibility, and brand
          identity in my work.
        </p>
        <h3>HTML, CSS, JavaScript</h3>
        <p>
          I write accessible HTML styled with SCSS. My JavaScript experience
          includes React, Redux, and Styled Components. I work with my team to
          ensure quality code, modularity, and maintainability.
        </p>
      </Fragment>
    )
  },
  {
    id: "leadership",
    title: (
      <Fragment>
        <span>People</span> leadership
      </Fragment>
    ),
    content: (
      <Fragment>
        <h3>Leader and mentor</h3>
        <p>
          I am a reliable and trusted member of any team. I earn the respect of
          my coworkers through leadership and enabling others to do their best.
          I am an empathetic and supportive manager and enjoy mentoring other
          developers.
        </p>
        <h3>Culture and community</h3>
        <p>
          I strive to create and encourage a safe and inclusive work environment
          for everyone. Outside of work,{" "}
          <a href="https://inviqa.com/blog/how-user-groups-enrich-our-tech-community">
            I am involved with user groups
          </a>
          . I organise{" "}
          <a href="https://twitter.com/frontendsheff">
            Front&nbsp;End Sheffield
          </a>
          , <a href="https://twitter.com/frontendnorth">Front&nbsp;End North</a>
          , and previously organised Sheffield&nbsp;JS.
        </p>
      </Fragment>
    )
  },
  {
    id: "jobs",
    title: (
      <Fragment>
        Employment <span>history</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <ul>
          <li>
            <h3>
              <a href="https://inviqa.com/">Inviqa</a>
            </h3>
            Software engineering manager, front end developer
            (2013&nbsp;&#8209;&nbsp;present)
          </li>
          <li>
            <h3>
              <a href="https://www.evoluted.net/">Evoluted</a>
            </h3>
            Lead front end developer (2017&nbsp;&#8209;&nbsp;2018)
          </li>
          <li>
            <h3>Previous roles</h3>
            <a href="https://www.mec.ca/">Mountain&nbsp;Equipment&nbsp;Co-op</a>
            , <a href="https://www.vancity.com/">Vancity</a>,{" "}
            <a href="https://www.york.ac.uk/">University&nbsp;of&nbsp;York</a>,{" "}
            <a href="https://www.uwo.ca/">
              University&nbsp;of&nbsp;Western&nbsp;Ontario
            </a>
          </li>
        </ul>
      </Fragment>
    )
  },
  {
    id: "contact",
    title: (
      <Fragment>
        Contact me <span>online</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <ul>
          <li>
            <a href="https://www.twitter.com/chicgeek">chicgeek on Twitter</a>
          </li>
          <li>
            <a rel="me" href="https://mastodon.social/@chicgeek">
              chicgeek on Mastodon.social
            </a>
          </li>
          <li>
            <a href="https://www.github.com/chicgeek">chicgeek on Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chicgeek">
              chicgeek on LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:laura@chicgeek.uk?subject=An email from chicgeek.uk">
              Email me at laura@chicgeek.uk
            </a>
          </li>
        </ul>
      </Fragment>
    )
  }
];

export default data;
