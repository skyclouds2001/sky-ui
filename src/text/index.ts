import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

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

  @property({
    type: Boolean,
  })
  truncated: boolean = false

  @property({
    type: Number,
  })
  'line-clamp'?: number

  protected render() {
    return html`
      <span
        class="sky-text ${classMap({
          [`sky-text--${this.type}`]: this.type != null,
          [`sky-text--${this.size}`]: this.size === 'large' || this.size === 'small',
          'sky-text--ellipsis': this.truncated,
          'sky-text--line-clamp': this['line-clamp'] != null,
        })}"
        style=${styleMap({
          '-webkit-line-clamp': this['line-clamp'],
        })}
      >
        <slot></slot>
      </span>
    `
  }

  static styles = css`
    @property --sky-text-font-size {
      syntax: '<length>';
      inherits: true;
      initial-value: 14px;
    }

    @property --sky-text-text-color {
      syntax: '<color>';
      inherits: true;
      initial-value: #606266;
    }

    .sky-text {
      font-size: var(--sky-text-font-size);
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
      --sky-text-font-size: 16px;
    }

    .sky-text--small {
      --sky-text-font-size: 12px;
    }

    .sky-text--ellipsis {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .sky-text--line-clamp {
      display: -webkit-inline-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-text': SkyText
  }
}
