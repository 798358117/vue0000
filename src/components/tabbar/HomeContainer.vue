<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <!-- 九宫格到 6宫格 的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoslist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系 我们</div>
                </a>
            </li>
        </ul>

        
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue'

export default {
    data() {
        return {
            pageindex: 6,    // 分页的页数--测试
            lunbotuList: [] // 保存轮播图的数组
        };
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu() {
            // 获取轮播图数据的方法
            // this.$http.get("api/getlunbo").then(result => {
            //     console.log(result.body);
            // if(result.body.status === 0){
            //     // 成功了
            //     this.lunbotuList = result.body.message;
            // } else {
            //     // 失败 的
            //     Toast("加载轮播图失败...");
            // }
            //})
            // 测试
            this.$http.get('http://localhost:3001/getgoodslist?pageindex=' + this.pageindex ).then(result => {
                console.log(result)
                if(result.status === 200) {
                    this.lunbotuList = result.body.BAI6I0O5wangning;
                }
            })
        }
    },
    components: {
        swiper
    }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
        img {
            width: 60px;
        }

    }
</style>
