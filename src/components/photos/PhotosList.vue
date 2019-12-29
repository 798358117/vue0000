<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div
                id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
            >
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id === 1 ? 'mui-active' : '']"  v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
                    {{ item.title }}
                    </a>
                    <!-- <a
                        class="mui-control-item"
                        href="#item2mobile"
                        data-wid="tab-top-subpage-2.html"
                    >热点</a>
                    <a
                        class="mui-control-item"
                        href="#item3mobile"
                        data-wid="tab-top-subpage-3.html"
                    >北京</a>
                    <a
                        class="mui-control-item"
                        href="#item4mobile"
                        data-wid="tab-top-subpage-4.html"
                    >社会</a>
                    <a
                        class="mui-control-item"
                        href="#item5mobile"
                        data-wid="tab-top-subpage-5.html"
                    >娱乐</a>
                    <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
                    </a> -->
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <!-- <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul> -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.imgsrc">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.digest }}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
// 1. 导入 mui 的js文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data() {
        return {
            cates: [],   // 所有分类的列表数组
            list: []    // 图片列表的数组
        };
    },
    created() {
        this.getAllCategory();
        // 默认进来，就主动请求 所有图片列表的数据
        this.getPhotoListByCateId(0);
    },
    mounted() { 
        // 当组件中的DOM被渲染好了并放入页面中后，会执行这个钩子函数
        // 如果要操作元素了，最好在 mounted 里面，因为，这里的 DOM 元素是最新的
        // 2. 初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });

    },
    methods: {
        getAllCategory() {
            // 测试代码
            this.$http.get("http://localhost:3001/getimgcategory").then(result => {
                // console.log(result)
                if (result.status === 200 ) {
                    // 手动拼接一个最完整的 分类列表
                    // result.body.unshift({ title: "全部", id: 0 });
                    this.cates = result.body;
                }
            })
            // 获取到所有的图片分类
            // this.$http.get("/api/getimgcategory").then(result => {
            //     if (result.body.status === 0) {
            //         // 手动拼接一个最完整的 分类列表
            //         result.body.message.unshift({ title: "全部", id: 0 });
            //         this.cates = result.body.message;
            //     }
            // })
        },
        getPhotoListByCateId(cateId) {
            // 根据 分类Id，获取图片列表
            this.$http.get("http://localhost:3001/getimglist?id="+cateId).then(result => {
                // console.log(result)
                if (result.status === 200 ) {
                    var result = result.body;
                    for(var key in result) {
                        this.list = result[key];
                    }
                    // console.log(this.list)
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

.photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        position: relative;
        box-shadow: 0 0 9px #999;
        img {
            width: 100%;
            vertical-align: middle;
        }
        img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .info {
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0px;
            background-color: rgba($color: #fff, $alpha: 0.4);
            max-height: 84px;
            .info-title {
                font-size: 14px;
            }
            .info-body {
                font-size: 13px;
            }
        }  
    }
}


</style>