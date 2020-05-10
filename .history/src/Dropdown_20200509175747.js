import React, {Component} from 'react';
import Select from 'react-select';


class Dropdown extends Component {

    render(){

        return(
            <form className="textSelectors">
              <Select placeholder="Choose a Family..." className="selector" value={this.props.value} onChange={this.props.onChange} options={this.props.options} styles={this.props.styles} menuIsOpen={this.props.open} formatGroupLabel={this.props.formatGroupLabel}
              ref={ref}
              options={options}
              value={value}onMenuOpen={() => {
                setTimeout(() => {
                  ref.current.select.scrollToFocusedOptionOnUpdate = true;
                  ref.current.select.setState({
                    focusedOption: options.find(option => option.value === value)
                  });
                }, 0);
              }}/>
            </form>
  
        );
    }
}

export default Dropdown;