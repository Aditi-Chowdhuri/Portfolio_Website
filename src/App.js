import Name from './components/Name.js';
import Scrollarrow from './components/Scrollarrow.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js'
import './App.css';

function App() {
  var base = "/";
  return (
    <div>
      <Name/>
      <Scrollarrow link={base+"Portfolio_Website/#About"} link1={base+"Portfolio_Website/#start"} up={false} down={true}/>
      <About/>
      <Scrollarrow link={base+"Portfolio_Website/#Skills"} link1={base+"Portfolio_Website/#start"} up={true} down={true}/>
      <Skills/>
      <Scrollarrow link={base+"Portfolio_Website/#Education"} link1={base+"Portfolio_Website/#About"} up={true} down={true}/>
      <Education/>
      <Scrollarrow link={base+"Portfolio_Website/#Experience"} link1={base+"Portfolio_Website/#Skills"} up={true} down={true}/>
      <Experience/>
      <Scrollarrow link={base+"Portfolio_Website/#Contact"} link1={base+"Portfolio_Website/#Education"} up={true} down={true}/>
      <Contact/>
      <Scrollarrow link={base+"Portfolio_Website/#Contact"} link1={base+"Portfolio_Website/#Experience"} up={true} down={false}/>
    </div>
  );
}

export default App;