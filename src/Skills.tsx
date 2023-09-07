import './Skills.css'

function Skills() {
    return <div className='skills'>
        <h2>Skills</h2>
        <article className="mycustomcard">
            <h4 className='h4-custom'>Languages</h4>
            <pre>HTML/CSS   JavaScript   TypeScript</pre>
            <pre>Java          C++           Python</pre>
            <pre>Flutter      SqiftUI        Kotlin</pre>
            <pre>Go            noSQL            SQL</pre>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </article>
    </div>
}

export default Skills