import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      task: "",
    };
    this.updateText = this.updateText.bind(this);
    this.inputText = this.inputText.bind(this);
  }
  updateText(event) {
    this.setState({
      text: this.state.text.concat(this.state.task),
      task: "",
    });
    event.preventDefault();
  }

  inputText(event) {
    this.setState({
      task: event.target.value,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.text.map((tex) => (
              <li key={tex}>{tex}</li>
            ))}
          </ul>
          <form onSubmit={this.updateText}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              onChange={this.inputText}
              value={this.state.task}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
