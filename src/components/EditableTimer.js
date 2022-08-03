import React, { Component } from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'

export class EditableTImer extends Component {
  state = {
    editFormOpen: false,
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeEditForm();
  }

  handleEditClick = () => {
    this.openEditForm();
  }

  handleFormClose = () => {
    this.closeEditForm();
  }

  openEditForm = () => {
    this.setState({ editFormOpen: true });
  }

  closeEditForm = () => {
    this.setState({ editFormOpen: false });
  }


  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleFormSubmit}
        />
      )
    }
    return (
      <Timer
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        runningSince={this.props.runningSince}
        onEditClick={this.handleEditClick}
        onTrashClick={this.props.onTrashClick}
      />
    )
  }
}

export default EditableTImer    