import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sky-space')
export class SkySpace extends LitElement {
  @property({
    type: String,
  })
  direction: 'vertical' | 'horizontal' = 'horizontal'

  protected render() {
    // const size = this.childNodes.length
    // const uuids = new Array(size).fill(0).map(() => crypto.randomUUID())
    return html` <div class="sky-space sky-space--${this.direction}">${Array.from(this.childNodes).map((el) => html`<div class="sky-space--item">${el}</div>`)}</div> `
  }

  static styles = css`
    .sky-space {
      display: inline-flex;
      flex-wrap: wrap;
    }

    .sky-space--item {
      display: flex;
      flex-wrap: wrap;
    }

    .sky-space--horizontal {
      flex-direction: row;
    }

    .sky-space--vertical {
      flex-direction: column;
    }
  `
}
