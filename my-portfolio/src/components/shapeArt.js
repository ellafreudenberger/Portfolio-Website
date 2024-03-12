import React from 'react';
import "../index.css";

const ShapeArt = ({ watered, singlePageMode}) => {

    console.log("ShapeArt component rendered with watered:", watered);
   
     // Determine the container element based on singlePageMode
     const ContainerComponent = singlePageMode ? 'div' : 'footer';

     // Define the class name for the component based on conditions
     const singleMargin = `footer invert-on-black ${watered ? 'watered' : ''}`;

      // Define the style for the div with margin-bottom
      const divStyle = singlePageMode 
      ? { marginTop: '-700px' }
      : { marginTop: '-700px' }; 

    return (
        <div>    
             <ContainerComponent className={singleMargin}>
                 <div className="shape-container">

            {/* Daisy 1 */}     
            <div className={`shape circleA ${watered ? 'colorfulA' : ''}`} style={divStyle}></div>
            <div className={`shape ovalA ${watered ? 'colorfulB' : ''}`} style={divStyle}></div> 
            <div className={`shape ovalB ${watered ? 'colorfulC' : ''}`} style={divStyle}></div>   
            <div className={`shape ovalC ${watered ? 'colorfulD' : ''}`} style={divStyle}></div>      
            <div className={`shape ovalD ${watered ? 'colorfulE' : ''}`} style={divStyle}></div>       
            <div className={`shape ovalE ${watered ? 'colorfulF' : ''}`} style={divStyle}></div>  
            <div className={`shape rectangleA ${watered ? 'colorfulG' : ''}`} style={divStyle}></div>

            {/* Daisy 1 */}    
            <div className={`shape circleB ${watered ? 'colorfulH' : ''}`} style={divStyle}></div>   
            <div className={`shape ovalF ${watered ? 'colorfulI' : ''}`} style={divStyle}></div>
            <div className={`shape ovalG ${watered ? 'colorfulJ' : ''}`} style={divStyle}></div>
            <div className={`shape ovalH ${watered ? 'colorfulK' : ''}`} style={divStyle}></div>     
            <div className={`shape ovalI ${watered ? 'colorfulL' : ''}`} style={divStyle}></div>     
            <div className={`shape ovalJ ${watered ? 'colorfulM' : ''}`} style={divStyle}></div>
            <div className={`shape rectangleB ${watered ? 'colorfulN' : ''}`} style={divStyle}></div>

             {/* Tulip 1 */}  
             <div className={`shape rounded-squareA ${watered ? 'colorfulO' : ''}`} style={divStyle}></div>   
             <div className={`shape rounded-squareB ${watered ? 'colorfulP' : ''}`} style={divStyle}></div>
             <div className={`shape rectangleC ${watered ? 'colorfulQ' : ''}`} style={divStyle}></div> 

              {/* Tulip 2 */}  
             <div className={`shape rounded-squareC ${watered ? 'colorfulR' : ''}`} style={divStyle}></div>  
             <div className={`shape rounded-squareD ${watered ? 'colorfulS' : ''}`} style={divStyle}></div> 
             <div className={`shape rectangleD ${watered ? 'colorfulT' : ''}`} style={divStyle}></div> 

              {/* Tulip 3 */}  
             <div className={`shape rounded-squareE ${watered ? 'colorfulU' : ''}`} style={divStyle}></div>  
             <div className={`shape rounded-squareF ${watered ? 'colorfulV' : ''}`} style={divStyle}></div> 
             <div className={`shape rectangleE ${watered ? 'colorfulW' : ''}`} style={divStyle}></div>     
        </div>
        </ContainerComponent>
        </div>
    );
}

export default ShapeArt;