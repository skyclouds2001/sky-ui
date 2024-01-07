import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('sky-image')
export class SkyImage extends LitElement {
  @property({
    type: String,
  })
  src: string = ''

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

  protected render() {
    return html`
      <div class="sky-image">
        <img
          class="sky-image--inner"
          style=${styleMap({
            'object-fit': this.fit,
          })}
          src=${this.src}
          alt=${(this.alt ?? nothing) as string}
          crossorigin=${(this.crossorigin ?? nothing) as 'anonymous' | 'use-credentials'}
          loading=${(this.loading ?? nothing) as 'eager' | 'lazy'}
          referrerpolicy=${(this.referrerpolicy ?? nothing) as 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'}
          decoding=${(this.decoding ?? nothing) as 'sync' | 'async' | 'auto'}
          fetchpriority=${this.fetchpriority ?? nothing}
        />
      </div>
    `
  }

  static styles = css`
    .sky-image {
      position: relative;
      display: inline-block;
      overflow: hidden;
    }

    .sky-image--inner {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-image': SkyImage
  }
}
