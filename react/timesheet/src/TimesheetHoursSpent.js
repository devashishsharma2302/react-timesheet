import React, { Component } from 'react'
import { PROJECT_CODES, ACTIVITY_TYPES } from './constants'

export default class TimesheetHoursSpent extends Component {
	//to validate the datatypes of props
	static propTypes = {
    entries: React.PropTypes.array,
   
  }
 
	render() {

		const { entries } = this.props
        let hoursspent = 0
        const rows = entries.map((entry, index) =>        
          hoursspent = hoursspent + parseInt(entry.hours)
			
		)
		return (
		<div className="timesheet-hoursspent">
           
			    Total hours spent : {hoursspent}
			
		</div>
			)
	}
}

