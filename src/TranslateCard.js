import { LitElement, html, css } from "lit";

export class Card extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      line3: {
        type: String,
      },
      desc1: {
        type: String,
      },
      desc2: {
        type: String,
      },
      desc3: {
        type: String,
      },
    };
  }
  constructor() {
    super();
    this.title = "";
  }

  render() {
    return html`
      <div class="container">
        <img src="/src/assets/paper.svg" alt="image" />
        <p class="title">${this.title}</p>
        <div class="content">
          <p><span>-${this.line1}</span> ${this.desc1}</p>

          <p>
            <span>-${this.line2}</span>
            ${this.desc2}
          </p>

          <p><span>-${this.line3}</span> ${this.desc3}</p>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        background-color: rgba(0, 0, 254, 0.04);
        padding: 4.8rem;
        max-width: 100%;
        height: 400px;
      }
      .title {
        font-size: 2.4rem;
        font-weight: 500;
        margin: 2rem 0 2.5rem 0;
      }

      span {
        font-size: 1.6rem;
        color: #0000fe;
      }

      .content {
        font-size: 1.6rem;
        max-height: 25rem;
        overflow-y: auto;
      }
    `;
  }
}
