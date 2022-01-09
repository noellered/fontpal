import React, {useEffect, useRef} from 'react';
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





const Dropdown = ({defaultValue, value, onChange, options, styles, formatGroupLabel}) => {
        return(
            <form className="textSelectors">
              <Select 
                defaultValue={defaultValue} 
                className="selector" 
                onChange={onChange} 
                options={options} 
                styles={styles} 
                formatGroupLabel={formatGroupLabel}
                components={{Option}}
              />
            </form>
  
        );
}

export default Dropdown;