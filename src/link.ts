import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

@customElement('sky-link')
export class SkyLink extends LitElement {
  @property({
    type: String,
  })
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  @property({
    type: String,
  })
  href: string = ''

  @property({
    type: Boolean,
  })
  underline: boolean = false

  protected render() {
    return html`
      <a
        class="sky-link ${classMap({
          [`sky-link--${this.type}`]: this.type != null,
          'sky-link--underline': this.underline,
        })}"
        href=${this.href}
      >
        <span class="sky-link--inner">
          <slot></slot>
        </span>
      </a>
    `
  }

  static styles = css`
    :host {
      --sky-link-text-color: #606266;
      --sky-link-hover-text-color: #409eff;
      --sky-link-disabled-text-color: #a8abb2;
    }

    .sky-link {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
      color: var(--sky-link-text-color);
    }

    .sky-link:hover {
      color: var(--sky-link-hover-text-color);
    }

    .sky-link--inner {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    .sky-link:hover.sky-link--underline::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      border-bottom: 1px solid var(--sky-link-hover-text-color);
    }

    .sky-link--primary {
      --sky-link-text-color: #409eff;
      --sky-link-hover-text-color: #79bbff;
      --sky-link-disabled-text-color: #a0cfff;
    }

    .sky-link--success {
      --sky-link-text-color: #67c23a;
      --sky-link-hover-text-color: #95d475;
      --sky-link-disabled-text-color: #b3e19d;
    }

    .sky-link--warning {
      --sky-link-text-color: #e6a23c;
      --sky-link-hover-text-color: #eebe77;
      --sky-link-disabled-text-color: #f3d19e;
    }

    .sky-link--danger {
      --sky-link-text-color: #f56c6c;
      --sky-link-hover-text-color: #f89898;
      --sky-link-disabled-text-color: #fab6b6;
    }

    .sky-link--info {
      --sky-link-text-color: #909399;
      --sky-link-hover-text-color: #b1b3b8;
      --sky-link-disabled-text-color: #c8c9cc;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-link': SkyLink
  }
}
