import { LitElement, html, css } from "lit";

const ro = {
  lang: "ro",
  title: "Serviciile noastre",
};
const en = {
  lang: "en",
  title: "Our services",
};

export class Servicii extends LitElement {
  static get properties() {
    return {
      content: {
        type: Object,
      },
      ro: {
        type: Object,
      },
      en: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.ro = Object.assign({}, ro);
    // this.en = Object.assign({}, en);
    this.content = Object.assign({}, this.ro);
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

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("languageChanged", (e) => {
      if (this.content.lang == "ro") {
        this.content = Object.assign({}, this.en);
      } else {
        this.content = Object.assign({}, this.ro);
      }

      this.requestUpdate();
    });
  }

  disconnectedCallback() {
    window.removeEventListener("languageChanged", (e) => {
      if (this.content.lang == "ro") {
        this.content = Object.assign({}, this.en);
      } else {
        this.content = { ...this.ro };
      }
    });
    super.disconnectedCallback();
  }

  render() {
    console.log(this.content);
    return html`
      <div class="container">
        <p class="first">${this.content.title}</p>
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
