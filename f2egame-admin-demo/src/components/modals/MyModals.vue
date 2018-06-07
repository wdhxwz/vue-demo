<template>
    <Modal :value="visible" title="Title" @on-visible-change="changeVisible">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
</template>

<script>
    import * as subpub from '../../utils/subpub';
    export default {
        name: 'MyModals',
        props: ['data', 'visible'],
        methods: {
            changeVisible() {
                subpub.emit('changeModalsVisible',false);
            }
        }
    }
</script>
