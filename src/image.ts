import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { when } from 'lit/directives/when.js'

@customElement('sky-image')
export class SkyImage extends LitElement {
  @property({
    type: String,
  })
  src: string = ''

  @property({
    type: Number,
  })
  width?: number

  @property({
    type: Number,
  })
  height?: number

  @property({
    type: String,
  })
  alt?: string

  @property({
    type: String,
  })
  crossorigin?: 'anonymous' | 'use-credentials'

  @property({
    type: String,
  })
  loading?: 'eager' | 'lazy'

  @property({
    type: String,
  })
  referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

  @property({
    type: String,
  })
  decoding?: 'sync' | 'async' | 'auto'

  @property({
    type: String,
  })
  fetchpriority?: 'high' | 'low' | 'auto'

  @property({
    type: String,
  })
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

  @state()
  private isLoading = true

  @state()
  private isError = false

  private readonly onLoad = () => {
    this.isLoading = false
    this.isError = false
  }

  private readonly onError = () => {
    this.isLoading = false
    this.isError = true
  }

  protected render() {
    return html`
      <div class="sky-image">
        <img
          ?hidden=${this.isError}
          class="sky-image--inner"
          style=${styleMap({
            'object-fit': this.fit,
            opacity: this.isLoading ? 0 : 1,
          })}
          src=${this.src}
          width=${ifDefined(this.width)}
          height=${ifDefined(this.height)}
          alt=${ifDefined(this.alt)}
          crossorigin=${ifDefined(this.crossorigin)}
          loading=${ifDefined(this.loading)}
          referrerpolicy=${ifDefined(this.referrerpolicy)}
          decoding=${ifDefined(this.decoding)}
          fetchpriority=${ifDefined(this.fetchpriority)}
          @load=${this.onLoad}
          @error=${this.onError}
        />
        ${when(
          this.isLoading,
          () => html`
            <div class="sky-image--placeholder">
              <slot name="placeholder">loading</slot>
            </div>
          `
        )}
        ${when(
          this.isError,
          () => html`
            <div class="sky-image--error" ?hidden=${!this.isError}>
              <slot name="error">error</slot>
            </div>
          `
        )}
      </div>
    `
  }

  static styles = css`
    .sky-image {
      position: relative;
      display: inline-block;
      overflow: hidden;
    }

    .sky-image--inner,
    .sky-image--placeholder,
    .sky-image--error {
      width: 100%;
      height: 100%;
    }

    .sky-image--placeholder,
    .sky-image--error {
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      background-color: #f5f7fa;
      color: #a8abb2;
      font-size: 14px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-image': SkyImage
  }
}
