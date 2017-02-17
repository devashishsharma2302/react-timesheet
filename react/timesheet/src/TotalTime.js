import React, { Component } from 'react'

export default class TotalTime extends Component {
    render () {
      const { entries } = this.props
      var total_hours = 0;
      for (var i = entries.length - 1; i >= 0; i--) {
        total_hours += parseInt(entries[i].hours)
      }
        return (
            <div className='total-time'>
              <b>Total hours spent: {total_hours} hours</b>
            </div>
        )
    }
}