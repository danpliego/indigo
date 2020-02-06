// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import { ButtonDownload } from "./layoutComponents";

export default class ContactForm extends React.Component {
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
        action="https://formspree.io/mzbrbpyp"
        method="POST"
      >
        <input
          className="form-control"
          type="text"
          name="nombre"
          placeholder="Nombre"
        />
        <input
          className="form-control"
          type="text"
          name="telefono"
          placeholder="Teléfono de contacto"
        />
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Correo electrónico"
        />
        <input
          className="form-control"
          type="text"
          name="ciudad"
          placeholder="Ciudad"
        />
        <input
          className="form-control"
          type="text"
          name="estado"
          placeholder="Estado"
        />
        <input
          className="form-control"
          type="text"
          name="descripcion"
          placeholder="Descripción del requerimiento"
        />
        {status === "SUCCESS" ? (
          <p style={{ padding: "1rem", textAlign: "center" }}>
            Gracias! Tu descarga está por iniciar
          </p>
        ) : (
          <ButtonDownload>Enviar</ButtonDownload>
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
