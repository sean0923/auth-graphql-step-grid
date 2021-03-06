import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import query_current_user from '../../queries/query_current_user';

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
      errMessages: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleOnSubmit(e, mutation) {
    e.preventDefault();

    const { email, password } = this.state;

    mutation({
      variables: { email, password },
      refetchQueries: [{ query: query_current_user }],
    })
      .then(data => {
        console.log('data: at success', data);
        this.props.history.push('/test-page');
      })
      .catch(err => {
        const errMessages = err.graphQLErrors.map(({ message }) => message);
        this.setState({ errMessages });
      });
  }

  render() {
    return (
      <Mutation
        mutation={this.props.mutation}
        // update={(cache, { data: { addTodo } }) => {
        //   const { todos } = cache.readQuery({ query: GET_TODOS });
        //   cache.writeQuery({
        //     query: GET_TODOS,
        //     data: { todos: todos.concat([addTodo]) },
        //   });
        // }}
        // update={(proxy, { data: test }) => {
        //   console.log('test: ', test);
        //   const data = proxy.readQuery({ query: query_current_user });
        //   console.log('data at common form: ', typeof data);
        //   data.user = true;
        //   // data.loggedUser = login;

        //   proxy.writeQuery({
        //     query: query_current_user,
        //     data,
        //   });
        // }}
      >
        {(mutation, { data }) => {
          return (
            <div>
              <Form onSubmit={e => this.handleOnSubmit(e, mutation)}>
                <div>
                  <label>Email:</label>
                  <input
                    autoFocus
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

                {this.state.errMessages.map(errMssg => {
                  return <div key={errMssg}>{errMssg}</div>;
                })}

                <BtnWrapper>
                  <button className="btn" type="submit">
                    {this.props.btnText}
                  </button>
                </BtnWrapper>
              </Form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(CommonForm);
