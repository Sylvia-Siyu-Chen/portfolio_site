import './Education.css'
import {card} from 'react-bootstrap'
import nyuimg from '../img/nyu2.png'
import nyuname from '../img/nyu.png'

function Education(){
    return (
        <div className="education">
            <div className='edu_img'>
                <p><a href='https://www.nyu.edu/'><img src={nyuimg} width={400}/></a></p>
            </div>
            <div className="edu_text">
                <img src = {nyuname} width = {800}/>
                <h3>B.A. in Computer Science with Minor in Mathmatics and Business Studies</h3>
                <div className='title'>
                    <b>Computer Science</b> relevant coursework:
                </div>
                <div className='courses'>
                    <div><b>Software Engineering</b>  (MERN stack development)</div>
                    <div><b>Applied Internet Technologies</b> (full-stack web development)</div>
                    <div><b>Object-Oriented Programming</b> (Java and C++)</div>
                    <div><b>Artificial Intelligence</b> (with focus on representation and reasoning, ML, and NLP)</div>
                    <div><b>Natural Lnaguage Processing</b> (computational linguisitcs)</div>
                    <div><b>Operating Systems</b>  (virtualization, concurrency, and persistence)</div>
                    <b>Algorithms</b><div>  (sorting, recurrence equations, binary search, partition, graphs, trees, connectivity, DFS and BFS, dynamic programming )</div>
                    <div><b>Data Management and Analysis</b>  (extracting, transforming and analyzing data)</div>
                    <div><b>Computer System Organization</b>  (architecture of modern computer system)</div>
                    <div><b>Calculus, Linear algebra, and Discrete Math</b></div>

                </div>
                <div className='title'>
                    <b>Business Studies</b> relevant coursework:
                </div>
                    <div className='courses'>
                    <div><b>Statistics for Business Control and Regression Model</b>  (Descriptive statstics, inferential statistics, linear regression</div>
                        <div><b>Principles of Financial Accounting</b>  (Analysis of Financial Statements))</div>
                        <div><b>Information Technology in Business and Society</b>  (CRM, ERP, SCM, and e-Business)</div>
                        <div><b>Microeconomics with Calculus</b></div>
                        <div><b>Macroeconomics</b></div>
                        <div><b>Calculus</b></div>

                    </div>
            </div>
        </div>
    )
}

export default Education