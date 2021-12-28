import { LitElement, html, css } from "lit";

export class PriceCard2 extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<div class="container">
      <p>*</p>
      poate varia în funcție de diferite criterii, printre care și criteriul de dificultate. <br></br> 
      În cazul în care se depășește norma standard de 10 pagini/zi sau se dorește predarea în mai putin de 24 de ore a 10 pagini traduse, se percepe o taxă de urgență în cuantum de 50% din prețul/pagină.
    </div>`;
  }

  static get styles() {
    return css`
      p {
        color: #0000fe;
        font-size: 3.8rem;
        margin: 0;
        padding: 0;
        margin-top: 14px;
      }

      .container {
        padding: 5rem;
        background-color: rgba(0, 0, 254, 0.04);
        line-height: 22px;
        font-size: 1.6rem;
        color: #171717;
      }

      @media screen and (max-width: 600px) {
        .container {
          background-color: white;
          padding: 4rem 2.4rem;
        }
      }
    `;
  }
}
