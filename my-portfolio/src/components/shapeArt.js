import React from 'react';
import "../index.css"

const ShapeArt = () => {
    return (
        <div>    
             <footer className="footer"> 
                 <div className="shape-container">

            {/* Daisy 1 */}     
            <div className="shape circleA"></div>    
            <div className="shape ovalA"></div> 
            <div className="shape ovalB"></div>   
            <div className="shape ovalC"></div>      
            <div className="shape ovalD"></div>       
            <div className="shape ovalE"></div>   
            <div className="shape rectangleA"></div> 

            {/* Daisy 1 */}    
            <div className="shape circleB"></div>    
            <div className="shape ovalF"></div> 
            <div className="shape ovalG"></div>   
            <div className="shape ovalH"></div>      
            <div className="shape ovalI"></div>       
            <div className="shape ovalJ"></div>   
            <div className="shape rectangleB"></div> 

             {/* Tulip 1 */}  
             <div className=" shape rounded-squareA"></div>   
             <div className=" shape rounded-squareB"></div>  
             <div className="shape rectangleC"></div>    

              {/* Tulip 2 */}  
             <div className=" shape rounded-squareC"></div>   
             <div className=" shape rounded-squareD"></div>  
             <div className="shape rectangleD"></div>      

             
              {/* Tulip 3 */}  
             <div className=" shape rounded-squareE"></div>   
             <div className=" shape rounded-squareF"></div>  
             <div className="shape rectangleE"></div>          
        </div>
        </footer>
        </div>
    );
}

export default ShapeArt;