import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Select from 'react-select';
import WebFont from 'webfontloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import FormatLineSpacingRoundedIcon from '@material-ui/icons/FormatLineSpacingRounded';



const gradients = [
    {value: 'blue', label: 'Blue'}, 
    {value: 'seafoam', label: 'Seafoam'},
    {value: 'purple', label: 'Purple'},
    {value: 'orange', label: 'Orange'},
    {value: 'magenta', label: 'Magenta'},
    {value: 'bubblegum', label: 'Bubblegum'},
    {value: 'sherbet', label: 'Sherbet'},
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

const Header = ({
  onHeaderChange,
  onHeaderWeightChange,
  onBodyWeightChange,
  headerValue,
  headerSize,
  lineHeight,
  onBodyChange, 
  bodyValue,
  gradientValue,
  headerFontWeight,
  bodyFontWeight,
  onGradientChange,
  onLineHeightChange,
  onHeaderSizeChange,
  bodySize,
  onBodySizeChange,
}) => {

  const [fonts, setFonts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sansSerif, setSansSerif] = useState([]);
  const [serif, setSerif] = useState([]);
  const [handwriting, setHandwriting] = useState([]);
  const [display, setDisplay] = useState([]);
  const [monospace, setMonospace] = useState([]);
  const [limit, setLimit] = useState(150);
  const [showSSInfo, setShowSSInfo] = useState(true);
  const [showSerifInfo, setShowSerifInfo] = useState(true);
  const [showDisplayInfo, setShowDisplayInfo] = useState(true);
  const [showHandwritingInfo, setShowHandwritingInfo] = useState(true);
  const [showMonoInfo, setShowMonoInfo] = useState(true);

      
    const hideItems = (e) => {
        e.preventDefault();
        if(e.target.value === "Sans-Serif"){
          setShowSSInfo(!showSSInfo);
        } else if(e.target.value === "Serif"){
          setShowSerifInfo(!showSerifInfo);
        } else if (e.target.value === "Display"){
          setShowDisplayInfo(!showDisplayInfo);
        } else if (e.target.value === "Handwriting"){
          setShowHandwritingInfo(!showHandwritingInfo);
        }
        else if (e.target.value === "Monospace"){
          setShowMonoInfo(!showMonoInfo);
        }
        
    }
    
    //Fetches Google Fonts by popularity and sets fonts state to array of all google font family names - limited to 100 by default
    useEffect(() => {
      fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyDSHr-iLuL_U335Y437hDvqNFSuv1jAkSI')
        .then(res => {
            return res.json();
        }).then((JSON) => {
          let fontArr = JSON.items.map(item => item.family);
          let categoryArr = JSON.items.map(item => item.category);
          setFonts(fontArr)
          setCategories(categoryArr)


          const sansSerifFonts = [];
          const serifFonts = [];
          const handwritingFonts = [];
          const displayFonts = [];
          const monospaceFonts = [];
  
          //iterate through fonts array and categorize fonts by type (limited to 100 by default)
          for(var i=0; i < limit; i++){
            if(categories[i] === "sans-serif"){
              sansSerifFonts.push(fonts[i]);
            } else if(categories[i] === "serif"){
              serifFonts.push(fonts[i]);
            } else if(categories[i] === "handwriting"){
              handwritingFonts.push(fonts[i]);
            } else if(categories[i] === "display"){
              displayFonts.push(fonts[i]);
            } else if(categories[i] === "monospace"){
              monospaceFonts.push(fonts[i]);
            }
          }

          for(let i=0; i < limit; i++){
            WebFont.load({ //loads webfont from Google 
              google: {
                  families: [`${fonts[i]}:100,300,400,500,700,900`]
              }
            });
          }
          setSansSerif(sansSerifFonts);
          setSerif(serifFonts);
          setHandwriting(handwritingFonts);
          setDisplay(displayFonts);
          setMonospace(monospaceFonts);
        })
    }, [categories, fonts, limit]);



        const customStyles = {
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return {
                  ...styles,
                  fontFamily: data.fontname,
                  outline: 'none',
                  display: data.display,
                  color: 'black',
                  backgroundColor: isSelected ? 'rgb(194, 226, 255)' :isFocused ? 'rgb(217, 237, 255)' : null
              };
          },
          control: (provided) => ({
            ...provided,
            border: 'none',
            fontSize: '.8rem !important',
            minHeight: '20px'
          })
        }

        const groupStyles = {
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '10px'
          };

        const formatGroupLabel = data => (
            <div>  
                <button style={groupStyles} onClick={hideItems} value={data.label}>
                    {data.label}
                </button>
            </div>
        );
        
      

        const sansSerifFonts = sansSerif.map(family => ({value: family, label: family, fontname: family, display: showSSInfo ? 'block' : 'none'}));
        const serifFonts = serif.map(family => ({value: family, label: family, fontname: family, display: showSerifInfo ? 'block' : 'none'}));
        const displayFonts = display.map(family => ({value: family, label: family, fontname: family, display: showDisplayInfo ? 'block' : 'none'}));
        const handwritingFonts = handwriting.map(family => ({value: family, label: family, fontname: family, display: showHandwritingInfo ? 'block' : 'none'}));
        const monospaceFonts = monospace.map(family => ({value: family, label: family, fontname: family, display: showMonoInfo ? 'block' : 'none'}));
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
                      <label>Header:</label>
                        <Dropdown defaultValue={{value: headerValue, label: headerValue}}  onChange={onHeaderChange} options={groupedOptions} styles={customStyles} formatGroupLabel={formatGroupLabel}/>
                        <span style={{display: 'block', margin: '6px'}}/>
                        <Select defaultValue={{value: headerFontWeight, label: 'Bold'}} key="headerWeight" className="selector" onChange={onHeaderWeightChange} options={weights} styles={customStyles}/>
                        <div className="font-slider">
                          <FontAwesomeIcon icon={faFont} size="xs" style={{display: 'inline-block', paddingTop: '8px', color: 'white'}}/>
                          <FontAwesomeIcon icon={faFont} size="lg" style={{display: 'inline-block', paddingLeft: '3px', paddingRight: '10px', color: 'white'}}/>
                          <input style={{display: 'inline-block', width: '80%'}}
                              type="range"
                              className="slider"
                              min={1}
                              max={5}
                              step={.05}
                              value={headerSize}
                              defaultValue={3}
                              onChange={onHeaderSizeChange}
                          />
                        </div>
                    </div>
                    <div className="form-container">
                      <label>Body:</label>
                          <Dropdown defaultValue={{value: bodyValue, label: bodyValue}} onChange={onBodyChange} options={groupedOptions} styles={customStyles} formatGroupLabel={formatGroupLabel}/>
                          <span style={{display: 'block', margin: '6px'}}/>
                          <Select defaultValue={{value: bodyFontWeight, label: 'Light'}} key="bodyWeight" className="selector" onChange={onBodyWeightChange} options={weights} styles={customStyles} />
                          <div className="font-slider">
                            <FontAwesomeIcon icon={faFont} size="xs" style={{display: 'inline-block', paddingTop: '8px', color: 'white'}}/>
                            <FontAwesomeIcon icon={faFont} size="lg" style={{display: 'inline-block', paddingLeft: '3px', paddingRight: '10px', color: 'white'}}/>
                            <input style={{display: 'inline-block', width: '80%'}}
                                type="range"
                                className="slider"
                                min={1}
                                max={5}
                                step={.05}
                                value={bodySize}
                                defaultValue={1.5}
                                onChange={onBodySizeChange}
                            />
                        </div>
                        <div className="font-slider">
                          <FormatLineSpacingRoundedIcon style={{display: 'inline-block', paddingRight: '15px', color: 'white'}}/>
                          <input style={{width: '90%'}}
                              type="range"
                              className="slider"
                              min={1}
                              max={2.5}
                              step={.05}
                              value={lineHeight}
                              defaultValue={1.5}
                              onChange={onLineHeightChange}
                          />
                      </div>
                    </div>
                    <div className="form-container">
                      <label>Background:</label>
                      <Select defaultValue={{value: gradientValue, label: 'Blue'}} className="selector" onChange={onGradientChange} options={gradients} styles={customStyles}/>
                    </div>
                </header>
        );
}

export default Header;