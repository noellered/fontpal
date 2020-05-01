import React from 'react';
import Dropdown from './Dropdown';
import Select from 'react-select';

const gradients = [
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

class Header extends React.Component {
    // state = { 
    //     availableGradients: [
    //         'blue', 
    //         'seafoam', 
    //         'purple', 
    //         'orange', 
    //         'magenta', 
    //         'bubblegum', 
    //         'sherbet', 
    //         'violet',
    //         'forest',
    //         'dreamy',
    //         'wine', 
    //         'fire'
    //     ]
    // }

    

    render(){

        return(
                <header>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerValue}/>
                        <Dropdown textType="Body" onChange={this.props.onBodyChange} value={this.props.bodyValue} />
                    </div>
                    <form className="form-container">
                        <div>
                            <label>Choose a Background Gradient:</label>
                            <Select value={this.props.value} onChange={this.props.onGradientChange} options={gradients}>
                                {/* {this.state.availableGradients.map((myGradient) => <option key={myGradient} value={myGradient}> {myGradient} </option>)} */}
                            </Select>
                        </div>
                    </form>
                </header>
        );
    }
}

export default Header;