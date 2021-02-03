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
          I am a front end engineering manager with over 15 years of experience. In addition to being a technical authority, I am a leader of people and advocate for inclusive work cultures.
        </p>
        <p>
          I'm a Canadian living and working in Sheffield&nbsp;UK. I have an MA in vocal music and love design, the outdoors, games, and red pandas.
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
          I focus on the intersection of user need, client demand, and technical limitation. I prioritise user experience, accessibility, and maintainability in my work.
        </p>
        <h3>Technologies and approaches</h3>
        <p>
          I work with my teams on modern architectures to deliver beautiful and efficient websites using HTML, CSS, JavaScript. I guide our component-driven approaches, ensuring quality code, modularity, and maintainability.
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
          I am a reliable and trusted member of any team. I earn the respect of my coworkers through leadership and enabling and empowering others to do their best. I am an empathetic and supportive manager, guiding individuals and entire teams to learn, share, and become more efficient.
        </p>
        <h3>Culture and community</h3>
        <p>
          I strive to create and encourage a safe and inclusive work environment for everyone. Outside of work, I organise{" "}
          <a href="https://twitter.com/frontendsheff">
            Front&nbsp;End Sheffield
          </a>
          , <a href="https://twitter.com/frontendnorth">Front&nbsp;End North</a>
          , and have previously organised Sheffield&nbsp;JS.
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
            Software&nbsp;engineering&nbsp;manager, technical&nbsp;team&nbsp;lead, front&nbsp;end&nbsp;developer
            (2013&nbsp;&#8209;&nbsp;present)
          </li>
          <li>
            <h3>
              <a href="https://www.evoluted.net/">Evoluted</a>
            </h3>
            Lead front end developer (2017&nbsp;&#8209;&nbsp;2018)
          </li>
          <li>
            <h3>My CV</h3>
            <a href="http://bit.ly/chicgeek-cv">Laura Kishimoto</a>
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
