import { LitElement, html, css, render } from "lit";

export class Details extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="big">
        <div class="container">
          <h2>Ce este o traducere autorizata?</h2>
          <div class="content">
            <p>
              O traducere poate fi considerată autorizată dacă traducerea a fost
              efectuată, semnată și ștampilată de către un traducător autorizat
              de Ministerul de Justiție din Romania.
            </p>
          </div>
        </div>
        <img src="/src/assets/stampila.svg" />
      </div>
    `;
  }

  static get styles() {
    return css`
    .big{
      display:flex;
      flex-wrap:wrap;
      padding-left:9.6rem;
      column-gap:10rem;
      padding-bottom: 8rem;
      row-gap:2.4rem;
    }

      h2{
          font-size: 4rem;
      }
      p{
        font-size:1.6rem;
        line-height:22px;
      }
      p{
          max-width:60rem;
      }

      @media screen and (max-width:750px){
        p{
          width:auto;
        }
        .big{
          padding:2.4rem;
          margin-bottom:10rem;
        }
        img{
          width:22rem;
          height:34rem;
          align-self: end;
        }

      }
    }`;
  }
}
