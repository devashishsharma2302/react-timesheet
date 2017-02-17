import React, { Component } from 'react'


export default class TimesheetEntries extends Component {
	//to validate the datatypes of props
	static propTypes = {
    entries: React.PropTypes.array,
  }

	render() {
		var t
		const { entries } = this.props
		const rows = entries.map((entry, index) =>
			<tr key={index}>
				<th>{index+1}</th>
				<td>{entry.projectCode}</td>
				<td>{entry.activity}</td>
				<td>{entry.hours}</td>
			</tr>
		)
		
		let hrs = 0
		for(var i=0; i < entries.length; i++){
			hrs += parseInt(entries[i].hours)
		}

		console.log(hrs	)
		return (
		<div className="timesheet-table">
			<table className="table">
			  <thead>
			    <tr>
			      <th>#</th>
			      <th>Project Code</th>
			      <th>Activity</th>
			      <th>Hours</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{(entries.length !== 0)?
						rows
			  	:
			  		<tr>
			  			<th
			  				style={{textAlign: 'center'}}
					 			colSpan="4">No Entries Entered
					 		</th>
					 	</tr>
					}
				
			  </tbody>
			</table>
	<div style={{textAlign: 'center'}}>
			<button type="button">Total Hours spent:{hrs}</button>
			</div>
		</div>
			)
	}
}

