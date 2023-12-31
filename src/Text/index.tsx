import { type App, defineComponent, type Plugin, type PropType, type SlotsType } from 'vue'
import './index.css'

const SkyText = /* #__PURE__ */ defineComponent({
  name: 'SkyText',
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'>,
      default: 'default',
      required: false,
      validator: (value: string) => ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(value),
    },
    size: {
      type: String as PropType<'large' | 'default' | 'small'>,
      default: 'default',
      required: false,
      validator: (value: string) => ['large', 'default', 'small'].includes(value),
    },
    ellipsis: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  slots: Object as SlotsType<{
    default: () => unknown
  }>,
  setup: (props, { expose, slots }) => {
    expose()

    return () => (
      <>
        <span class={['sky-text', props.type !== 'default' ? `sky-text-${props.type}` : '', props.size !== 'default' ? `sky-text-${props.size}` : '', props.ellipsis ? 'sky-text-ellipsis' : '']}>{slots.default?.()}</span>
      </>
    )
  },
})

SkyText.install = (app: App) => {
  app.component(SkyText.name, SkyText)
}

export default SkyText as typeof SkyText & Plugin
