import React, {Component} from 'react';
import Select from 'react-select';


class Dropdown extends Component {

    render(){
        const onMenuOpen = useCallback(() => {
            // Calling an initial prop if it has been passed
            onMenuOpenProp?.()
            if (!isMulti) {
              // Getting a selected option
              const option = selectRef.current?.select?.state?.selectValue?.[0]
              if (option) {
                setTimeout(() => {
                  // Setting a focused value as a selected one
                  // References:
                  // - https://github.com/JedWatson/react-select/blob/master/packages/react-select/src/Select.js#L503
                  // - https://github.com/JedWatson/react-select/blob/master/packages/react-select/src/Select.js#L802
                  if (selectRef.current?.select) {
                    const selectedIndex = selectRef.current.select.state.menuOptions.focusable.indexOf(option)
                    if (selectedIndex >= 0) {
                      // Focusing selected option only if it exists
                      selectRef.current.select.scrollToFocusedOptionOnUpdate = true
                      selectRef.current.select.inputIsHiddenAfterUpdate = false
                      selectRef.current.select.setState({
                        focusedValue: null,
                        focusedOption: option,
                      })
                    }
                  }
                })
              }
            }
          }, [selectRef.current, onMenuOpenProp, isMulti])
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
                onMenuOpen
                formatGroupLabel={this.props.formatGroupLabel}
              />
            </form>
  
        );
    }
}

export default Dropdown;