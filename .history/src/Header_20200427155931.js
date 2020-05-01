import React from 'react';
import Dropdown from './Dropdown';
import StyledDropdown from './StyledDropdown';


class Header extends React.Component {
    state = { 
        availableGradients: [
            'blue', 
            'seafoam', 
            'purple', 
            'orange', 
            'magenta', 
            'bubblegum', 
            'sherbet', 
            'violet',
            'forest',
            'dreamy',
            'wine', 
            'fire'
        ]
    }

    render(){

        return(
                <header>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerValue}/>
                        <Dropdown `
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;>
                        <StyledDropdown>
                    </div>
                    <form>
                        <div>
                            <label>Choose a Background Gradient:</label>
                            <select value={this.props.value} onChange={this.props.onGradientChange}>
                                {this.state.availableGradients.map((myGradient) => <option key={myGradient} value={myGradient}> {myGradient} </option>)}
                            </select>
                        </div>
                    </form>
                </header>
        );
    }
}

export default Header;