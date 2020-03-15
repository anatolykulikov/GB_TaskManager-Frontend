import './TasksList.scss';
import React, { Component } from 'react';

import Task from 'components/Task/Task.jsx';

export default class TasksList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="tasks-list">
                    <h1 className="tasks-list__header">{this.props.boardName}</h1>
                    {this.props.tasks.map((task, idx) => <Task key={idx} {...task} />)}
                </section>
            </>
        
        )    
    }
}