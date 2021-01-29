import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import "@polymer/paper-checkbox/paper-checkbox.js";
import "@polymer/paper-input/paper-input.js";
import "./custom-validator";

class CustomElement extends PolymerElement {
  static get properties() {
    return {
      mystring: {
        type: String,
        value: "hello world"
      }
    };
  }
  static get template() {
    return html`
      <h1>i am a custom element</h1>
      <custom-validator id="validation"></custom-validator>
      <p>[[mystring]]</p>
      <paper-checkbox>can has paper-checkbox?</paper-checkbox>
      <paper-input
        auto-validate
        required
        validator="validation"
        id="miInput"
        value="{{valor}}"
        error-message="incorrect"
      ></paper-input>
    `;
  }
  ready() {
    super.ready();
    this.$.miInput.addEventListener(
      "input",
      function(e) {
        this.validate(e);
      }.bind(this)
    );
  }
  validate(e) {
    var input = e.currentTarget;
    var valid = this.$.validation.validate(input.value);
    ("tontisimo");
    if (valid) {
      //input.removeAttribute('invalid');
      console.log("valid");
    } else {
      //input.setAttribute('invalid', true);
    }
  }
}

customElements.define("custom-element", CustomElement);
