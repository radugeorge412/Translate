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
        padding: 5rem;
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
      @media screen and (max-width: 600px) {
        .container {
          padding: 6.2rem 3.3rem;
          color: #0000fe;
          background-color: rgba(0, 0, 254, 0.06);
          width: 100%;
        }
        p {
          color: rgb(23, 23, 23);
        }
      }
    `;
  }
}
