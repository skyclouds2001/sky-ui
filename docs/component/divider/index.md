<script setup>
  import CodeBlock from './../CodeBlock.vue'
  import './../../../src/divider'
</script>

# Divider

[[toc]]

## Basic usage

<code-block>
  divider
  <sky-divider></sky-divider>
  divider
  <sky-divider border-style="dashed"></sky-divider>
  divider
</code-block>

## Direction

<code-block>
  divider
  <sky-divider direction="vertical"></sky-divider>
  divider
  <sky-divider direction="vertical"></sky-divider>
  divider
</code-block>

## Content position

<code-block>
  divider
  <sky-divider content-position="left">divider</sky-divider>
  divider
  <sky-divider>divider</sky-divider>
  divider
  <sky-divider content-position="right">divider</sky-divider>
  divider
</code-block>
