import './WorkExperience.css'

function WorkExperience() {
    return <div className='work-experience'>
        <h2>Work Experience</h2>
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
    </div>
}

export default WorkExperience