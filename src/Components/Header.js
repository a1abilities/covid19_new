import React from 'react';
import './header.css';

function Header() {
  return (
    // <header className="header">
    //     <div className="container flx-dir">
    //         <a href="https://a1abilities.co.nz" target="_blank">
    //             <img src="img/A1.png" alt="A1Abilities" class="logo" />
    //         </a>
    //         <div className="header-text"> <h1>COVID-19 RISK SCANNER</h1></div>

    //     </div>
    // </header>
    <header class="header">
    
    <div class="container flx-dir">
        <div class="row">
            <div class="col-md-6 col-lg-12">
              <a href="https://a1abilities.co.nz" target="_blank"><img src="img/A1.png" alt="A1Abilities" class="logo" /></a>
            </div>
            <div className ="col-md-6 col-lg-12">
        			 <h1>COVID-19 RISK SCANNER</h1>      
              </div>     
        </div>
        </div></header>
  );
}

export default Header;


