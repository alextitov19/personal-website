import './Skills.css'

function Skills() {
    return <div className='skills'>
        <h2 className='h2-custom'>Skills</h2>
        <article className="mycustomcard">
            <pre>HTML/CSS   JavaScript   TypeScript</pre>
            <pre>Java          C++           Python</pre>
            <pre>Flutter      SqiftUI        Kotlin</pre>
            <pre>Go            noSQL            SQL</pre>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </article>
        <br />
        <article className="mycustomcard">
            <pre>Angular       React        Express</pre>
            <pre>AWS           GCloud      REST API</pre>
            <pre>Docker      Kubernetes       Redis</pre>
            <pre>Git         Web Sockets        JWT</pre>
            <pre>RedHat       Bootstrap          ML</pre>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </article>
    </div>
}

export default Skills