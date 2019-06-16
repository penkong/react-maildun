//survey field render a single label and text input.
import React from 'react'

const styles = {
  field: 'cf w-100 pa2',
  label: 'fl w-100 w-25-ns navy mv2 ml2-ns',
  labelText: 'f6 f4-l',
  input: 'fl fr-m fr-l w-100 w-70-ns',
  inputText: 'w-100 ba b--lightest-blue pv2 ph1',
  error: 'fr w-100 tr dark-pink mt1 pa1 pl2'
}

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div className={styles.field}>
      <div className={styles.label}>
        <label className={styles.labelText}>{label}</label>
      </div>
      <div className={styles.input}>
        <input className={styles.inputText} {...input}/>
      </div>
      <div className={styles.error}>
        {touched && error}
      </div>
    </div>
  )
}

export default SurveyField
