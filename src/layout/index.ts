import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sky-row')
export class SkyRow extends LitElement {
  protected render() {
    return html`
      <div class="sky-row">
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
    }
  `
}

@customElement('sky-col')
export class SkyCol extends LitElement {
  @property({
    type: Number,
  })
  span: number = 24

  protected render() {
    return html`
      <style>
        :host {
          width: ${(this.span * 100) / 24}%;
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
