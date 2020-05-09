import React from 'react';
import Dropdown from './Dropdown';
import Select from 'react-select';
import WebFont from 'webfontloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'


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

const weights = [
  {value: '100', label: 'Thin'},
  {value: '300', label: 'Light'},
  {value: '400', label: 'Regular'},
  {value: '500', label: 'Medium'},
  {value: '700', label: 'Bold'},
  {value: '900', label: 'Black'}
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
          limit: 150,
          showSSInfo: true,
          showSerifInfo: true,
          showDisplayInfo: true,
          showHandwritingInfo: true,
          showMonoInfo: true
        }
      }
      
    hideItems = (e) => {
        e.preventDefault();
        console.log(`you clicked ${e.target.value} button!`);
        if(e.target.value === "Sans-Serif"){
            this.setState(prevState => ({showSSInfo: !prevState.showSSInfo}));
        } else if(e.target.value === "Serif"){
            this.setState(prevState => ({showSerifInfo: !prevState.showSerifInfo}));
        } else if (e.target.value === "Display"){
            this.setState(prevState => ({showDisplayInfo: !prevState.showDisplayInfo}));
        } else if (e.target.value === "Handwriting"){
            this.setState(prevState => ({showHandwritingInfo: !prevState.showHandwritingInfo}));
        }
        else if (e.target.value === "Monospace"){
            this.setState(prevState => ({showMonoInfo: !prevState.showMonoInfo}));
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
                    families: [`${this.state.fonts[i]}:100,300,400,500,700,900`]
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
          console.log(this.state.fonts);
      }

      

    render(){
        const customStyles = {
            option: (styles, { data }) => {
              return {
                  ...styles,
                  fontFamily: data.fontname,
                  outline: 'none',
                  display: data.display,
                  color: 'black'
              };
          }
        }

        const groupStyles = {
            display: 'flex',
            justifyContent: 'space-between'
          };

        const formatGroupLabel = data => (
            <div>  
                <button style={groupStyles} onClick={this.hideItems} value={data.label}>
                    {data.label}
                </button>
            </div>
        );

        const sansSerifFonts = this.state.sansSerif.map(family => ({value: family, label: family, fontname: family, display: this.state.showSSInfo ? 'block' : 'none'}));
        const serifFonts = this.state.serif.map(family => ({value: family, label: family, fontname: family, display: this.state.showSerifInfo ? 'block' : 'none'}));
        const displayFonts = this.state.display.map(family => ({value: family, label: family, fontname: family, display: this.state.showDisplayInfo ? 'block' : 'none'}));
        const handwritingFonts = this.state.handwriting.map(family => ({value: family, label: family, fontname: family, display: this.state.showHandwritingInfo ? 'block' : 'none'}));
        const monospaceFonts = this.state.monospace.map(family => ({value: family, label: family, fontname: family, display: this.state.showMonoInfo ? 'block' : 'none'}));
        const groupedOptions = [
          {
            label: 'Sans-Serif',
            options: sansSerifFonts
          },
          {
            label: 'Serif',
            options: serifFonts
          },
          {
            label: 'Display',
            options: displayFonts
          },
          {
            label: 'Handwriting',
            options: handwritingFonts
          },
          {
            label: 'Monospace',
            options: monospaceFonts
          }
        ];
        return(
                <header>
                    <div className="form-container">
                        <Dropdown textType="Header" onChange={this.props.onHeaderChange} value={this.props.headerLabel} options={groupedOptions} styles={customStyles} formatGroupLabel={formatGroupLabel}/>
                        <br/>
                        <Select placeholder="Choose a Weight..." key="headerWeight" className="selector" value={this.props.value} onChange={this.props.onHeaderWeightChange} options={weights} styles={customStyles}/>
                        <label>Size:</label>
                        <input 
                            type="range"
                            className="slider"
                            min={1}
                            max={5}
                            step={.05}
                            value={this.props.headerSize}
                            defaultValue={2.5}
                            onChange={this.props.onHeaderSizeChange}
                        />
                    </div>
                    <div className="form-container">
                        <div>
                          <Dropdown textType="Body" onChange={this.props.onBodyChange} value={this.props.bodyLabel} options={groupedOptions} styles={customStyles} formatGroupLabel={formatGroupLabel}/>
                          <br/>
                          <Select placeholder="Choose a Weight..." key="bodyWeight" className="selector" value={this.props.value} onChange={this.props.onBodyWeightChange} options={weights} styles={customStyles} />
                          <label>Size:</label>
                          <input 
                              type="range"
                              className="slider"
                              min={1}
                              max={5}
                              step={.05}
                              value={this.props.bodySize}
                              defaultValue={2.5}
                              onChange={this.props.onHeaderSizeChange}
                          />
                        </div>
                    </div>
                    <div className="form-container">
                      <label>Background:</label>
                      <Select placeholder="Choose a Gradient..." className="selector" value={this.props.value} onChange={this.props.onGradientChange} options={gradients} styles={customStyles}/>
                    </div>
                    <div className="form-container">
                    <label>Line Height:</label>
                      <input 
                          type="range"
                          className="slider"
                          min={1}
                          max={2.5}
                          step={.05}
                          value={this.props.lineHeight}
                          defaultValue={1.5}
                          onChange={this.props.onLineHeightChange}
                      />
                      
                    </div>
                </header>
        );
    }
}

export default Header;