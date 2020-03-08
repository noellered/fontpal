import React from 'react';
import Dropdown from './Dropdown';


class Header extends React.Component {
    

    render(){

        return(
                <header>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerValue}/>
                        <Dropdown textType="Body" onChange={this.props.onBodyChange} value={this.props.bodyValue} />
                    </div>
                    <button onClick={this.props.onButtonClick}>Random Gradient</button>
                </header>
        );
    }
}

export default Header;