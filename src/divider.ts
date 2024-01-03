import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sky-divider')
export class SkyDivider extends LitElement {
  @property({
    type: String,
  })
  direction: 'horizontal' | 'vertical' = 'horizontal'

  @property({
    type: String,
  })
  'border-style': 'none' | 'solid' | 'hidden' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' = 'solid'

  protected render() {
    return html`<div class="sky-divider sky-divider--${this.direction}" style="border-style: ${this['border-style']}" role="separator"></div>`
  }

  static styles = css`
    .sky-divider {
      position: relative;
      border-width: 0;
      border-style: none;
    }

    .sky-divider--horizontal {
      display: block;
      height: 1px;
      width: 100%;
      border-top-width: 1px;
      border-top-color: #dcdfe6;
    }

    .sky-divider--vertical {
      display: inline-block;
      height: 1em;
      width: 1px;
      border-left-width: 1px;
      border-left-color: #dcdfe6;
      vertical-align: middle;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-divider': SkyDivider
  }
}
