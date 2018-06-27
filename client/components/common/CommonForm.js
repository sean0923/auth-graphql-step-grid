import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import query_current_user from '../../queries/query_current_user';
import mutation_login from '../../mutations/mutation_login';

const Form = styled.form`
  width: 500px;
  /* border: 1px solid #eee; */
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class CommonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleOnSubmit(e, login) {
    e.preventDefault();

    const { email, password } = this.state;

    login({ 
      variables: { email, password } ,
      refetchQueries: [{ query: query_current_user }],
    });
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <Mutation mutation={mutation_login}>
        {(login, { data }) => (
          <div>
            <Form onSubmit={e => this.handleOnSubmit(e, login)}>
              <div>
                <label>Email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={e => this.handleOnChange(e, 'email')}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="text"
                  value={this.state.password}
                  onChange={e => this.handleOnChange(e, 'password')}
                />
              </div>
              <BtnWrapper>
                <button className="btn" type="submit">
                  {this.props.btnText}
                </button>
              </BtnWrapper>
            </Form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default CommonForm;
