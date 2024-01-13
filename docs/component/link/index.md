<script setup>
  import CodeBlock from './../CodeBlock.vue'
  import './../../../src/link'
</script>

# Link

[[toc]]

## Basic usage

<code-block>
  <sky-link href="/">link</sky-link>
  <sky-link href="/" type="primary">link</sky-link>
  <sky-link href="/" type="success">link</sky-link>
  <sky-link href="/" type="warning">link</sky-link>
  <sky-link href="/" type="danger">link</sky-link>
  <sky-link href="/" type="info">link</sky-link>
</code-block>

## Underline

<code-block>
  <sky-link href="/" underline>link</sky-link>
  <sky-link href="/" type="primary" underline>link</sky-link>
  <sky-link href="/" type="success" underline>link</sky-link>
  <sky-link href="/" type="warning" underline>link</sky-link>
  <sky-link href="/" type="danger" underline>link</sky-link>
  <sky-link href="/" type="info" underline>link</sky-link>
</code-block>

## Disabled

<code-block>
  <sky-link href="/" underline disabled>link</sky-link>
  <sky-link href="/" type="primary" underline disabled>link</sky-link>
  <sky-link href="/" type="success" underline disabled>link</sky-link>
  <sky-link href="/" type="warning" underline disabled>link</sky-link>
  <sky-link href="/" type="danger" underline disabled>link</sky-link>
  <sky-link href="/" type="info" underline disabled>link</sky-link>
</code-block>

## Size

<code-block>
  <sky-link href="/" size="large">link</sky-link>
  <sky-link href="/">link</sky-link>
  <sky-link href="/" size="small">link</sky-link>
</code-block>
