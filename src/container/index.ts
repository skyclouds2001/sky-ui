import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('sky-container')
export class SkyContainer extends LitElement {
  protected render() {
    return html`
      <div class="sky-container">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .sky-container {
      //
    }
  `
}

@customElement('sky-main')
export class SkyMain extends LitElement {
  protected render() {
    return html`
      <div class="sky-main">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .sky-main {
      //
    }
  `
}

@customElement('sky-header')
export class SkyHeader extends LitElement {
  protected render() {
    return html`
      <div class="sky-header">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .sky-header {
      //
    }
  `
}

@customElement('sky-footer')
export class SkyFooter extends LitElement {
  protected render() {
    return html`
      <div class="sky-footer">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .sky-footer {
      //
    }
  `
}

@customElement('sky-aside')
export class SkyAside extends LitElement {
  protected render() {
    return html`
      <div class="sky-aside">
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .sky-aside {
      //
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sky-container': SkyContainer
    'sky-main': SkyMain
    'sky-header': SkyHeader
    'sky-footer': SkyFooter
    'sky-aside': SkyAside
  }
}
