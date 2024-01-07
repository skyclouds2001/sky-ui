import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('sky-divider')
export class SkyIcon extends LitElement {
  protected render() {
    return html`
      <i class="sky-icon">
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
