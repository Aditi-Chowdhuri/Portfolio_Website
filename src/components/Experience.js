import React from 'react';

class Experience extends React.Component{
    render(){
        return(
            <div id="Experience">
                <h1 class="ehead">Experience</h1>
                <div class="ecard">
                    <h2 class='subhead'>Bank of America, Mumbai  - JULY 2022-Present</h2>
                    <p class='subdesc'>Software Engineer</p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>Tata Consultancy Services, Mumbai - JULY 2021-OCTOBER 2021</h2>
                    <p class='subdesc'>Software Developer</p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>Trikon Technologies, Noida - AUGUST 2020-DECEMBER 2020</h2>
                    <p class='subdesc'>Web Developer</p>
                </div>
                <div id='btncenter'><a href="Resume.pdf" download="Aditi_Chowdhuri_Resume.pdf"><button class="btn">Resume</button></a></div>
            </div>
        );
    }
}

export default Experience;