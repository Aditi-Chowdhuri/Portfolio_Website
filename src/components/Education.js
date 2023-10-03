import React from 'react';

class Education extends React.Component{
    render(){
        return(
            <div id="Education">
                <h1 class="ehead">Education</h1>
                <div class="ecard">
                    <h2 class='subhead'>Vellore Institute of Technology, Vellore, India - 2018-2022</h2>
                    <p class='subdesc'>B. Tech. - Computer Science and Technology, <i>CGPA : 9.19</i></p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>PACE Junior Science College, Mumbai, India - 2016-2018</h2>
                    <p class='subdesc'>Higher Secondary - Maharashtra State Board, <i>Percentage : 81.08%</i></p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>Thakur Public School, Mumbai, India - 2005-2016</h2>
                    <p class='subdesc'>Secondary - I.C.S.E. , <i>Percentage : 94.6%</i></p>
                </div>
            </div>
        );
    }
}

export default Education;