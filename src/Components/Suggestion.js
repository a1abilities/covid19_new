import React, {useEffect, useState, Fragment} from 'react';
import {Link} from 'react-router-dom';


import Header from './Header.js'
import Footer from './Footer.js'



export default function Suggestion(props) {
    const type = props.location.state.risk;
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
  
    return(
        <Fragment>
            <Header />
            
                    <div  class="col-12 col-md-4">
                            <div class="wrapper">
                                <div class="fixed">
                                                                                
                                            <div class="section-heading text-center">
                                                <h2> Suggestion</h2>
                                                <div class="line-shape"></div>
                                            </div>
                                            <section class="section-four" id="details">
                                                <h3>Prevention and precautions - basic protective measures</h3>
                                                <p>
                                                Be aware or educate yourself with the latest updates on the
                                                following websites : 
                                                <a href="https://www.who.int/health-topics/coronavirus" target="_blank" >WHO </a> &
                                                <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert" target="_blank"> Department of Health - Australia</a> &
                                                <a href="https://www.healthdirect.gov.au/" target="_blank"> Health Direct</a>
                                                </p>
                                            
                                                <ul>
                                                <li>
                                                    <h4><img src="/img/wash.svg" width="50px"></img>&nbsp; Wash your hands frequently</h4>
                                                
                                                </li>
                                                <li>
                                                    <h4><img src="/img/soo.png" width="50px"></img>&nbsp;Maintain social distancing</h4>
                                                
                                                </li>
                                                <li>
                                                    <h4><img src="/img/f.svg" width="50px"></img>&nbsp;Avoid touching face </h4>
                                                
                                                </li>
                                                <li>
                                                    <h4><img src="/img/s.svg" width="50px"></img>&nbsp;Practice tespiratory hygiene</h4>
                                                
                                                </li>
                                            
                                                </ul>
                                            </section>
                                       {type === 'LOW' &&
                                                <section class="section-two card section-margin">
                                             
                                                        <div>
                                                        <p>Based on your inputs, A1Abilities advises the following:</p>
                                                    <ol>
                                                        <li>Stay home and take-care of yourself in home isolation</li>
                                                        <li> Prevention and precautions
                                                       
                                                        </li>
                                                        <li>
                                                        Laboratory tests and imaging are optional
                                                        <span class="lite-text"
                                                            >(and as per your physician’s advise)</span
                                                        >
                                                        </li>
                                                        <li>
                                                        Covid-19 testing may be required at your physician’s advise
                                                        </li>
                                                        <li>
                                                        Monitor your symptoms and get medical attention if your situation worsens
                                                        </li>
                                                        <br></br>
                                                        <Link to={{pathname :'/'}}> GO Back </Link>
                                                    </ol>
                                                    </div>
                       
                                                </section>    
                                            }

                                            {type === 'MEDIUM' &&

                                                <section class="section-two card section-margin">
                                                    <p>Based on your inputs, A1Abilities recommendations:</p>
                                                    <ol>
                                                    <li>Consult a physician and start home isolation immediately</li>
                                                    <li>
                                                        Prevention and precautions
                                                        
                                                    </li>
                                                    <li>
                                                        Laboratory tests and imaging may be needed as per your physician’s advise              
                                                    </li>
                                                    <li>
                                                        Covid-19 testing may be required at your physician’s advise
                                                    </li>
                                                    <li>
                                                        Monitor your symptoms and get medical attention if your situation worsens
                                                    </li>
                                                    <br></br>
                                                    <Link to={{pathname :'/'}}> GO Back </Link>
                                                    </ol>
                                                </section>
                                                }

                                            {type === 'HIGH' &&
                                            
                                                <section class="section-two card section-margin">
                                                     <p>Based on your inputs, A1Abilities recommendations:</p>
                                                    <ol>
                                                    <li>Seek immediate medical attention and get yourself tested</li>
                                                    <li>Please visit a physician as there may be a requirement for further care</li>
                                                    <li>Covid-19 testing may be needed at your physician’s advise</li>
                                                    <li>
                                                        Prevention and precautions
                                                       
                                                    </li>
                                                    <li> Laboratory tests and imaging may be needed as per your physician's advise </li>
                                                    <li> Monitor your symptoms and isolate yourself </li>
                                                    <li> You can consult online here to speak to a physician immediately </li>
                                                    
                                                    <br></br>
                                                    <Link to={{pathname :'/'}}> GO Back </Link>
                                                    </ol>
                                                </section>
                                            }
                                             
                                            </div>
                                            
                                          
                                            
                                        </div>
                             </div> 
         <Footer />
    </ Fragment>                
          
    );
}

