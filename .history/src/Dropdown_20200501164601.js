import React, {Component} from 'react';
import Select from 'react-select';


class Dropdown extends Component {

    render(){

        return(
            <form className="textSelectors">
              <label>Choose a {this.props.textType} Family:</label>
              <Select value={this.props.value} onChange={this.props.onChange} options={this.props.options} styles={this.props.styles} menuIsOpen=/>
            </form>
  
        );
    }
}

export default Dropdown;