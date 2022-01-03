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
        <div class="center"><button>Începe acum</button></div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        margin-top: 9rem;
        position: relative;
        background-color: black;
        color: white;
        padding: 9.6rem;
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
        row-gap: 3rem;
        column-gap: 4rem;
        width: calc(100% - 35rem);
      }

      button {
        background-color: white;
        margin-top: 20rem;
        border: none;
        padding: 1.2rem 2.2rem;
        font-size: 2rem;
        color: rgb(0, 0, 254);
      }

      .title {
        font-size: 4.8rem;
        margin-bottom: 10rem;
      }

      @media screen and (max-width: 900px) {
        button {
          margin-top: 7rem;
        }
      }
      @media screen and (max-width: 768px) {
        .container {
          padding: 4.8rem;
        }
        img {
          height: 25rem;
          width: 17rem;
          bottom: 13rem;
        }
        instrContainer {
          width: 100%;
        }
        .center {
          display: flex;
          align-items: cenetr;
          justify-content: center;
        }
        .title {
          margin-bottom: 4rem;
        }
      }

      @media screen and (max-width: 600px) {
        .instrContainer instr-card:nth-child(2) {
          margin: 0;
          margin-bottom: 5rem;
        }
        instr-card {
          margin-bottom: 5rem;
        }
        .instrContainer {
          flex-direction: column;
          width: auto;
        }
        .container {
          height: auto;
        }
        button {
          margin: 5rem auto;
        }
        img {
          bottom: 20rem;
        }
      }
      @media screen and (max-width: 440px) {
        img {
          display: none;
        }
      }
    `;
  }
}
