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
        min-width: 46px;
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
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: flex-end;
        flex-basis: 0;
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
        margin: 0 2px;
        position: relative;
        display: inline-block;
        width: 2rem;
        height: 1rem;
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
        background-color: #0000fe;
        -webkit-transition: 0.2s;
        transition: 0.2s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 0.75rem;
        width: 0.75rem;
        left: 1px;
        bottom: 1.4px;
        background-color: white;
        -webkit-transition: 0.2s;
        transition: 0.2s;
      }

      input:checked + .slider {
        background-color: #0000fe;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(10px);
        -ms-transform: translateX(10px);
        transform: translateX(10px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    `;
  }
}
