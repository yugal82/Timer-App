import React, { Component } from 'react'
import Helpers from '../helpers'

export class Timer extends Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleDelete = (e) => {
    this.props.onTrashClick(this.props.id)
  }

  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>{Helpers.renderElapsedString(this.props.elapsed, this.props.runningSince)}</h2>
          </div>
          <div className='extra content'>
            <span
              className='right flaoted edit icon'
              onClick={this.props.onEditClick}
            >
              <i className='edit icon' />
            </span>
            <span
              className='right flaoted trash icon'
              onClick={this.handleDelete}
            >
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue button basic'>
          Start
        </div>
      </div>
    )
  }
}

export default Timer    