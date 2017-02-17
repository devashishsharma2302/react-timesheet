import React from 'react';
import { shallow} from 'enzyme';
import Timesheet from '../src/Timesheet';
import TimesheetForm from '../src/TimesheetForm';
import TimesheetEntries from '../src/TimesheetEntries';
import TotalHours from  '../src/TotalHours';

describe('Tests for Timesheet App component', () => {
  const component = shallow(<Timesheet/>);
  let entryAddition =  component.instance().onEntryAddition
  const wrapper = shallow(<TimesheetForm/>);
  const wrapper2 = shallow(<TotalHours/>);

  it('Timesheet App state intialised.', () => {
      expect(component.state('entries').length).toEqual(0)
    });

  it('Timesheet Form on Change handler', () => {
      wrapper.instance().handleOnChange('projectCode', 'Honeywell');
      wrapper.instance().handleOnChange('hours', 10);
      wrapper.instance().handleOnChange('activity', 'dev');
      expect(wrapper.state('currentEntry')).toEqual({projectCode: 'Honeywell', hours: 10, activity: 'dev'})
    });  

  it('Test Entry added', () => {
      wrapper.instance().triggerEntryAddition({preventDefault:()=>null});
      expect(component.state('entries').length).toEqual(1)
    });

  it('Total Hours Updated', () => {
      expect(wrapper2.find('.test-th')).toEqual('Total Hours Spent: 10');
  });


})