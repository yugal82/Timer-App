import React, { Component } from 'react'

export class TimerForm extends Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    }
    handleTitleChange = (e) => {
        this.setState({
            ...this.state,
            title: e.target.value
        })

        console.log(this.state.title);
    }
    handleProjectChange = (e) => {
        this.setState({
            ...this.state,
            project: e.target.value
        })

        console.log(this.state.project);
    }

    handleSubmit = (e) => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        })
    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input
                                type='text'
                                defaultValue={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input
                                type='text'
                                defaultValue={this.state.project}
                                onChange={this.handleProjectChange}
                            />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button
                                className='ui basic blue button'
                                onClick={this.handleSubmit}
                            >
                                {submitText}
                            </button>
                            <button
                                className='ui basic red button'
                                onClick={this.props.onFormClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerForm