<script setup>
  import { data } from './pages.data'
</script>

# Component

<ul>
  <li v-for="item in data" :key="item.text">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>
