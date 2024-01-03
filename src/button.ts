import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sky-button')
export class SkyButton extends LitElement {
  @property()
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  render() {
    return html`
      <button class="sky-button ${this.type != null ? `sky-button-${this.type}` : ''}">
        <slot></slot>
      </button>
    `
  }

  static styles = css`
    :host {
      --sky-button-text-color: #606266;
      --sky-button-bg-color: #ffffff;
      --sky-button-border-color: #dcdfe6;
      --sky-button-active-text-color: #409eff;
      --sky-button-active-bg-color: #ecf5ff;
      --sky-button-active-border-color: #409eff;
      --sky-button-hover-text-color: #409eff;
      --sky-button-hover-bg-color: #ecf5ff;
      --sky-button-hover-border-color: #c6e2ff;
      --sky-button-outline-color: #a0cfff;
    }

    .sky-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: var(--sky-button-text-color);
      font-weight: 500;
      font-size: 16px;
      line-height: 1;
      white-space: nowrap;
      text-align: center;
      vertical-align: middle;
      height: 2em;
      background-color: var(--sky-button-bg-color);
      border: 1px solid var(--sky-button-border-color);
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      user-select: none;
      appearance: none;
    }

    .sky-button:hover .sky-button:focus {
      --sky-button-text-color: var(--sky-button-hover-text-color);
      --sky-button-bg-color: var(--sky-button-hover-bg-color);
      --sky-button-border-color: var(--sky-button-hover-border-color);
    }

    .sky-button:active {
      --sky-button-text-color: var(--sky-button-active-text-color);
      --sky-button-bg-color: var(--sky-button-active-bg-color);
      --sky-button-border-color: var(--sky-button-active-border-color);
    }

    .sky-button:focus-visible {
      outline: 2px solid var(--sky-button-outline-color);
      outline-offset: 1px;
    }

    .sky-button-primary {
      --sky-button-text-color: #ffffff;
      --sky-button-bg-color: #409eff;
      --sky-button-border-color: #409eff;
      --sky-button-active-text-color: #ffffff;
      --sky-button-active-bg-color: #337ecc;
      --sky-button-active-border-color: #337ecc;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #79bbff;
      --sky-button-hover-border-color: #79bbff;
      --sky-button-outline-color: #a0cfff;
    }

    .sky-button-success {
      --sky-button-text-color: #ffffff;
      --sky-button-bg-color: #67c23a;
      --sky-button-border-color: #67c23a;
      --sky-button-active-text-color: #ffffff;
      --sky-button-active-bg-color: #529b2e;
      --sky-button-active-border-color: #529b2e;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #95d475;
      --sky-button-hover-border-color: #95d475;
      --sky-button-outline-color: #b3e19d;
    }

    .sky-button-warning {
      --sky-button-text-color: #ffffff;
      --sky-button-bg-color: #e6a23c;
      --sky-button-border-color: #e6a23c;
      --sky-button-active-text-color: #ffffff;
      --sky-button-active-bg-color: #b88230;
      --sky-button-active-border-color: #b88230;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #eebe77;
      --sky-button-hover-border-color: #eebe77;
      --sky-button-outline-color: #f3d19e;
    }

    .sky-button-danger {
      --sky-button-text-color: #ffffff;
      --sky-button-bg-color: #f56c6c;
      --sky-button-border-color: #f56c6c;
      --sky-button-active-text-color: #ffffff;
      --sky-button-active-bg-color: #c45656;
      --sky-button-active-border-color: #c45656;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #f89898;
      --sky-button-hover-border-color: #f89898;
      --sky-button-outline-color: #fab6b6;
    }

    .sky-button-info {
      --sky-button-text-color: #ffffff;
      --sky-button-bg-color: #909399;
      --sky-button-border-color: #909399;
      --sky-button-active-text-color: #ffffff;
      --sky-button-active-bg-color: #73767a;
      --sky-button-active-border-color: #73767a;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #b1b3b8;
      --sky-button-hover-border-color: #b1b3b8;
      --sky-button-outline-color: #c8c9cc;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-button': SkyButton
  }
}
