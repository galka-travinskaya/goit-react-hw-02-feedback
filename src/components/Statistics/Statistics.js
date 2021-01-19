import PropTypes from 'prop-types'
import Notification from '../Notification/Notification'
import s from "./Statistics.module.css";

const Statistics = ({statictics, data, total, positivePercentage}) => {
    return (
        <>
            {total > 0 && (
                <ul className={s.list}>
                    {statictics.map(stat => 
                        <li className={s.item} key={stat.id}>{`${stat.text}: ${data[stat.id] || 0}`}</li>)}
                        <li className={s.item}>Total: {total}</li>
                        <li className={s.item}>Positive feedback: {positivePercentage}%</li>
                </ul>
            )}
            {total === 0 && <Notification message='No feedback given'/>}
        </>
    )
}

Statistics.propTypes = {
    statictics: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;