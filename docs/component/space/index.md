<script setup>
  import CodeBlock from './../CodeBlock.vue'
  import './../../../src/space'

    window.requestAnimationFrame(() => {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`
      .sky-space {
        width: 100%;
        height: 100%;
      }
    `)
    document.querySelectorAll('sky-space').forEach((host) => {
      host.shadowRoot.adoptedStyleSheets.push(sheet)
    })
  })
</script>

# Space

[[toc]]

## Basic usage

<code-block>
  <sky-space>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>

## Direction

<code-block>
  <sky-space direction="vertical">
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>

## Alignment

<code-block height="200px">
  <sky-space>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>

<code-block height="200px">
  <sky-space alignment="flex-start">
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>

<code-block height="200px">
  <sky-space alignment="flex-end">
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100px; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>

## Fill

<code-block>
  <sky-space fill>
    <div style="width: 100%; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100%; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="width: 100%; height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>

<code-block>
  <sky-space fill fill-ratio="80">
    <div style="height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
    <div style="height: 100px; border: 1px solid #dedfe0; display: flex; justify-content: center; align-items: center;">space</div>
  </sky-space>
</code-block>
