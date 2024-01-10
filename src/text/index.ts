import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map'

@customElement('sky-text')
export class SkyText extends LitElement {
  @property({
    type: String,
  })
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  @property({
    type: String,
  })
  size?: 'large' | 'default' | 'small'

  protected render() {
    return html`
      <span
        class="sky-text ${classMap({
          [`sky-text--${this.type}`]: this.type != null,
          [`sky-link--${this.size}`]: this.size === 'large' || this.size === 'small',
        })}"
      >
        <slot></slot>
      </span>
    `
  }

  static styles = css`
    :host {
      --sky-text-text-color: #606266;
    }

    .sky-text {
      font-size: 14px;
      color: var(--sky-text-text-color);
    }

    .sky-text--primary {
      --sky-text-text-color: #409eff;
    }

    .sky-text--success {
      --sky-text-text-color: #67c23a;
    }

    .sky-text--warning {
      --sky-text-text-color: #e6a23c;
    }

    .sky-text--danger {
      --sky-text-text-color: #f56c6c;
    }

    .sky-text--info {
      --sky-text-text-color: #909399;
    }

    .sky-text--large {
      font-size: 16px;
    }

    .sky-text--small {
      font-size: 12px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-text': SkyText
  }
}
