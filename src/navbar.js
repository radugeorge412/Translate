import { html, css, LitElement } from "lit";

export class Nav extends LitElement {
  static get properties() {
    return {
      links: {
        type: Array,
      },
      tel: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.links = ["Services", "Prices", "Steps", "Upload", "About"];
    this.tel = "+00000000000";
  }

  render() {
    return html`
      <div class="container">
        <div class="iconContainer">
          <a href="/"
            ><img class="icon" src="/src/assets/navbar.svg" alt="image"
          /></a>
        </div>

        <div class="linkContainer">
          <div class="linkuri">
            ${this.links.map((item) => html`<a href="/">${item}</a>`)}
          </div>
          <div class="btnContainer">
            <span>RO</span>
            <label class="switch">
              <input
                type="checkbox"
                @click="${() =>
                  window.dispatchEvent(new CustomEvent("languageChanged"))}"
              />
              <span class="slider round"></span>
            </label>
            <span>EN</span>
          </div>
        </div>

        <div class="telContainer">
          <p>Contact: ${this.tel}</p>
        </div>
        <div class="burgerContainer" @click="${this._toggleBurger}">
          <img class="burger" src="/src/assets/burger.svg" alt="icon" />
        </div>
      </div>
    `;
  }

  _toggleBurger() {
    this.shadowRoot.querySelector(".linkContainer").classList.toggle("active");
    this.shadowRoot.querySelector(".linkuri").classList.toggle("active");
    this.shadowRoot.querySelector(".btnContainer").classList.toggle("active");
    this.shadowRoot.querySelector(".container").classList.toggle("burgerOpen");
    this.shadowRoot
      .querySelector(".linkContainer")
      .classList.toggle("burgerOpen");
    if (
      this.shadowRoot.querySelector(".burger").getAttribute("src") ==
      "/src/assets/burger.svg"
    ) {
      this.shadowRoot
        .querySelector(".burger")
        .setAttribute("src", "/src/assets/close2.svg");
    } else {
      this.shadowRoot
        .querySelector(".burger")
        .setAttribute("src", "/src/assets/burger.svg");
    }
    if (
      this.shadowRoot
        .querySelector(".linkContainer")
        .classList.contains("active")
    ) {
      this.shadowRoot.querySelector(".telContainer > p").style.borderColor =
        "white";
    } else {
      this.shadowRoot.querySelector(".telContainer > p").style.borderColor =
        "#0000fe";
    }
  }

  static get styles() {
    return css`
      .burgerOpen {
        background-color: #0000fe;
        color: white;
      }
      .linkContainer.burgerOpen {
        height: 100vh;
        width: 100%;
        left: 0;
        color: white;
        background-color: #0000fe;
        align-items: space-between;
        justify-content: center;
      }
      .burger {
        cursor: pointer;
        width: 2rem;
        margin-right: 2.4rem;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        display: none;
      }
      .container {
        height: 62 px;
        position: relative;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        padding-top: 24px;
      }
      .btnContainer span {
        font-size: 1.4rem;
      }
      .btnContainer {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }

      .linkContainer {
        max-width: 600px;
        padding: 8px;
        display: flex;
        align-items: center;
        flex-grow: 2;
        justify-content: center;
        flex-basis: 0;
      }
      .iconContainer {
        flex-grow: 1;
        flex-basis: 0;
      }
      .telContainer {
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-width: 20rem;
      }

      .linkContainer a {
        text-decoration: none;
        color: black;
        font-size: 1.6rem;
        line-height: 16px;
        margin-right: 5vw;
      }

      .telContainer p {
        margin-right: 20%;
        font-size: 1.6rem;
        line-height: 16px;
        padding-bottom: 0.35rem;
        border-bottom: 2px solid #0000fe;
        flex-shrink: 1;
      }
      .icon {
        width: 34px;
        height: 34px;
        margin-left: 20%;
      }

      .switch {
        margin: 0 5px;
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 20px;
        height: 10px;
      }

      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 30px;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 9px;
        width: 9px;
        border-radius: 20px;
        left: 0.3px;
        bottom: 0.3px;
        background-color: white;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #2196f3;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        transform: translateX(10.8px);
      }

      @media screen and (max-width: 600px) {
        .container {
          padding: 3.8rem 2.4rem;
        }
      }

      @media screen and (max-width: 800px) {
        .linkContainer {
          display: none;
        }
        .container {
          position: relative;
          padding: 3.8rem 4.8rem;
          justify-content: space-between;
        }
        .telContainer {
          align-self: center;
          flex: 1;
        }

        .telContainer p {
          margin: auto;
        }
        .burger {
          display: block;
          margin: 0;
          position: absolute;
          right: 0;
          top: 9px;
        }
        .burgerContainer {
          flex: 1;
          position: relative;
        }
        .icon {
          margin: 0;
        }
        .iconContainer {
          flex: 1;
        }

        .btnContainer {
          justify-content: center;
        }
      }

      .linkContainer.active {
        display: block;
        z-index: 100;
        position: absolute;
        align-items: center;
        align-content: space-between;
        right: 2.4rem;
        left: 0;
        top: 11rem;
      }
      .linkuri.active {
        padding: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 4.2rem;
      }
      .linkuri.active a {
        margin-top: 1rem;
        color: white;
        font-size: 3.6rem;
      }

      .btnContainer.active {
        margin-top: 1rem;
        align-self: flex-end;
      }
      @media screen and (max-width: 400px) {
        .container {
          padding: 3rem 1.8rem;
        }
      }
    `;
  }
}
