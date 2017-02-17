import React, {Component} from 'react'

export default class TotalTime extends Component {

    render() {
        const { entries } = this.props
        let time = 0;
        entries.map((entry) => {
            time += parseInt(entry.hours)
        })
        return (
            <div className="totalTimeContainer">
                <p className="totalTime" >
                    Total hours spent: {time} hours   
                </p>
            </div>
        );
    }
}
