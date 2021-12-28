import { LitElement, html, css } from "lit";

export class Footer extends LitElement {
  constructor() {
    super();
    this.tel = "+00000000";
  }

  render() {
    return html`
      <div class="container">
        <img src="/src/assets/navbar.svg" alt="imagine" />
        <div class="content">
          <ul>
            <li><a href="/">Link1</a></li>
            <li><a href="/">Link2</a></li>
            <li><a href="/">Link3</a></li>
            <li><a href="/">Link4</a></li>
          </ul>
          <span>Contact ${this.tel}</span>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        padding: 6rem 9.6rem;
        background-color: rgba(0, 0, 254, 0.04);
      }
      ul {
        width: 40rem;
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-size: 16px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      a {
        color: black;
        margin: 0;
        padding: 0;
        text-decoration: none;
      }
      .content {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      span {
        font-size: 16px;
      }

      @media screen and (max-width: 800px) {
        .container {
          padding: 3.2rem 2.4rem;
          position: relative;
          height: 25rem;
        }
        span {
          position: absolute;

          bottom: 3.6rem;
          left: 13rem;
        }
        img {
          width: 3.2rem;
          height: 3.2rem;
          margin-bottom: 4rem;
        }
        ul {
          align-items: center;
          width: 100%;
        }
      }
    `;
  }
}
