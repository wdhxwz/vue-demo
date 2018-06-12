<!-- /home -->
<template>
    <div>
    <!--     -->
        <slider :slides= "page_data.top"></slider>
         <div class="announcement">
            <label>快讯</label>
            <span>今日上架的图书全部8折</span>
        </div>

        <div class="section">
            <book-list :books="page_data.promotions"
                       heading="最新更新"
                       @select="preview($event)">
            </book-list>
        </div>
        <div class="section">
            <book-list :books="page_data.recommended"
                       heading="编辑推荐">
            </book-list>
        </div>

        <modal-dialog ref="dialog">
            <div slot="heading"></div>
            <div>
                <div v-if="selected">
                    <h2>{{ selected.title }}</h2>
                </div>
            </div>
        </modal-dialog>

    </div>
</template>

<script>
    import Slider from "@/components/Slider"
    import BookList from '@/books/List'
    import ModalDialog from "./components/dialog.vue"
    import faker from "@/fixtures/faker"

    export default {
        data () {
            return {
                page_data: undefined,
                selected:undefined
            }
        },
        mounted(){
            document.title = "Book store"
        },
        created() {
            this.page_data = faker.getHomeData()
        },
        components:{Slider,BookList,ModalDialog},
        methods: {
            preview (book) {
                this.selected = book
                this.$refs.dialog.open()
            }
        }
    }
</script>

<style>
    .announcement {
        font-size: 12px;
        padding:5px;
        background:#fff;
    }
    .announcement > label {
        padding: 3px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;
    }
    .announcement > span {
        padding: 3px 10px;
        color: #333;
        display:inline-block;
    }
</style>

