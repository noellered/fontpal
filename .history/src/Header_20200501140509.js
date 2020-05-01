import React from 'react';
import Dropdown from './Dropdown';
import Select from 'react-select';


const gradients = [
    {value: 'blue', label: 'Blue'}, 
    {value: 'seafoam', label: 'Seafoam'},
    {value: 'purple', label: 'Purple'},
    {value: 'orange', label: 'Orange'},
    {value: 'magenta', label: 'Magenta'},
    {value: 'bubblegum', label: 'Bubblegum'},
    {value:'sherbet', label: 'sherbet'},
    {value: 'violet', label: 'violet'},
    {value: 'forest', label: 'forest'},
    {value: 'dreamy', label: 'dreamy'},
    {value: 'wine', label: 'wine'},
    {value: 'fire', label: 'fire'}
]

class Header extends React.Component {


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
                            <Select value={this.props.value} onChange={this.props.onGradientChange} options={gradients} />
                        </div>
                    </form>
                </header>
        );
    }
}

export default Header;