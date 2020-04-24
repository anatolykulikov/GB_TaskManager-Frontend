import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './style.scss'

export default class TestComp extends Component {
    render () {
        return (
            <div className="test-block">
                <h1 className="test-header">Тестовый компонент</h1>
            </div>
        )
    }
}