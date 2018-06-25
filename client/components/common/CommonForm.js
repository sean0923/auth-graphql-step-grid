import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 500px;
  border: 1px solid #eee;
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
  }

  handleOnChange(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.handleOnChange(e, email)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.handleOnChange(e, password)}
          />
        </div>
        <BtnWrapper>
          <button type="submit">{this.props.btnText}</button>
        </BtnWrapper>
      </Form>
    );
  }
}

export default CommonForm;
