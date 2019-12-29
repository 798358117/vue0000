<template>
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <div class="content" v-html="info.digest"></div>
        
        <img :src="info.imgsrc" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return{
            pageindex: 10,
            info: {}    // 图文数据
        };
    },
    created() {
        this.getGoodsDesc();
    },
    methods: {
        getGoodsDesc() {
            // this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(result => {
            //     if(result.body.status === 0) {
            //         this.info = result.body.message[0];
            //     }
            // })
            // 测试
            this.$http.get('http://localhost:3001/getgoodslist?pageindex=' + this.pageindex ).then(result => {
                console.log(this.$route.params.id)
                if(result.status === 200) {
                    result.body.BAI6I0O5wangning.forEach(item => {
                        if(this.$route.params.id === item.docid)
                            this.info = item;
                    })
                }
            })
        }
    },
}
</script>

<style lang="scss" >
.goodsdesc-container {
    padding: 4px;
    h3 {
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    img {
        width: 100%;
    }
}
</style>