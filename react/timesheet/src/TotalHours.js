import React from 'react'

class TotalHours extends React.Component {
    render () {
        const entries = this.props.entries;
        let totalHours = entries.reduce((p, c) => ({hours: parseInt(p.hours) + parseInt(c.hours)})).hours;
        return (
            <div className="col-md-12 timesheet-total-hours" >
                Total Hours spent: <span className="total-hours">{totalHours}</span>
            </div>
        )
    }
}

export default TotalHours;