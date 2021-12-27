import { LitElement, html, css } from "lit";

export class InstCard extends LitElement {
  static get properties() {
    return {
      step: {
        type: String,
      },
      text: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.step = "1";
    this.text = "Instructiuni";
  }

  render() {
    return html`
      <div class="container">
        <span class="step">${this.step}</span>
        <span class="instr"> ${this.text} </span>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        width: 22rem;
        min-width: 15rem;
        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        font-family: "Inter", sans-serif;
      }
      .step {
        font-size: 12.2rem;
      }
      .instr {
        font-size: 1.6rem;
      }
    `;
  }
}
