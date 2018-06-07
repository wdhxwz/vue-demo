<template>
    <div class="layout">
        <MyBasicForm />
        <MyTable class="my-table"/>
    </div>
</template>

<script>
import MyBasicForm from '../../components/forms/MyBasicForm.vue';
import MyTable from '../../components/tables/MyTableDemo.vue';
export default {
    name:'Demand',
    data () {
        return {
        }
    },
    components: {
        MyBasicForm,
        MyTable
    }
}
</script>

<style scoped lang="less">
    .my-table{
        margin-top: 20px;
    }
</style>