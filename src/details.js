import { LitElement, html, css, render } from "lit";

export class Details extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <h2>Ce este o traducere autorizata?</h2>
        <div class="content">
          <p>
            O traducere poate fi considerată autorizată dacă traducerea a fost
            efectuată, semnată și ștampilată de către un traducător autorizat de
            Ministerul de Justiție din Romania.
          </p>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .container {
        padding: 0 9.6rem;
        padding-bottom: 8rem;
      }
      h2{
          font-size: 4rem;
      }
      p{
        font-size:1.6rem;
        line-height:22px;
      }
      .content{
          width:60rem;
      }
    }`;
  }
}
