<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "iForm",
        data () {
          return {
              fields: []
          }
        },
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object
            }
        },
        provide () {
          return {
              form: this
          }
        },
        created () {
            this.$on('on-form-item-add', (field) => {
                if (field) {
                    this.fields.push(field)
                }
            })
            this.$on('on-form-item-remove', (field) => {
                if (field) {
                    if (field.prop) {
                        this.fields.splice(this.fields.indexOf(field), 1)
                    }
                }
            })
        },
        methods: {
            resetFields () {
                this.fields.forEach(field => {
                    field.reset()
                })
            },
            validate (callback) {
                return new Promise(resolve => {
                    let valid = true
                    let count = 0
                    this.fields.forEach(field => {
                        field.validate('', errors => {
                            if (errors) {
                                valid = false
                            }
                            if (++count === this.fields.length) {
                                resolve(valid)
                                if (typeof callback === 'function') {
                                    callback(valid)
                                }
                            }
                        })
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
