import React from 'react';
import Dropdown from './Dropdown';
import Select from 'react-select';

const gradients = [
    {value: 'blue', label: 'blue'}, 
    {value: 'seafoam', label: 'seafoam'},
    {value: 'purple', label: 'purple'},
    {value: 'orange', label: 'orange'},
    {value: 'magenta', label: 'magenta'},
    {value: 'bubblegum', label: 'bubblegum'},
    {value:'sherbet', label: 'sherbet'},
    {value: 'violet', label: 'violet'},
    {value: 'forest', label: 'forest'},
    {value: 'dreamy', label: 'dreamy'},
    {value: 'wine', label: 'wine'},
    {value: 'fire', label: 'fire'}
]

class Header extends React.Component {
    state = {
        fontValue: ''
    }

    //Sets font choice for Header text

    handleFontChange = (e) => {
        let fontChoice = e.value;
        this.setState({fontValue: fontChoice});
        WebFont.load({ //loads webfont from Google when selected
            google: {
                families: [fontChoice]
            }
        });
    }

    render(){

        return(
                <header>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerValue} fontFamily={this.state.fontValue}/>
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