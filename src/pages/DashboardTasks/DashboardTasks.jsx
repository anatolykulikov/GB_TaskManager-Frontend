import './DashboardTasks.scss';
import React, { Component } from 'react';

import TasksList from '../../components/TasksList/TasksList.jsx';

import {demoTask} from './demodata.js';

// 

export default class DashboardTasks extends Component {
    render() {
        return (
            <main className="dashboard">
                <TasksList boardName="Planned" tasks={demoTask.planned} />
                <TasksList boardName="In Work" tasks={demoTask.inwork} />
                <TasksList boardName="Completed" tasks={demoTask.completed} />
            </main>
        )
    }
}