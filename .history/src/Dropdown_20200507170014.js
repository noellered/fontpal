import React, {Component} from 'react';
import Select from 'react-select';


class Dropdown extends Component {

    render(){

        return(
            <form className="textSelectors">
              <label>Choose a {this.props.textType} Family:</label>
              <Select className="" value={this.props.value} onChange={this.props.onChange} options={this.props.options} styles={this.props.styles} menuIsOpen={this.props.open} formatGroupLabel={this.props.formatGroupLabel}/>
            </form>
  
        );
    }
}

export default Dropdown;