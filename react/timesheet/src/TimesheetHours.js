import React, { Component } from 'react'

export default class TimesheetHours extends Component {

    static propTypes = {
        totalHours: React.PropTypes.number,
    }

	render() {

		const { totalHours }=this.props
        return (
            <div className="timesheet-hour-box">
            <h3>Total Hours Spent: {totalHours}</h3>
            </div>
        )
    }
}