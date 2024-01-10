import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('sky-scrollbar')
export class SkyDivider extends LitElement {
  protected render() {
    return html`
      <div class="sky-scrollbar">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .sky-scrollbar {
      height: 100%;
      overflow: auto;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-scrollbar': SkyDivider
  }
}
