import React from 'react';
import Dropdown from './Dropdown';


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
                <div>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerValue}/>
                        <Dropdown textType="Body" onChange={this.props.onBodyChange} value={this.props.bodyValue} />
                        <form className=" text-selectors">
                            <label>Choose a Background Gradient:</label>
                            <select value={this.props.value} onChange={this.props.onGradientChange}>
                                {this.state.availableGradients.map((myGradient) => <option key={myGradient} value={myGradient}> {myGradient} </option>)}
                            </select>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Header;