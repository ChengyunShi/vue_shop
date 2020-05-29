<template>
    <el-button
        ref="node">
        <div>NodeName</div>
    </el-button>
</template>

<script>
    import tippy from "tippy.js"

    function setMaxHeight(instance) {
        // TODO Consider tooltips tied to parent scroll
        const parentHeight = document.body.clientHeight;
        // const parentHeight = instance.reference.offsetParent.offsetHeight;

        const {
            height: referenceHeight,
            top: referenceTop,
        } = instance.reference.getBoundingClientRect();

        const {
            height: arrowHeight,
        } = instance.popperChildren.arrow.getBoundingClientRect();

        const { distance } = instance.props;

        // TODO remove preventOverflow.padding from maxHeight
        const maxHeight = parentHeight - referenceTop - referenceHeight - arrowHeight - distance;

        instance.props.maxHeight = maxHeight;
        instance.popperChildren.tooltip.style.maxHeight = `${maxHeight}px`;
        instance.popperChildren.content.style.maxHeight = `${maxHeight}px`;
        instance.popperChildren.content.style.overflowY = "hidden";
    }

    export default {
        name: "Node",
        mounted () {
            let trigger = 'click'
            tippy(this.$refs.node, {
                animation: 'perspective',
                distance: 10,
                flip: true,
                performance: true,
                placement: 'top',
                size: 'large',
                showOnInit: true,
                theme: 'translucent',
                trigger: trigger,
                touchHide: true,
                html: '<div class="tooltip"><ol><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li><li>Hey!</li></ol></div>',
                onShow: setMaxHeight,
                popperOptions: {
                    onUpdate(data) {
                        setMaxHeight(data.instance.reference._tippy)
                    }
                }
            })
        },
        methods: {
            onClick() {
                this.$refs.node._tippy.show()
            }
        }
    }
</script>

<style scoped>

</style>
