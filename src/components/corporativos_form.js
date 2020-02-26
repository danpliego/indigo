import React from "react";
import { ButtonPrimary } from "./layoutComponents";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xyyjwvay"
        method="POST"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="form-control"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          className="form-control"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
        />
        <textarea
          name="message"
          className="form-control"
          placeholder="Mensaje"
        />
        {status === "SUCCESS" ? (
          <p>Gracias! Pronto nos pondremos en contacto contigo.</p>
        ) : (
          <ButtonPrimary>Enviar</ButtonPrimary>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    // eslint-disable-next-line
    const data = new FormData(form);
    // eslint-disable-next-line
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      // eslint-disable-next-line
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
