<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for的话，一定要使用key -->
            <!-- 获取不到，先用一般图片顶着 -->
            <!-- 将来谁使用此轮播图，谁为我们传递 lunbotuList -->
            <!-- 此时， lunbotuList 应该是 父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.imgsrc" alt="" :class="{ 'full': isfull }">
            </mt-swipe-item>
            <!-- <mt-swipe-item>
                <a href="javascript:;">1111</a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="javascript:;">2222</a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="javascript:;">3333</a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="javascript:;">4444</a>
            </mt-swipe-item> -->
        </mt-swipe>
    </div>

<!-- 分析：为什么 商品评论中的 轮播图那么丑： -->
<!-- 1. 首页中的图片，它的宽和高都是用了 100% 的宽度 -->
<!-- 2. 在商品详情页面中，轮播图的  图片，如果也使用 宽高为 100% 的话，页面不好看 -->
<!-- 3. 商品详情页面中的轮播图，期望 高度是 100% ，但是 宽度为 自适应 -->
<!-- 4. 经过分析，得到 问题的原因： 首页中的轮播图 和 详情中的轮播图，分歧点是 宽度是100% 还是 自适应 -->
<!-- 5. 既然这两个 轮播图，其他方面都是没有冲突的，只是，宽度由分歧，那么，我们可以定义一个属性，让 轮播图的 调用者 ，手动指定 是否为 100% 的宽度 -->
</template>

<script>
export default {
    props: ["lunbotuList", "isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        text-align: center;

        img {
            // width: 100%;
            height: 100%;
        }

        .mui-media-body {
            font-size: 13px;
        }
    }

    .full {
        width: 100%;
    }

    
}
</style>