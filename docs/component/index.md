<script setup>
  import components from './../pages.json'
</script>

# Component

<ul>
  <li v-for="item in components" :key="item.text">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>
