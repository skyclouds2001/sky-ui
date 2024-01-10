import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('sky-icon')
export class SkyIcon extends LitElement {
  @property({
    type: Number,
  })
  size?: number

  @property({
    type: String,
  })
  color?: string

  protected render() {
    return html`
      <i
        class="sky-icon"
        style=${styleMap({
          'font-size': this.size != null ? `${this.size}px` : null,
          color: this.color,
        })}
      >
        <slot></slot>
      </i>
    `
  }

  static styles = css`
    .sky-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 1em;
      height: 1em;
      fill: currentColor;
      line-height: 1em;
      font-size: inherit;
      color: inherit;
    }

    .sky-icon svg {
      width: 1em;
      height: 1em;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-icon': SkyIcon
  }
}
