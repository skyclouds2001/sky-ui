<script setup>
  import CodeBlock from './../CodeBlock.vue'
  import './../../../src/text'
</script>

# Text

[[toc]]

## Basic usage

<code-block>
  <sky-text>text</sky-text>
  <sky-text type="primary">text</sky-text>
  <sky-text type="success">text</sky-text>
  <sky-text type="warning">text</sky-text>
  <sky-text type="danger">text</sky-text>
  <sky-text type="info">text</sky-text>
</code-block>

## Size

<code-block>
  <sky-text size="large">text</sky-text>
  <sky-text>text</sky-text>
  <sky-text size="small">text</sky-text>
</code-block>

## Ellipsis

<code-block style="width: 100px;">
  <sky-text truncated>text-text-text-text-text-text-text-text-text-text</sky-text>
  <sky-text line-clamp="2">text-text-text-text-text-text-text-text-text-text</sky-text>
</code-block>
