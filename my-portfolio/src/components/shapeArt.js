import React from 'react';
import "../index.css";

const ShapeArt = ({ watered }) => {

    console.log("ShapeArt component rendered with watered:", watered);
    return (
        <div>    
             <footer className={`footer invert-on-black ${watered ? 'watered' : ''}`}> 
                 <div className="shape-container">

            {/* Daisy 1 */}     
            <div className={`shape circleA ${watered ? 'colorfulA' : ''}`}></div>    
            <div className={`shape ovalA ${watered ? 'colorfulB' : ''}`}></div> 
            <div className={`shape ovalB ${watered ? 'colorfulC' : ''}`}></div>   
            <div className={`shape ovalC ${watered ? 'colorfulD' : ''}`}></div>      
            <div className={`shape ovalD ${watered ? 'colorfulE' : ''}`}></div>       
            <div className={`shape ovalE ${watered ? 'colorfulF' : ''}`}></div>   
            <div className={`shape rectangleA ${watered ? 'colorfulG' : ''}`}></div> 

            {/* Daisy 1 */}    
            <div className={`shape circleB ${watered ? 'colorfulH' : ''}`}></div>    
            <div className={`shape ovalF ${watered ? 'colorfulI' : ''}`}></div> 
            <div className={`shape ovalG ${watered ? 'colorfulJ' : ''}`}></div>   
            <div className={`shape ovalH ${watered ? 'colorfulK' : ''}`}></div>      
            <div className={`shape ovalI ${watered ? 'colorfulL' : ''}`}></div>       
            <div className={`shape ovalJ ${watered ? 'colorfulM' : ''}`}></div>   
            <div className={`shape rectangleB ${watered ? 'colorfulN' : ''}`}></div> 

             {/* Tulip 1 */}  
             <div className={`shape rounded-squareA ${watered ? 'colorfulO' : ''}`}></div>   
             <div className={`shape rounded-squareB ${watered ? 'colorfulP' : ''}`}></div>  
             <div className={`shape rectangleC ${watered ? 'colorfulQ' : ''}`}></div>    

              {/* Tulip 2 */}  
             <div className={`shape rounded-squareC ${watered ? 'colorfulR' : ''}`}></div>   
             <div className={`shape rounded-squareD ${watered ? 'colorfulS' : ''}`}></div>  
             <div className={`shape rectangleD ${watered ? 'colorfulT' : ''}`}></div>      

             
              {/* Tulip 3 */}  
             <div className={`shape rounded-squareE ${watered ? 'colorfulU' : ''}`}></div>   
             <div className={`shape rounded-squareF ${watered ? 'colorfulV' : ''}`}></div>  
             <div className={`shape rectangleE ${watered ? 'colorfulW' : ''}`}></div>          
        </div>
        </footer>
        </div>
    );
}

export default ShapeArt;
