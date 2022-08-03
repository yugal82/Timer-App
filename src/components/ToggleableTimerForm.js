import React, { Component } from 'react'
import TimerForm from './TimerForm'

export class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  }
  
  handleFormOpen = (e) => {
    this.setState({ isOpen: true });
  }

  handleFormClose = () => {
    this.setState({isOpen: false});
  }

  handleFormSubmit = (timer) => {
    this.setState({isOpen: false});
    this.props.onFormSubmit(timer);
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit = {this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      )
    }
    return (
      <div className='ui basic content center aligned segment'>
        <button
          className='ui basic button icon'
          onClick={this.handleFormOpen}>
          <i className='plus icon' />
        </button>
      </div>
    )
  }
}

export default ToggleableTimerForm