import { LitElement, html, css } from "lit";

export class Servicii extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      * {
        font-family: "Inter", sans-serif;
      }
      .container {
        width: 100%;
        margin-top: 10rem;
        margin-bottom: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      p {
        margin: 0;
        padding: 0;
      }
      .first {
        font-size: 4.8rem;
        margin-bottom: 4rem;
      }
      .second {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
      }
      span {
        font-size: 2.4rem;
      }
      img {
        margin: 0 15px;
      }
      .c1 {
        display: flex;
        align-items: center;
      }

      @media screen and (max-width: 500px) {
        .first {
          font-size: 3.2rem;
          margin-bottom: 2.4rem;
        }
        .second {
          font-size: 2.2rem;
        }
        span {
          font-size: 1.4rem;
        }
        img {
          width: 2rem;
        }
        .container {
          margin-top: 7rem;
          margin-bottom: 5rem;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <p class="first">Serviciile noastre</p>
        <p class="second">Traduceri documente</p>
        <div class="c1">
          <span>Română</span>
          <img src="/src/assets/reverse.svg" alt="reverse" />
          <span>Engleză</span>
        </div>
      </div>
    `;
  }
}
