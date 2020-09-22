<template>
    <div
            @dragstart.stop="onDragStart"
            @dragenter.stop="onDragEnter"
            @dragend.stop="onDragEnd"
            draggable
            class="__drag_item"
    >
        <slot name="drag"/>
    </div>
</template>

<script>
    import Emitter from '../../mixins/emitter'
    export default {
        name: "drag-item",
        mixins: [Emitter],
        mounted () {
            this.dispatch('DragWrap', 'putChild', this.$el)
        },
        methods: {
            onDragStart() {
                this.$el.style.opacity = '0.3'
                this.dispatch('DragWrap', 'dragenter', this.$el)
            },
            onDragEnter() {
                this.dispatch('DragWrap', 'dragenter', this.$el)
            },
            onDragEnd() {
                this.$el.style.opacity = '1'
                this.dispatch('DragWrap', 'dragend')
            }
        }
    }
</script>

<style scoped>

</style>
