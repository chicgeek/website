import React, { Component } from 'react';
import './../css/app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: ''
    }
    this.getItems = this.getItems.bind(this)
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
  }

  focus(e, id) {
    e.target.focus()
    this.setState((state) => ({
      activeId: id
    }))
  }

  blur() {
    this.setState((state) => ({
      activeId: ''
    }))
  }

  getItems(data) {
    return data.map((section) => {
      return (
        <section
          key={section.id}
          className={`section ${this.state.activeId === section.id ? 'section--active' : ''}`}
        >
          <h2
            className={`section__heading section__heading--${section.id}`}
            children={section.title}
            tabIndex="0"
            onClick={(e) => this.focus(e, section.id)}
            onFocus={(e) => this.focus(e, section.id)}
            onBlur={(e) => this.blur()}
          />
          <div
            className="section__content"
            children={section.content}
          />
        </section>
      )
    })
  }

  render() {
    return (
      this.getItems(this.props.data)
    )
  }
}

export default App;
