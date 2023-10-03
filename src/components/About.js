import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div id="About">
                <h1 id="atitle">About Me</h1>
                <div id="acont">
                    <div class="floater">
                        <img alt="Aditi Chowdhuri" src="https://avatars.githubusercontent.com/u/46585556?v=4" id="mpic"></img>
                    </div>
                    <div class="floater">
                        <h1 id="aname">Aditi Chowdhuri</h1>
                        <p class="bio">In a digital realm where code is the spell and the browser is the mystical land, Aditi is your local full stack sorcerer, conjuring pixels and transmuting caffeine into functional, magical web portals. With a wand (read: keyboard) that's seen years of battles and a pet cat named "Byte", Aditi’s alchemical blend of humor, code, and quirks has saved many a project from the dragons of monotony.</p>
                        <p class="bio">If you seek enchanting digital adventures or just a potion to fix that pesky bug, give a shout—or better yet, send an owl!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;