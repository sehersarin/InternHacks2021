import React, { Fragment } from 'react';
import './calendar.css';
import Calendar from './Calendar';

export default function Schedule() {
    return(
        <Fragment>
            <section className="hero is-primary">
                <div className="hero-body">
                <div className="container p-3" style={{backgroundColor: "#14213D"}}>
                    <h1 className="title has-text-centered" 
                        style={{color: "#FCA311", textAlign: "center"}}>Calendar</h1>
                </div>
                </div>
            </section>
            <div className="container has-text-centered">
                <Calendar />
            </div>
        </Fragment>
    )
}