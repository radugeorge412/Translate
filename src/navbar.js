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
    this.links = ["link1", "link2", "link3", "link4"];
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
          ${this.links.map((item) => html`<a href="/">${item}</a>`)}
          <div class="btnContainer">
            <span>RO</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <span>EN</span>
          </div>
        </div>

        <div class="telContainer">
          <span>Contact: ${this.tel}</span>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        height: 62 px;
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
      }

      .linkContainer a {
        text-decoration: none;
        color: black;
        font-size: 1.6rem;
        line-height: 16px;
        margin-right: 5vw;
      }

      .telContainer span {
        margin-right: 20%;
        font-size: 1.6rem;
        line-height: 16px;
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
        transform: translateX(8px);
      }
    `;
  }
}
