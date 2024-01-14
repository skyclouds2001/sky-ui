import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
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

  @property({
    type: String,
  })
  alignment: string = 'center'

  @property({
    type: Boolean,
  })
  fill: boolean = false

  @property({
    type: Number,
  })
  'fill-ratio': number = 100

  protected render() {
    const ids = Array(this.children.length)
      .fill(0)
      .map(() => window.crypto.randomUUID())
    Array.from(this.children).forEach((el, i) => {
      el.setAttribute('slot', ids[i])
    })
    return html`
      <div
        class="sky-space sky-space--${this.direction}"
        style=${styleMap({
          'flex-wrap': this.wrap ? 'wrap' : 'nowrap',
          gap: `${this.size}px`,
          'align-items': this.alignment,
        })}
      >
        ${repeat(
          ids,
          (id) => id,
          (id) => html`
            <div
              class="sky-space--item"
              style=${styleMap({
                'flex-grow': this.fill ? 1 : 0,
                'min-width': this.fill ? `${this['fill-ratio']}%` : 'auto',
              })}
            >
              <slot name=${id}></slot>
            </div>
          `
        )}
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

    .sky-space--item > * {
      flex: 1;
    }

    .sky-space--horizontal {
      flex-direction: row;
    }

    .sky-space--vertical {
      flex-direction: column;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-space': SkySpace
  }
}
