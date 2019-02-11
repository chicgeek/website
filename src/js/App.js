import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../css/app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: ''
    }
    this.getItems = this.getItems.bind(this)
    this.handleBodyClick = this.handleBodyClick.bind(this)
    this.handleTitleClick = this.handleTitleClick.bind(this)
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleBodyClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBodyClick, false);
  }

  handleBodyClick(e) {
    if (this.node.contains(e.target)) {
      return
    }
    this.blur()
  }

  handleTitleClick(e, id) {
    e.preventDefault()
    this.state.activeId !== id ?
      this.focus(e, id) :
      this.blur(e, id)
  }

  focus(e, id) {
    e.target.focus()
    this.setState((state) => ({
      activeId: id
    }))
  }

  blur() {
    document.activeElement.blur()
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
            className={`section__heading heading--${section.id}`}
            children={section.title}
            tabIndex="0"
            onFocus={(e) => this.focus(e, section.id)}
            onMouseDown={(e) => this.handleTitleClick(e, section.id)}
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
      <div ref={node => this.node = node}>
        {this.getItems(this.props.data)}
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired
  })).isRequired,
}

export default App;
