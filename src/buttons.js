import { LitElement, html, css, render } from "lit";

export class Buttons extends LitElement {
  static get properties() {
    return {
      btn1: {
        type: String,
      },
      btn2: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.btn1 = "Încărcați documentul";
    this.btn2 = "Cum funcționează?";
  }

  render() {
    return html`
      <div class="cont">
        <button class="first">${this.btn1}</button>
        <button class="second">${this.btn2}</button>
      </div>
    `;
  }

  static get styles() {
    return css`
      .cont {
        margin-left: 9.4rem;
        display: flex;
      }

      button {
        padding: 1.8rem 2.2rem;
        border-radius: 0;
        border-style: none;
        font-size: 2rem;
        cursor: pointer;
      }
      .second {
        color: #171717;
        opacity: 0.5;
        margin-left: 3rem;
        background-color: white;
      }
      .first {
        background-color: #0000fe;
        color: white;
      }
      @media screen and (max-width: 450px) {
        .cont {
          flex-direction: column;
        }
        .second {
          margin-top: 1rem;
        }
      }
      @media screen and (max-width: 1000px) {
        .cont {
          margin-left: 4.8rem;
        }
      }

      @media screen and (max-width: 600px) {
        .cont {
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 2.4rem;
          margin-left: 0;
        }
        .second {
          margin-left: 0;
        }
        button {
          font-size: 1.8rem;
          padding: 1.1rem;
        }
      }
    `;
  }
}
