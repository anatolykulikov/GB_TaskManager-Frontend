import './Landing.scss';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Landing extends Component {
    render() {
        return (
            <>
                <div className="first_section">
                    <div className="wrapper">
                        <div className="col-8">
                            <h2>TaskUp</h2>
                            <h1>Управлять задачами легче лёгкого</h1>
                            <p>Простой и лаконичный менеджер ваших задач</p>
                            <nav>
                                <Link to="/auth" className="signin">Войти</Link>
                                <Link to="/reg" className="signout">Зарегистрироваться</Link>
                            </nav>
                        </div>
                        <div className="col-4 first_section-image">
                            <img src="./img/notebook.png" alt="notebook"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}