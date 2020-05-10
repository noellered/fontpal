import React, {Component} from 'react';
import Select from 'react-select';


class Dropdown extends Component {
    determineIndex(options, choice) {
        var index = 0;
        options.forEach((option, i) => {
          if (option.value == choice.value) {
            index = i;
          }
        });
        return index;
      }

    render(){
        var index = this.determineIndex(this.options, this.state.value);
        return(
            <form className="textSelectors">
              <Select 
                placeholder="Choose a Family..." 
                className="selector" 
                value={this.options[index]}
                onChange={this.props.onChange} 
                options={this.props.options} 
                styles={this.props.styles} 
                menuIsOpen={this.props.open}
                formatGroupLabel={this.props.formatGroupLabel}
              />
            </form>
  
        );
    }
}

export default Dropdown;