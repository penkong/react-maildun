import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
//ambulance

const styles = {
  card: 'w-90 w-80-m w-60-l bg-washed-blue shadow-3 center hidden br4 mv2 mv5-ns pa3',
  header: 'f2 f1-ns lh-title b blue hover-navy pa1',
  pSend: 'w-auto f4 f3-ns dark-blue bg-washed-blue bl bb bw2 br2 b--dark-blue mt2 pa2 ',
  pSimple: 'w-auto f2 lh-copy tr gold bg-green br2 mt2 pa2 pr4-ns',
  pAlarm: 'f4 f3-ns tracked lh-copy navy br bt bw2 br2 b--light-red mt2 pa3',
  pAlarmSpan: 'f4 f3-ns light-red ml1',
  pJoin: 'w-auto f4 f3-ns tc dark-green bg-washed-green br bt bb bw2 br2 b--green mt2 pa2',
  pJoinSpan: 'f2 b gold',
  ambulance: 'dib w-100 tc dark-red hover-gold no-underline mv3 pa3'
}

const Landing = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.header} style={{fontFamily:"Kanit"}}>MAILDUN</h1>
      <p className={styles.pSend}>Send your emails</p>
      <p className={styles.pSimple}>Simple and Fast</p>
      <p className={styles.pAlarm}>Don't spend your time anymore on convoluted 
      <span className={styles.pAlarmSpan}> MAIL SENDER</span></p>
      <p className={styles.pJoin}>Also we give you 
      <span className={styles.pJoinSpan}>10</span> credits on register join us and try</p>
      <Link to="/ambulance" className={styles.ambulance} style={{fontFamily: "Roboto"}}>
        <FontAwesomeIcon  size="3x" icon={faAmbulance} /> 
      </Link>
    </div>
  )
}

export default Landing;
