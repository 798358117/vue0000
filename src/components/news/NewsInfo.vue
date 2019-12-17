<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.ptime | dateFormat }}</span>
            <span>跟帖：{{ newsinfo.replyCount }}次</span>
        </p>

        <hr>
        <!-- 内容区域 -->
        <div class="content">
            {{ newsinfo.digest }}
        </div>
        <img :src="newsinfo.imgsrc" >

        <!-- 评论组件区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
// 1. 导入评论子组件
import comment from '../subcomponents/comment.vue'


export default {
    data() {
        return {
            id: this.$route.params.id,   // 这是将 URL 地址中传递过来的 Id 值，挂载到 data 上，方便以后调用
            newsinfo: {}    //新闻对象
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() { // 获取新闻详情
            this.$http.get("http://localhost:3001/getnewslist").then(result => {
                var id = this.id;
                var newsinfo = this.newsinfo;
                var bodycontent = result.body.T1348647853363;
                // console.log(bodycontent);
                if(result.status === 200) {
                    // 如果没有失败，应该把数据保存到 data 上
                    bodycontent.forEach(function(value,index) {
                        if(bodycontent[index].docid === id ){
                            newsinfo = bodycontent[index];
                        }
                    })
                    console.log(newsinfo)  // 获取到对应id 的新闻块
                    this.newsinfo = newsinfo;
                } else {
                    Toast('获取新闻列表失败！')
                }
            })
        }
    },
    components: {   // 用来注册子组件的节点
        'comment-box': comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content {
    }
    img {
        margin: 10px 0;
        width: 100%;
        
    }
}
</style>