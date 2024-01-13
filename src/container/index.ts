import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('sky-container')
export class SkyContainer extends LitElement {
  protected render() {
    return html`
      <section
        class="sky-container"
        style=${styleMap({
          'flex-direction': Array.from(this.childNodes).some((v) => v.nodeName === 'SKY-ASIDE') ? 'row' : 'column',
        })}
      >
        <slot></slot>
      </section>
    `
  }

  static styles = css`
    .sky-container {
      display: flex;
      flex: 1;
      flex-basis: auto;
      box-sizing: border-box;
    }
  `
}

@customElement('sky-main')
export class SkyMain extends LitElement {
  protected render() {
    return html`
      <main class="sky-main">
        <slot></slot>
      </main>
    `
  }

  static styles = css`
    .sky-main {
      display: block;
      padding: 20px;
      flex: 1;
      flex-basis: auto;
      box-sizing: border-box;
      overflow: auto;
    }
  `
}

@customElement('sky-header')
export class SkyHeader extends LitElement {
  protected render() {
    return html`
      <header class="sky-header">
        <slot></slot>
      </header>
    `
  }

  static styles = css`
    .sky-header {
      height: 60px;
      padding: 0 20px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
  `
}

@customElement('sky-footer')
export class SkyFooter extends LitElement {
  protected render() {
    return html`
      <footer class="sky-footer">
        <slot></slot>
      </footer>
    `
  }

  static styles = css`
    .sky-footer {
      height: 60px;
      padding: 0 20px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
  `
}

@customElement('sky-aside')
export class SkyAside extends LitElement {
  protected render() {
    return html`
      <aside class="sky-aside">
        <slot></slot>
      </aside>
    `
  }

  static styles = css`
    .sky-aside {
      width: 200px;
      height: 100%;
      padding: 20px 0;
      flex-shrink: 0;
      box-sizing: border-box;
      overflow: auto;
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
