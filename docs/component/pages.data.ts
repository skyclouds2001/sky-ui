import { defineLoader } from 'vitepress'

declare const data: string[]

export { data }

export default defineLoader({
  watch: './**/*.md',
  async load() {
    try {
      const { readdir } = await import('node:fs/promises')
      return (
        await readdir('./docs/component', {
          withFileTypes: true,
        })
      )
        .filter((dir) => dir.isDirectory())
        .map((dir) => ({
          text: dir.name
            .split('')
            .map((c, i) => (i === 0 ? c.toUpperCase() : c))
            .join(''),
          link: `/component/${dir.name}/`,
        }))
    } catch {
      return []
    }
  },
})
