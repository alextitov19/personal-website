import './WorkExperience.css'

function WorkExperience() {
    return <div className='work-experience'>
        <h2>Work Experience</h2>
        <div className="box">
            <div className='box-header'>
                <h4 className='box-title'>Software Developer</h4>
                <h4 className='box-date'>Aug 2023 - Present</h4>
            </div>
            <h6 className='box-subtitle'>University of California, Merced</h6>
            <ul>
                <li>Utelized React and Bootstrap to design and develop a web application for UC Merced students</li>
                <li>Implemented 3rd party services, inluding Google Maps API and Google Text to Speech</li>
                <li>Integrated the application into existing services by implementing MySQL and SSO middleware</li>
                <li>Utelized Jest and A/B user testing to test and debug the application</li>

            </ul>
        </div>
        <div className="box">
            <div className='box-header'>
                <h4 className='box-title'>Lead Developer and Co-Founder</h4>
                <h4 className='box-date'>Mar 2021 - Present</h4>
            </div>
            <h6 className='box-subtitle'>SocialTech Labs, Inc.</h6>
            <ul>
                <li>Co-Founder and lead developer of BestFriendsNetwork, a mental health for teens app with over 1000 users.</li>
                <li>Designed and developed a user-friendly UI for the iOS client with SwiftUI.</li>
                <li>Developed a REST API server in Golang, implementing DynamoDB for data persistence and a Redis cluster
                    through AWS ElastiCache, which decreased the average request time by 400%.</li>
                <li>Created a Kubernetes cluster in AWS to host the DockerImage of the Rest API server.</li>
                <li>Led a team of 8 interns, assigning and assessing tasks to complete the 8-week development sprint.</li>
                <li>Solved open-ended problems through collaborative design, debugging, and implementation.</li>
            </ul>
        </div>
        <div className="box">
            <div className='box-header'>
                <h4 className='box-title'>Web Developer</h4>
                <h4 className='box-date'>Dec 2022 - Mar 2023</h4>
            </div>
            <h6 className='box-subtitle'>University of California, Merced</h6>
            <ul>
                <li>Designed and developed a website with HTML5 and CSS for a NASA-partnered research association.</li>
                <li>Developed an interactive website for a materials science lab at UC Merced by implementing JavaScript
                    code to improve functionally and versatility of the website.</li>
                <li>Worked along with other developers to support and maintain current UC Merced websites.</li>
            </ul>
        </div>
        <div className="box">
            <div className='box-header'>
                <h4 className='box-title'>Game Developer Intern</h4>
                <h4 className='box-date'>Jun 2022 - Sep 2022</h4>
            </div>
            <h6 className='box-subtitle'>Buejestic, Inc.</h6>
            <ul>
                <li>Transitioned REST API servers from EC2 instances to autoscaling Kubernetes clusters.</li>
                <li>Worked with UI/UX designers to improve the front-end graphics of the game by adjusting
                    existing models in Unity to decrease render duration by 25%.</li>
            </ul>
        </div>
    </div>
}

export default WorkExperience