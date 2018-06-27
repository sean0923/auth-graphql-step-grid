import React from 'react';
import CommonForm from '../common/CommonForm';

import mutation_login from '../../mutations/mutation_login';

const Signin = () => {
  return (
    <div>
      <CommonForm btnText="Sign In" mutation={mutation_login}/>
    </div>
  );
};

export default Signin;
