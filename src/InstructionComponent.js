import { html, css, LitElement } from "lit";

export class InstructiuniComp extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      image: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.title = "Cum fac? Pașii traducerii:";
    this.image = "/src/assets/steps.svg";
  }

  render() {
    return html`
      <div class="container">
        <h2 class="title">${this.title}</h2>
        <div class="instrContainer">
          <instr-card
            step="1"
            text="Folosiți formularul de mai jos pentr a trimite documentul dvs. sau contactați-ne"
          ></instr-card>
          <instr-card
            step="2"
            text="Primiți în scurt timp un răspuns cu oferta de preț și durata traducerii"
          ></instr-card>
          <instr-card
            step="3"
            text="Plata traducerii și livrarea documentelor"
          ></instr-card>
        </div>
        <img src="${this.image}" alt="image" />
        <button>Începe acum</button>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        margin-top: 9rem;
        position: relative;
        background-color: black;
        min-height: 90vh;
        color: white;
        padding: 4rem;
      }

      img {
        width: 35rem;
        height: 40rem;
        position: absolute;
        right: 3rem;
        bottom: 4rem;
      }

      .instrContainer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: calc(100% - 35rem);
      }

      .instrContainer instr-card:nth-child(2) {
        margin: 0 1.5rem;
      }

      button {
        position: absolute;
        bottom: 3rem;
        background-color: white;
        border: none;
        padding: 1.2rem 2.2rem;
        font-size: 2rem;
        color: rgb(0, 0, 254);
      }

      .title {
        font-size: 4.8rem;
      }
    `;
  }
}
