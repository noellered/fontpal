import React, {Component} from 'react';

class Dropdown extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      fonts: [],
    }

  }


//Fetches Google Fonts API and sets fonts state to array of all google font family names
  //can later set to object to access and sort by category (i.e. serif)
  componentDidMount(){
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDSHr-iLuL_U335Y437hDvqNFSuv1jAkSI')
      .then(res => {
          return res.json();
      }).then((JSON) => {
        this.setState({fonts: JSON.items.map(item => item.family)});
      })
  }

    render(){
        let textType = this.props.textType;
        return(    
            <form>
                    <label>Choose a {textType} Family:</label>
                    <select value={this.props.value} onChange={this.props.onChange}>
                        {this.state.fonts.map((family) => <option key={family} value={family}> {family} </option>)}
                    </select>
                    
            </form>
        );
    }
}

export default Dropdown;