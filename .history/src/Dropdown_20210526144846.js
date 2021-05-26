import React, {Component} from 'react';
import Select from 'react-select';


const Dropdown = () => {

        return(
            <form className="textSelectors">
              <Select 
                placeholder="Choose a Family..." 
                className="selector" 
                value={this.props.value} 
                onChange={this.props.onChange} 
                options={this.props.options} 
                styles={this.props.styles} 
                menuIsOpen={this.props.open}
                formatGroupLabel={this.props.formatGroupLabel}
              />
            </form>
  
        );
}

export default Dropdown;