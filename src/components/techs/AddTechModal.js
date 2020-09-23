import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techAction';
import PropTypes from 'prop-types' // impt

import M from 'materialize-css/dist/js/materialize';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a the first and last name'})
    } else {
      addTech({
        firstName,
        lastName
      })

      M.toast({ html: `${firstName} ${lastName} was added as a tech`})

      // Clear Filds
      setFirstName('');
      setLastName('');
    }
  };
  // const onAttention = () => {
  //   console.log('attention');
  //   setAttention(!attention)
  // }; 


  return (
    <div id="add-tech-modal" className="modal" >
      <div className="modal-content">
        <h4>New Technitian</h4>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>

      </div>
      <div className="modal-footer">
        <a 
          href="#!" 
          className="modal-close waves-effect blue waves-light btn"
          onClick={onSubmit}
        >
          Enter
        </a>

      </div>
    </div>
  )
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech})(AddTechModal);