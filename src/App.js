import React, { Component } from 'react';
import TodoInput from './componentes/TodoInput';
import TodoList from './componentes/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Todo input
            </h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
