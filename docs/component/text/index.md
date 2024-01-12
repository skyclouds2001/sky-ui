<script setup>
  import './../../../src/text'
</script>

# Text

## Basic usage

<div>
  <sky-text>text</sky-text>
  <sky-text type="primary">text</sky-text>
  <sky-text type="success">text</sky-text>
  <sky-text type="warning">text</sky-text>
  <sky-text type="danger">text</sky-text>
  <sky-text type="info">text</sky-text>
</div>

## Size

<div>
  <sky-text size="large">text</sky-text>
  <sky-text>text</sky-text>
  <sky-text size="small">text</sky-text>
</div>

## Ellipsis

<div style="width: 100px;">
  <sky-text truncated>text-text-text-text-text-text-text-text-text-text</sky-text>
  <sky-text line-clamp="2">text-text-text-text-text-text-text-text-text-text</sky-text>
</div>
