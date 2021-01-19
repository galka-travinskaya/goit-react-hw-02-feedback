import {Component} from 'react'

import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions'
import Statistics from './components/Statistics'

import {FEEDBACK_OPTIONS} from './data/constans'

export default class App extends Component {
    state = {};
    
    handleFeedback = ({target}) => {
        const {feedback} = target.dataset;
        this.setState(prevState => {
            const key = prevState[feedback] || 0;
            return {
                // [feedback]: prevState[feedback] + 1
                [feedback]: key + 1 
            }
        })
    }

    countTotalFeedback = () => {
        // const {good, neutral, bad} = this.state;
        // return good + neutral + bad;
        return Object.values(this.state).reduce((acc, item) => (acc + item), 0);
    }

    countPositiveFeedbackPercentage = () => {
        const {good = 0} = this.state;

        const total = this.countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
        // return total (Math.round(good / total) * 100 || 0);
    }

    render() {
        
        // console.log(this.state);
        // const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return <div>
            <Section title='Please leave feedback'>
                <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={this.handleFeedback}/>
            </Section>
            <Section title='Statistics'>
                <Statistics 
                    statictics={FEEDBACK_OPTIONS} 
                    data={this.state}
                
                // good={good} 
                // neutral={neutral} 
                // bad={bad} 
                total ={total} 
                positivePercentage={positivePercentage}/>
            </Section>
        </div>
    }
}