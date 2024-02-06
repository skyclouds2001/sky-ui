import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('sky-row')
export class SkyRow extends LitElement {
  @property({
    type: Number,
  })
  gutter: number = 0

  @property({
    type: String,
  })
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

  @property({
    type: String,
  })
  align?: 'top' | 'middle' | 'bottom'

  protected render() {
    return html`
      <div
        class="sky-row"
        style=${styleMap({
          gap: `${this.gutter}px`,
          'justify-content': this.justify,
          'align-items': this.align,
        })}
      >
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
    }

    .sky-row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      position: relative;
    }
  `
}

@customElement('sky-col')
export class SkyCol extends LitElement {
  @property({
    type: Number,
  })
  span: number = 24

  @property({
    type: Number,
  })
  offset: number = 0

  protected render() {
    const gutter = Number.parseInt(this.parentElement?.getAttribute('gutter') ?? '0')

    return html`
      <style>
        :host {
          width: calc(${(this.span / 24) * 100}% - ${gutter}px);
          flex: 0 0 calc(${(this.span / 24) * 100}% - ${gutter}px);
          position: relative;
          left: ${(this.offset / 24) * 100}%;
        }

        :host(:first-child) {
          margin-left: ${gutter / 2}px !important;
        }

        :host(:last-child) {
          margin-right: ${gutter / 2}px !important;
        }
      </style>
      <div class="sky-col">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .sky-col {
      box-sizing: border-box;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-row': SkyRow
    'sky-col': SkyCol
  }
}
