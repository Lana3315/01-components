import css from './Statistics.module.css'
const Statistics = ({good,neutral,bad,}) => (
  <section >
    <ul className={css.list}>
      <li><p>Good:{good }</p></li>
      <li><p>Neutral:{neutral }</p></li>
      <li><p>Bad:{ bad}</p></li>
    </ul>
  </section>
)

export default Statistics;