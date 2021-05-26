import React, {Component, useEffect, useRef} from 'react';
import Select, { components } from 'react-select';


const Option = (props) => {
  const ref = useRef();

  useEffect(() => {
      props.isSelected && ref.current.scrollIntoView();
  }, [props.isSelected]);

  

  return (
      <components.Option {...props} innerRef={ref} />
  );
};





const Dropdown = () => {
    render(){
        return(
            <form className="textSelectors">
              <Select 
                defaultValue={this.props.defaultValue} 
                className="selector" 
                value={this.props.value} 
                onChange={this.props.onChange} 
                options={this.props.options} 
                styles={this.props.styles} 
                formatGroupLabel={this.props.formatGroupLabel}
                components={{Option}}
              />
            </form>
  
        );
    }
}

export default Dropdown;