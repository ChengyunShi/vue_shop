<template>
    <label>
        <span>
            <input
                    type="radio"
                    :disabled="disabled"
                    :name="name"
                    :value="label"
                    :checked="currentValue"
                    @change="change"
            />
        </span>
        <slot></slot>
    </label>
</template>

<script>
    import Emitter from '@/mixins/emitter'
    export default {
        name: "iRadio",
        mixins: [Emitter],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: String,
            value: [Number, String, Boolean],
            label: [Number, String, Boolean]
        },
        data () {
          return {
              currentValue: this.value
          }
        },
        mounted () {
            this.updateModel()
        },
        watch: {
            value () {
                this.updateModel()
            }
        },
        methods: {
            updateModel () {
                this.currentValue = this.value === this.label
            },
            change (event) {
                if (this.disabled) {
                    return
                }

                const checked = event.target.checked

                this.currentValue = checked
                this.$emit('input', this.label)
            }
        }
    }
</script>

<style scoped>

</style>
