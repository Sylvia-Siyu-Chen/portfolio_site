import './Intro.css'
import Sylvia from '../img/Sylvia.jpg'

function Intro() {
    return(
        <div className="intro">
            <div className="intro_photo" >
                <img src={Sylvia}></img>
            </div>
            <div className='intro_text' >
                <div> Hi there! Thank you for dropping by :) </div>
               <div>My name is Sylvia(Siyu) Chen, currently a senior student @<a href='https://www.nyu.edu/'>NYU</a> doing Computer Science and Business Studies </div>
               <div>Hope you will find this website intresting than just reading plain text of my resume</div>
            </div>
        </div>
    )
}

export default Intro