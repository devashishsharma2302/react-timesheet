import React, { Component } from 'react'

export default class TotalHours extends Component {
    static propTypes = {
    entries: React.PropTypes.array,
  }
  render() {
      const { entries } = this.props
      let total_hours = 0
      entries.map((entry, index) =>
        total_hours+=Number(entry.hours)
      )
    return (
        <div className="total-hours">
            <h3 className="test-th">Total Hours Spent: {total_hours}</h3>
        </div>
    )
  }
}