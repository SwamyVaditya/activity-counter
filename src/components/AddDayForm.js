import React, { Component } from 'react';
import PropTypes from 'prop-types';


const tahoeResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch", 
	"Heavenly", 
	"Homewood",
	"Kirkwood",
	"Mt. Rose", 
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
]


class Autocomplete extends Component {
	
	get value() {
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputResort"
					   type="text" 
					   list="tahoe-resorts" />
				<datalist id="tahoe-resorts">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {

  let _resort, _date, _powder, _backcountry;
  
  const submit = (e) => {
    e.preventDefault();

    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.checked,
      backcountry: _backcountry.checked
    });

    _resort.value = '';
    _date.value = '';
    _powder.checked = false;
    _backcountry = false;
    
  }

    
  // <input id="resort" type="text" required defaultValue={resort} ref={input => _resort = input} />

  return (
    <form className="add-day-form" onSubmit={submit}>
      <label htmlFor="resort">Resort Name</label>
      <Autocomplete options={ tahoeResorts } 
                    ref={input => _resort = input} />

      <label htmlFor="date">Date</label>
      <input id="date" type="date" required defaultValue={date} ref={input => _date = input} />

      <div>
        <input id="powder" type="checkbox" defaultChecked={powder} ref={input => _powder = input} />
        <label htmlFor="powder">Powder Day</label>
      </div>

      <div>
        <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref={input => _backcountry = input} />
        <label htmlFor="backcountry">Backcountry Day</label>
      </div>

      <button>Add Day</button>
    </form>
  )
}

  
AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
};

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2019-01-31",
  powder: true,
  backcountry: false
}
