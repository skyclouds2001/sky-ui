<script setup lang="ts">
defineOptions({
  name: 'CodeBlock',
})

const props = defineProps<{
  width?: string
  height?: string
}>()
</script>

<template>
  <div class="code-block" :class="$style.container">
    <div :class="$style.box" :style="props">
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.container {
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  margin: 10px 0;
  padding: 0;
}

.box {
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 1rem;
}

:root {
  .container {
    border: 1px solid #dcdcdc;
  }

  .box {
    background-color: #ffffff;
  }
}

:root:global(.dark) {
  .container {
    border: 1px solid #4c4c4c;
  }

  .box {
    background-color: #141414;
  }
}
</style>
