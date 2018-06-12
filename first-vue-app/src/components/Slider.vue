<template>
    <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- 
            <swiper-slide><img src = "../fixtures/sliders/t1.svg" /></swiper-slide>
            <swiper-slide><img src = "../fixtures/sliders/t2.svg" /></swiper-slide>
            -->
            <swiper-slide v-for="slide in slides" :key="slide.id">
                <router-link :to="{ name:'BookDetail',params:{ id: slide.id}}">
                    <img :src = "slide.img_url" />
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<style>
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .swiper-wrapper {
        height: 200px;
    }
    .swiper-slide img {
        max-width: 100%;
    }
    .swiper-slide {
        text-align: center;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>

<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper'

    export default{
        comments:{
            swiper,swiperSlide
        },

        data(){
            return {
                swiperOption: {
                    notNextTick: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true,
                    disableOnInteraction: true,
                    autoplay: 3000,
                    sliderPreView: 'auto',
                    centeredSliders: true,
                    paginationClickable: true,
                    spaceBetween: 30,
                    speed: 500,
                    onSlideChangeEnd: swiper => {
                        this.page = swiper.realIndex + 1;
                        this.index = swiper.realIndex;
                    }
                }
            }
        },
        computed: {
            swiper(){
                return this.$refs.mySwiper.swiper;
            }
        },
        props: ['slides'],
        mounted() {
            var that = this;
            this.swiper.slideTo(0,0,false);
            setInterval(function(){
                that.swiper.slideNext()
            },3000);
        }
    }
</script>
