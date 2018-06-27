import React from 'react';

import CommonForm from '../common/CommonForm';

import mutation_signup from '../../mutations/mutation_signup';

const Signup = () => {
  return (
    <div>
      <CommonForm btnText="Create New Account" mutation={mutation_signup} />
    </div>
  );
};

export default Signup;
