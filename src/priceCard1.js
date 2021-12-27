import { LitElement, html, css } from "lit";

export class PriceCard1 extends LitElement {
  static get properties() {
    return {
      price: {
        type: String,
      },
      description: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.price = "20 lei/ pagină";
    this.description = "cu o medie de 10 pagini/zi în regim standard*";
  }

  render() {
    return html`
      <div class="container">
        <h2>${this.price}</h2>
        <p>${this.description}</p>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        color: white;
        padding: 8.2rem;
        background-color: #0000fe;
      }

      h2 {
        font-size: 8.8rem;
        margin: 0;
        padding: 0;
      }
      p {
        font-size: 1.6rem;
        margin-top: 4rem;
        color: #e0e0e0;
      }
    `;
  }
}
