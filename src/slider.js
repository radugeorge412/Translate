import { html, css, LitElement } from "lit";

export class Slider extends LitElement {
  static get properties() {
    return {
      image1: {
        type: String,
      },
      image2: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.image1 = "/src/assets/test1.jpg";
    this.image2 = "/src/assets/test2.jpg";
  }

  render() {
    return html`<div id="aics-autostart">
      <div class="images">
        <div
          class="image-rgt"
          data-src="${this.image1}"
          data-height="300"
          data-width="400"
        ></div>
        <div
          class="image-lft"
          data-src=".${this.image2}"
          data-height="300"
          data-width="400"
        ></div>
      </div>
    </div>`;
  }

  static get styles() {
    return css`
      #aics-autostart,
      .images,
      .image-rgt {
        height: 300px;
      }
    `;
  }
}
