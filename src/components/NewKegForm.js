import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
 
function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, id: v4()});
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;