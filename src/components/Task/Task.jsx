import './Task.scss';
import React, { Component } from 'react';

export default class Task extends Component {
    constructor(props) {
        super(props);
    }

    toWork() {
        console.log('Move Task to Work');
    }

    toDelete() {
        console.log('Delele Task from board');
    }

    render() {
        return(
            <>
            <div className="task">
                <h2 className="task-header">{this.props.title}</h2>
                <h3 className="task-category">{this.props.group}</h3>
                <div className="task-time-container">
                    <span className="task-time">Deadline: {this.props.deadline}</span>
                </div>
                <div className="task-controls">
                    <button className="task-control-start" onClick={() => this.toWork()}>To work</button>
                    <button className="task-control-del" onClick={() => this.toDelete()}>Delete</button>
                </div>
                <div className="task-bookmark">
                    <svg className="task-bookmark-svg" xmlns="http://www.w3.org/2000/svg" width="21pt" height="21pt" viewBox="0 0 21 21" version="1.1">
                        <path fill={this.props.label} d="M 4.375 3.5 L 4.375 19.25 L 10.5 16.625 L 16.625 19.25 L 16.625 3.5 C 16.625 2.539062 15.835938 1.75 14.875 1.75 L 6.125 1.75 C 5.164062 1.75 4.375 2.539062 4.375 3.5 Z M 4.375 3.5 "/>
                    </svg>
                </div>
            </div>
            </>
        )
    }
}