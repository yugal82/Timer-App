import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import Helpers from '../helpers';
import {v4 as uuidv4} from 'uuid';

export class TimerDashboard extends Component {
    state = {
        timers: [
            {
                id: uuidv4(),
                title:"React JS",
                project:"Timer App",
                elapsed:866535,
                runningSince:null
            },
            {
                id: uuidv4(),
                title:"JS",
                project:"Todo App",
                elapsed:962535,
                runningSince: Date.now()
            },
        ]
    }

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }

    createTimer = (timer) => {
        const t = Helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        });
    }

    handleUpdateFormSubmit = (timer) => {
        this.updateTimer(timer);
    }

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if(timer.id === attrs.id){
                    return ({
                        ...timer,
                        title: attrs.title,
                        project: attrs.project,
                    });
                }
                return timer;
            })
        })
    }

    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    }

    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter((t) => t.id !== timerId)
        })
    }

    render() {
        return (
            <div className='main ui'>
                <h1 className='ui dividing centered header'>Timers</h1>
                <div className='ui three column centered grid'>
                    <div className='column'>
                        <EditableTimerList
                            timers = {this.state.timers}
                            onFormSubmit={this.handleUpdateFormSubmit}
                            onTrashClick={this.handleTrashClick}
                        />
                        <ToggleableTimerForm  
                            onFormSubmit = {this.handleCreateFormSubmit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerDashboard