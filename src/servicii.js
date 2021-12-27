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
        height: 40rem;
        width: 100%;
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
        margin-bottom: 3rem;
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
