<template>
    <div>图书详情页:{{ppp}}</div>
</template>


<script>
    export default{
        data(){
            return {
                ppp :undefined
            }
        },
        created(){
            // this.$router.params这个为null？
            // this.$route这个才能获取到参数
            const bookId = this.$route.params.id
            this.ppp = bookId;
        }
    }
</script>