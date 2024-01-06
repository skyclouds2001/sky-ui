import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('sky-space')
export class SkySpace extends LitElement {
  @property({
    type: String,
  })
  direction: 'vertical' | 'horizontal' = 'horizontal'

  @property({
    type: Boolean,
  })
  wrap: boolean = true

  @property({
    type: Number,
  })
  size: number = 12

  protected render() {
    return html`
      <div
        class="sky-space sky-space--${this.direction}"
        style=${styleMap({
          'flex-wrap': this.wrap ? 'wrap' : 'nowrap',
          gap: `${this.size}px`,
        })}
      >
        ${Array.from(this.childNodes).map((el) => html`<div class="sky-space--item">${el}</div>`)}
      </div>
    `
  }

  static styles = css`
    .sky-space {
      display: inline-flex;
    }

    .sky-space--item {
      display: flex;
    }

    .sky-space--horizontal {
      flex-direction: row;
    }

    .sky-space--vertical {
      flex-direction: column;
    }
  `
}
