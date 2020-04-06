import React, {useEffect, useState} from 'react';

export default function Body() {
    
    const [CheckList, setCheckList] = useState([
        {id: 1, selected : '', point: 1, question : 'Do you have cough?', icon: 'fas fa-head-side-cough'},
        {id: 2, selected : '', point: 1, question : 'Do you have cold?', icon: 'ti-pulse'},
        {id: 3, selected : '', point: 1, question : 'Are you having diarrhea?', icon: 'fas fa-lungs-virus'},
        {id: 4, selected : '', point: 1, question : 'Do you have sore throat?', icon: 'fas fa-diagnoses'},
        {id: 5, selected : '', point: 1, question : 'Are you experiencing MYALGIA or body aches?', icon: 'fas fa-brain'},
        {id: 6, selected : '', point: 1, question : 'Do you have a headache?', icon: 'fas fa-procedures'},
        {id: 7, selected : '', point: 1, question : 'Do you have fever?', icon: 'fas fa-lungs'},
        {id: 8, selected : '', point: 2, question : 'Are you having difficulty in breathing?', icon: 'material-icons'},
        {id: 9, selected : '', point: 2, question : 'Are you experiencing fatigue?', icon: 'fas fa-plane'},
        {id: 10, selected : '', point: 3, question : 'Do you have you traveled recently during the past 14 days?', icon: 'fas fa-head-side-mask'},
        {id: 11, selected : '', point: 3, question : 'Do you have travel history to a COVID-19 INFECTED AREA?', icon: 'ti-mobile'},
        {id: 12, selected : '', point: 3, question : 'Do you have direct contact or is taking care of a positive COVID-19 PATIENT?', icon: 'ti-mobile'},
    ]);

    const [score, setScore] = useState(0);

    const handleResult = async(data, checkedValue) => {
        try{
            const arr =  CheckList.map((ele) => {
                if(ele.id === data.id) {
                    ele.selected = checkedValue
                }
                return ele
            })
            setCheckList(arr)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        let score =  0;
        CheckList.map(data => {
            if(data.selected === 1){
                score = score + data.point;
            }
        })
        setScore(score);
    },[CheckList])

    console.log(score)
    return(
        <section class="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
            <div class="container">           
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="row">
                            {CheckList.map((data,index) => {
                                return(
                                    <div class="col-12 col-md-4">
                                        <div class="single-special text-center wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="single-icon">
                                                <i class={data.icon} aria-hidden="true"></i>
                                            </div>
                                            <h4>{data.question}</h4>
                                            <div class="app-download-area">
                                                <div class="app-download-btn">
                                                    <a onClick={() => {handleResult(data, 1)}} className={data.selected === 1  ? 'selected-btn' : ''}><p> Yes</p></a>
                                                </div>
                                                <div class="app-download-btn">
                                                    <a onClick={() => {handleResult(data, 0)}} className={data.selected === 0 ? 'selected-btn' : ''}> <p> No</p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>                
                    </div>
                <div class="col-12 col-md-4" style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
                    <div class="row">
                        {/* <div class="col-12">
                            <div class="section-heading text-center">
                                <h2>Result</h2>
                                <div class="line-shape"></div>
                            </div>
                        </div> */}
                        <main>
                            <div class="container">
                            <div class="section-heading text-center">
                                <h2>Result</h2>
                                <div class="line-shape"></div>
                        </div>
                            <section class="section-one card section-margin">
                                {score !== null && score !== 0 ?
                                <div>
                                <div class="result">
                                    <h1 class={score !== null && (score >= 0 && score <=5 ? "low" : score >= 6 && score <=12 ? "mid" : score >= 13 ? "high" : '')}>
                                        {score !== null && (score >= 0 && score <=5 ? "Low" : score >= 6 && score <=12 ? "Medium" : score >= 13 ? "High" : '')}
                                    </h1>            

                                    <div class="layout-align">
                                        <div id="score-meter-1" class="layout-align">
                                        <div id="scorer-1-inner-div">
                                            <div id="scorer-1-inner-div-5">
                                                <div class={score !== null && (score >= 0 && score <=5 ? "scorer-1-tick low" : score >= 6 && score <=12 ? "scorer-1-tick mid" : score >= 13 ? "scorer-1-tick high" : '')}></div>
                                            </div>
                                        </div>
                                        <div id="scorer-1-inner-div-2"></div>
                                        <div id="scorer-1-inner-div-3"></div>
                                        <div id="scorer-1-inner-div-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <h1 class={score !== null && (score >= 0 && score <=5 ? "low" : score >= 6 && score <=12 ? "mid" : score >= 13 ? "high" : '')}>
                                        {score !== null && 
                                            ( score >= 0 && score <=2 ? <p>May be stress related and observe.</p>
                                            : score >= 3 && score <=5 ? <p>Hydrate properly and proper personal hygine.<br />Observe and Re-evaluate after 2 days.</p>
                                            : score >= 6 && score <=12? <p>Seek a consultation with doctor.</p>
                                            : score >= 13 ? <p>Call the DOH Hotline 02-8-651-7800"</p>
                                            : '')
                                        }
                                    </h1>    
                                </div>
                                </div>
                                :''
                                }
                            </section>
                            
                            {(score !== null && (score >= 0 && score <=5)) &&
                                <section class="section-two card section-margin">
                                    {score !== null && score !== 0 ?
                                        <div>
                                    <p>Based on your inputs, A1Abilities advises the following:</p>
                                    <ol>
                                        <li>Stay home and take care of yourself in home isolation</li>
                                        <li> Prevention and precautions
                                        <a href="#details" class="link">See Below</a>
                                        </li>
                                        <li>
                                        Laboratory tests and imaging are optional
                                        <span class="lite-text"
                                            >(and as per your physician’s advise)</span
                                        >
                                        </li>
                                        <li>
                                        COVID 19 testing may be required at your physician’s advise
                                        </li>
                                        <li>
                                        Monitor your symptoms and get medical attention if your situation
                                        worsens
                                        </li>
                                    </ol>
                                    </div>
                                    :''}
                                </section>    
                            }
                    
                                   
                            { (score !== null &&  (score >= 6 && score <=12)) &&
                                <section class="section-two card section-margin">
                                    <p>Based on your inputs, A1Abilities recommendations:</p>
                                    <ol>
                                    <li>CONSULT A PHYSICIAN and start home isolation immediately</li>
                                    <li>
                                        Prevention and precautions
                                        <a href="#details" class="link">See Below</a>
                                    </li>
                                    <li>
                                        Laboratory tests and imaging may be needed as per your physician’s advise              
                                    </li>
                                    <li>
                                        COVID 19 testing may be required at your physician’s advise
                                    </li>
                                    <li>
                                        Monitor your symptoms and get medical attention if your situation
                                        worsens
                                    </li>
                                    </ol>
                                </section>
                            }
                    
                            { (score !== null &&  (score >= 13)) &&
                                <section class="section-two card section-margin">
                                    <p>Based on your inputs, A1Abilities recommendations:</p>
                                    <ol>
                                    <li>Seek immediate medical attention and get yourself tested</li>
                                    <li>Please visit a physician as there may be a requirement for further care</li>
                                    <li>COVID 19 testing may be needed at your physician’s advise</li>
                                    <li>
                                        Prevention and precautions
                                        <a href="#details" class="link">See Below</a>
                                    </li>
                                    <li> Laboratory tests and imaging may be needed as per your physician's advise </li>
                                    <li> Monitor your symptoms and isolate yourself </li>
                                    <li> You can CONSULT ONLINE here to speak to a physician immediately </li>
                                    </ol>
                                </section>
                            }
                    
                            <section class="section-four" id="details">
                                <h3>Prevention and Precautions - Basic protective measures</h3>
                                <p>
                                Be aware or Educate yourself with the latest updates on the
                                following websites : 
                                <a href="https://www.who.int/health-topics/coronavirus" target="_blank" >WHO </a>&
                                <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert" target="_blank"> Department of Health - Australia</a>&
                                <a href="https://www.healthdirect.gov.au/" target="_blank"> Health Direct</a>
                                </p>
                                <p>
                                Most people who become infected experience mild illness and recover,
                                but it can be more severe for others. Take care of your health and
                                protect others by doing the following:
                                </p>
                                <ul>
                                <li>
                                    <h4>Wash your hands frequently</h4>
                                    <p>
                                    Regularly and thoroughly clean your hands with an alcohol-based
                                    hand rub or wash them with soap and water.
                                    </p>
                                </li>
                                <li>
                                    <h4>Maintain social distancing</h4>
                                    <p>
                                    Maintain at least 2 metre (6 feet) distance between yourself and
                                    anyone who is coughing or sneezing.
                                    </p>
                                </li>
                                <li>
                                    <h4>Avoid touching eyes, nose and mouth</h4>
                                    <p>
                                    Our hands touch many surfaces and can pick up viruses. Once
                                    contaminated, hands can transfer the virus to your eyes, nose or
                                    mouth.
                                    </p>
                                </li>
                                <li>
                                    <h4>Practice respiratory hygiene</h4>
                                    <p>
                                    Make sure you and the people around you, follow good respiratory
                                    hygiene. This means covering your mouth and nose with your bent
                                    elbow or tissue when you cough or sneeze. Then dispose of the
                                    used tissue immediately.
                                    </p>
                                </li>
                                <li>
                                    <h4>
                                    If you have fever, cough and difficulty in breathing, seek
                                    medical care early
                                    </h4>
                                    <p>
                                    Stay home if you feel unwell. If you have a high fever, moderate
                                    to severe cough and difficulty in breathing and it is worsening
                                    in short period of time, seek medical asistance and call in
                                    advance.
                                    </p>
                                </li>
                                </ul>
                            </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

