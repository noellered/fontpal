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
    {value:'sherbet', label: 'Sherbet'},
    {value: 'violet', label: 'Violet'},
    {value: 'forest', label: 'Forest'},
    {value: 'dreamy', label: 'Dreamy'},
    {value: 'wine', label: 'Wine'},
    {value: 'fire', label: 'Fire'}
]

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          fonts: [],
          categories: [],
          sansSerif: [],
          serif: [],
          handwriting: [],
          display: [],
          monospace: [],
          limit: 100
        }

      }
    
    //Fetches Google Fonts by popularity and sets fonts state to array of all google font family names - limited to 100 by default
      componentDidMount(){
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyDSHr-iLuL_U335Y437hDvqNFSuv1jAkSI')
          .then(res => {
              return res.json();
          }).then((JSON) => {
            this.setState({
              fonts: JSON.items.map(item => item.family),
              categories: JSON.items.map(item => item.category)
            });
    
            console.log(this.state.fonts);
            const sansSerifFonts = [];
            const serifFonts = [];
            const handwritingFonts = [];
            const displayFonts = [];
            const monospaceFonts = [];
    
            //iterate through fonts array and categorize fonts by type (limited to 100 by default)
            for(var i=0; i < this.state.limit; i++){
              if(this.state.categories[i] === "sans-serif"){
                sansSerifFonts.push(this.state.fonts[i]);
              } else if(this.state.categories[i] === "serif"){
                serifFonts.push(this.state.fonts[i]);
              } else if(this.state.categories[i] === "handwriting"){
                handwritingFonts.push(this.state.fonts[i]);
              } else if(this.state.categories[i] === "display"){
                displayFonts.push(this.state.fonts[i]);
              } else if(this.state.categories[i] === "monospace"){
                monospaceFonts.push(this.state.fonts[i]);
              }
            }
            for(let i=0; i < this.state.limit; i++){
              WebFont.load({ //loads webfont from Google 
                google: {
                    families: [this.state.fonts[i]]
                }
            });
            }
    
            this.setState({
              sansSerif: sansSerifFonts,
              serif: serifFonts,
              handwriting: handwritingFonts,
              display: displayFonts,
              monospace: monospaceFonts
            })
          })
      }

    render(){

        return(
                <header>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerLabel}/>
                        <Dropdown textType="Body" onChange={this.props.onBodyChange} value={this.props.bodyLabel} />
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