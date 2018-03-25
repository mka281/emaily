import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
  return(
    <div>
      <h5>Please confirm your entries</h5>
      <button
        className="yellow darken-3 btn-flat"
        onCancel={onCancel}
      >
        Back
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps)(SurveyFormReview);
