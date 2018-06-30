import React, { Component, Fragment } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input placeholder="usuário/repositório" value={this.state.repositoryInput} />
          <button type="submit">Adicionar</button>
        </form>
      </Fragment>
    );
  }
}
