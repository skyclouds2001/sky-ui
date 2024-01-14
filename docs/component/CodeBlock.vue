<script setup>
defineOptions({
  name: 'CodeBlock',
})
</script>

<template>
  <div class="code-block" :class="$style.container">
    <div :class="$style.box">
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.container {
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px 0;
  padding: 0;
}

.box {
  box-sizing: border-box;
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
