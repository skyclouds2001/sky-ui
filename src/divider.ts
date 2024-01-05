import { LitElement, css, html, nothing } from 'lit'
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

  @property({
    type: String,
  })
  'content-position': 'left' | 'right' | 'center' = 'center'

  protected render() {
    return html`
      <div class="sky-divider sky-divider--${this.direction}" style="border-style: ${this['border-style']}" role="separator">
        ${this.innerHTML.trim().length > 0
          ? html`
              <span class="sky-divider--content sky-divider--${this['content-position']}">
                <slot></slot>
              </span>
            `
          : nothing}
      </div>
    `
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
      margin: 24px 0;
      border-top: 1px solid #dcdfe6;
    }

    .sky-divider--vertical {
      display: inline-block;
      height: 1em;
      width: 1px;
      margin: 0 8px;
      border-left: 1px solid #dcdfe6;
      vertical-align: middle;
    }

    .sky-divider--content {
      position: absolute;
      padding: 0 20px;
      background-color: #ffffff;
      color: #303133;
      font-size: 14px;
    }

    .sky-divider--left {
      left: 20px;
      transform: translate(0, -50%);
    }

    .sky-divider--center {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .sky-divider--right {
      right: 20px;
      transform: translate(0, -50%);
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-divider': SkyDivider
  }
}
