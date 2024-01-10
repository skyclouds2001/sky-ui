import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'

@customElement('sky-button')
export class SkyButton extends LitElement {
  @property({
    type: String,
  })
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  @property({
    type: Boolean,
  })
  round: boolean = false

  @property({
    type: Boolean,
  })
  circle: boolean = false

  @property({
    type: Boolean,
  })
  plain: boolean = false

  @property({
    type: Boolean,
  })
  link: boolean = false

  @property({
    type: Boolean,
  })
  text: boolean = false

  @property({
    type: Boolean,
  })
  disabled: boolean = false

  @property({
    type: String,
  })
  size: 'default' | 'large' | 'small' = 'default'

  @property({
    type: String,
  })
  'native-type'?: 'button' | 'submit' | 'reset'

  @property({
    type: Boolean,
  })
  block: boolean = false

  protected render() {
    return html`
      <button
        class="sky-button ${classMap({
          [`sky-button--${this.type}`]: this.type != null,
          'sky-button--round': this.round,
          'sky-button--circle': this.circle,
          'sky-button--disabled': this.disabled,
          'sky-button--plain': this.plain,
          'sky-button--link': this.link,
          'sky-button--text': this.text,
          [`sky-button--${this.size}`]: this.size != null,
          'sky-button--block': this.block,
        })}"
        ?disabled=${this.disabled}
        aria-disabled=${(this.disabled ? 'true' : nothing) as 'true'}
        type=${ifDefined(this['native-type'])}
      >
        <span>
          <slot></slot>
        </span>
      </button>
    `
  }

  static styles = css`
    :host {
      --sky-button-font-size: 14px;
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
      --sky-button-disabled-text-color: #a8abb2;
      --sky-button-disabled-bg-color: #ffffff;
      --sky-button-disabled-border-color: #e4e7ed;
      --sky-button-hover-link-text-color: #909399;
    }

    .sky-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
      color: var(--sky-button-text-color);
      font-weight: 500;
      font-size: var(--sky-button-font-size);
      line-height: 1;
      white-space: nowrap;
      text-align: center;
      vertical-align: middle;
      height: 2em;
      box-sizing: border-box;
      background-color: var(--sky-button-bg-color);
      border: 1px solid var(--sky-button-border-color);
      border-radius: 0.25em;
      outline: none;
      cursor: pointer;
      user-select: none;
      appearance: none;
    }

    .sky-button:where(:hover, :focus) {
      color: var(--sky-button-hover-text-color);
      background-color: var(--sky-button-hover-bg-color);
      border-color: var(--sky-button-hover-border-color);
    }

    .sky-button:active {
      color: var(--sky-button-active-text-color);
      background-color: var(--sky-button-active-bg-color);
      border-color: var(--sky-button-active-border-color);
    }

    .sky-button:focus-visible {
      outline: 2px solid var(--sky-button-outline-color);
      outline-offset: 1px;
    }

    .sky-button--primary {
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
      --sky-button-disabled-text-color: #ffffff;
      --sky-button-disabled-bg-color: #a0cfff;
      --sky-button-disabled-border-color: #a0cfff;
      --sky-button-hover-link-text-color: #a0cfff;
    }

    .sky-button--success {
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
      --sky-button-disabled-text-color: #ffffff;
      --sky-button-disabled-bg-color: #b3e19d;
      --sky-button-disabled-border-color: #b3e19d;
      --sky-button-hover-link-text-color: #b3e19d;
    }

    .sky-button--warning {
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
      --sky-button-disabled-text-color: #ffffff;
      --sky-button-disabled-bg-color: #f3d19e;
      --sky-button-disabled-border-color: #f3d19e;
      --sky-button-hover-link-text-color: #f3d19e;
    }

    .sky-button--danger {
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
      --sky-button-disabled-text-color: #ffffff;
      --sky-button-disabled-bg-color: #fab6b6;
      --sky-button-disabled-border-color: #fab6b6;
      --sky-button-hover-link-text-color: #fab6b6;
    }

    .sky-button--info {
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
      --sky-button-disabled-text-color: #ffffff;
      --sky-button-disabled-bg-color: #c8c9cc;
      --sky-button-disabled-border-color: #c8c9cc;
      --sky-button-hover-link-text-color: #c8c9cc;
    }

    .sky-button.sky-button--disabled:where(*, :hover, :focus) {
      cursor: not-allowed;
      color: var(--sky-button-disabled-text-color);
      background-color: var(--sky-button-disabled-bg-color);
      border-color: var(--sky-button-disabled-border-color);
    }

    .sky-button.sky-button--round {
      border-radius: 1em;
    }

    .sky-button.sky-button--circle {
      border-radius: 50%;
      width: 2em;
    }

    .sky-button.sky-button--plain {
      --sky-button-hover-text-color: #409eff;
      --sky-button-hover-bg-color: #ffffff;
      --sky-button-hover-border-color: #409eff;
    }

    .sky-button.sky-button--link {
      background-color: transparent;
      border-color: transparent;
    }

    .sky-button.sky-button--link:hover {
      color: var(--sky-button-hover-link-text-color);
    }

    .sky-button--text {
      color: var(--sky-button-text-color);
      background-color: transparent;
      border-width: 0;
      border-color: transparent;
    }

    .sky-button.sky-button--text.sky-button--disabled {
      background-color: transparent;
      border-color: transparent;
    }

    .sky-button.sky-button--text:not(.sky-button--disabled):where(:hover, :focus, :active) {
      background-color: #f5f7fa;
    }

    .sky-button--primary:is(.sky-button--plain, .sky-button--link, .sky-button--text) {
      --sky-button-text-color: #409eff;
      --sky-button-bg-color: #ecf5ff;
      --sky-button-border-color: #a0cfff;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #409eff;
      --sky-button-hover-border-color: #409eff;
    }

    .sky-button--success:is(.sky-button--plain, .sky-button--link, .sky-button--text) {
      --sky-button-text-color: #67c23a;
      --sky-button-bg-color: #f0f9eb;
      --sky-button-border-color: #b3e19d;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #67c23a;
      --sky-button-hover-border-color: #67c23a;
    }

    .sky-button--warning:is(.sky-button--plain, .sky-button--link, .sky-button--text) {
      --sky-button-text-color: #e6a23c;
      --sky-button-bg-color: #fdf6ec;
      --sky-button-border-color: #f3d19e;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #e6a23c;
      --sky-button-hover-border-color: #e6a23c;
    }

    .sky-button--danger:is(.sky-button--plain, .sky-button--link, .sky-button--text) {
      --sky-button-text-color: #f56c6c;
      --sky-button-bg-color: #fef0f0;
      --sky-button-border-color: #fab6b6;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #f56c6c;
      --sky-button-hover-border-color: #f56c6c;
    }

    .sky-button--info:is(.sky-button--plain, .sky-button--link, .sky-button--text) {
      --sky-button-text-color: #909399;
      --sky-button-bg-color: #f4f4f5;
      --sky-button-border-color: #c8c9cc;
      --sky-button-hover-text-color: #ffffff;
      --sky-button-hover-bg-color: #909399;
      --sky-button-hover-border-color: #909399;
    }

    .sky-button--primary:is(.sky-button--plain, .sky-button--link, .sky-button--text).sky-button--disabled:where(*, :hover, :focus) {
      --sky-button-disabled-text-color: #a0cfff;
      --sky-button-disabled-bg-color: #ecf5ff;
      --sky-button-disabled-border-color: #d9ecff;
    }

    .sky-button--success:is(.sky-button--plain, .sky-button--link, .sky-button--text).sky-button--disabled:where(*, :hover, :focus) {
      --sky-button-disabled-text-color: #b3e19d;
      --sky-button-disabled-bg-color: #f0f9eb;
      --sky-button-disabled-border-color: #e1f3d8;
    }

    .sky-button--warning:is(.sky-button--plain, .sky-button--link, .sky-button--text).sky-button--disabled:where(*, :hover, :focus) {
      --sky-button-disabled-text-color: #f3d19e;
      --sky-button-disabled-bg-color: #fdf6ec;
      --sky-button-disabled-border-color: #faecd8;
    }

    .sky-button--danger:is(.sky-button--plain, .sky-button--link, .sky-button--text).sky-button--disabled:where(*, :hover, :focus) {
      --sky-button-disabled-text-color: #fab6b6;
      --sky-button-disabled-bg-color: #fef0f0;
      --sky-button-disabled-border-color: #fde2e2;
    }

    .sky-button--info:is(.sky-button--plain, .sky-button--link, .sky-button--text).sky-button--disabled:where(*, :hover, :focus) {
      --sky-button-disabled-text-color: #c8c9cc;
      --sky-button-disabled-bg-color: #f4f4f5;
      --sky-button-disabled-border-color: #e9e9eb;
    }

    .sky-button.sky-button--large {
      --sky-button-font-size: 16px;
    }

    .sky-button.sky-button--small {
      --sky-button-font-size: 12px;
    }

    .sky-button.sky-button--block {
      width: 100%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-button': SkyButton
  }
}
