import { counter } from '../store'

const About = () => {
    return (
        <div>
            <h1>This is an about page</h1>
            <p>{counter.doubleCount}</p>
        </div>
    );
}

export default About