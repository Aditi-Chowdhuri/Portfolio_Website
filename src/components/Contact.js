import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div id="Contact">
                <h1 class="conhead">Contact Me !</h1>
                <div class='cdivs'>
                    <table class="ctable1">
                        <tr>
                            <td style={{textAlign: 'center'}}><a href="https://github.com/Aditi-Chowdhuri" target="_blank" rel="noreferrer"><img class='hoverer' alt="github" src="github.png"></img></a></td>
                            <td style={{textAlign: 'center'}} colspan='2'>Destination for cool projects</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}><a href="https://www.linkedin.com/in/aditi-chowdhuri/" target="_blank" rel="noreferrer"><img class='hoverer' alt="linkedin" src="linkedin.png"></img></a></td>
                            <td style={{textAlign: 'center'}} colspan='2'>Professional life</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}><a href="https://orcid.org/0000-0003-0734-3535" target="_blank" rel="noreferrer"><img class='hoverer' alt="ORCID" src="orcid.png"></img></a></td>
                            <td style={{textAlign: 'center'}} colspan='2'>Straight out of my head</td>
                        </tr>
                    </table>
                </div>
                <div class='cdivs'>
                    <table class="ctable">
                        <tr>
                            <td class='td1'>e-Mail</td>
                            <td class='td1'>:</td>
                            <td class='td1'>aditichowdhuri99@gmail.com</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Contact;