<template>
    
</template>

<script>
    export default {
        name: "DragWrap",
        created() {
            this.toDom = ''
            this.fromDom = ''
            this.children = ''
            this.$on('dragstart', this.onDragStart)
            this.$on('dragenter', this.onDragEnter)
            this.$on('dragend', this.onDragEnd)
            this.$on('putChild', child => {
                this.children.push(child)
            })
        },
        methods: {
            onDragStart(el) {
                this.fromdom = el
            },
            onDragenter(el) {
                this.toDom = el
                if (this.fromDom === this.toDom) {
                    return
                }
            },
            onDragend () {
            }
        }
    }
</script>

<style scoped>

</style>
