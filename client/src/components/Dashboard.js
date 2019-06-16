import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

const styles = {
  dashboardPage: 'flex flex-column',
  newEmails: 'w-30 center tc navy hover-green no-underline mv3 pa3',
  newEmailsText: 'f6 f4-ns b ml2',
  list: 'cf h-100 w-100 center bg-near-white '
}

const Dashboard = () => {
  return (
    <div className={styles.dashboardPage} >
      <Link to="/surveys/new" className={styles.newEmails} style={{fontFamily: "Roboto"}}>
        <FontAwesomeIcon  size="3x" icon={faMailBulk} />
        <span className={styles.newEmailsText}>SEND EMAILS</span> 
      </Link>
      <div className={styles.list} >
        <SurveyList/>
      </div>
    </div>
  )
}

export default Dashboard;

// const stylesPlus = {
//   border: "1px dotted white",
//   width: "3px",
//   height: "3px",
//   color: "inherit",
//   backgroundColor: "black",
//   boxSizing: "border-box",
//   transform: "scale(11)",
// }