import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('sky-container')
export class SkyContainer extends LitElement {
  @property({
    type: String,
  })
  direction?: 'row' | 'column'

  protected render() {
    return html`
      <section
        class="sky-container"
        style=${styleMap({
          'flex-direction': this.direction ?? (Array.from(this.childNodes).some((v) => v.nodeName === 'SKY-ASIDE') ? 'row' : 'column'),
        })}
      >
        <slot></slot>
      </section>
    `
  }

  static styles = css`
    .sky-container {
      width: 100%;
      height: 100%;
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
      width: 100%;
      height: 100%;
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
  @property({
    type: Number,
  })
  height: number = 60

  protected render() {
    return html`
      <header class="sky-header" style="--sky-header-height: ${`${this.height}px`}">
        <slot></slot>
      </header>
    `
  }

  static styles = css`
    .sky-header {
      width: 100%;
      height: var(--sky-header-height);
      padding: 0 20px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
  `
}

@customElement('sky-footer')
export class SkyFooter extends LitElement {
  @property({
    type: Number,
  })
  height: number = 60

  protected render() {
    return html`
      <footer class="sky-footer" style="--sky-footer-height: ${`${this.height}px`}">
        <slot></slot>
      </footer>
    `
  }

  static styles = css`
    .sky-footer {
      width: 100%;
      height: var(--sky-footer-height);
      padding: 0 20px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
  `
}

@customElement('sky-aside')
export class SkyAside extends LitElement {
  @property({
    type: Number,
  })
  width: number = 200

  protected render() {
    return html`
      <aside class="sky-aside" style="--sky-aside-width: ${`${this.width}px`}">
        <slot></slot>
      </aside>
    `
  }

  static styles = css`
    @property --sky-aside-width {
      syntax: '<length>';
      inherits: true;
      initial-value: 200px;
    }

    .sky-aside {
      width: var(--sky-aside-width);
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
