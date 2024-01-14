<script setup>
  import CodeBlock from './../CodeBlock.vue'
  import './../../../src/container'

  window.requestAnimationFrame(() => {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`
      .sky-header, .sky-main, .sky-footer, .sky-aside {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sky-header, .sky-footer {
        background-color: #d1edc4;
      }

      .sky-main {
        background-color: #f0f9eb;
      }

      .sky-aside {
        background-color: #e1f3d8;
      }

      .sky-main {
        height: 180px;
      }
    `)
    document.querySelectorAll('sky-header, sky-main, sky-footer, sky-aside').forEach((host) => {
      host.shadowRoot.adoptedStyleSheets.push(sheet)
    })
  })
</script>

<style>
  .code-block {
    sky-container, sky-main, sky-header, sky-footer {
      width: 100%;
    }
  }
</style>

# Container

[[toc]]

## Common layout

<code-block>
  <sky-container>
    <sky-header>header</sky-header>
    <sky-main>main</sky-main>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-main>main</sky-main>
    <sky-footer>footer</sky-footer>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-header>header</sky-header>
    <sky-main>main</sky-main>
    <sky-footer>footer</sky-footer>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-aside>aside</sky-aside>
    <sky-main>main</sky-main>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-header>header</sky-header>
    <sky-container>
      <sky-aside>aside</sky-aside>
      <sky-main>main</sky-main>
    </sky-container>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-header>header</sky-header>
    <sky-container>
      <sky-aside>aside</sky-aside>
      <sky-container>
        <sky-main>main</sky-main>
        <sky-footer>footer</sky-footer>
      </sky-container>
    </sky-container>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-aside>aside</sky-aside>
    <sky-container>
      <sky-header>header</sky-header>
      <sky-main>main</sky-main>
    </sky-container>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-aside>aside</sky-aside>
    <sky-container>
      <sky-main>main</sky-main>
      <sky-footer>footer</sky-footer>
    </sky-container>
  </sky-container>
</code-block>

<code-block>
  <sky-container>
    <sky-aside>aside</sky-aside>
    <sky-container>
      <sky-header>header</sky-header>
      <sky-main>main</sky-main>
      <sky-footer>footer</sky-footer>
    </sky-container>
  </sky-container>
</code-block>
