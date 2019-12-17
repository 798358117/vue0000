<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist"  :key="item.number">
                <router-link :to="'/home/newsinfo/' + item.docid">
                    <img class="mui-media-object mui-pull-left" :src="item.imgsrc" />
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{ item.ptime | dateFormat }}</span>
                            <span>跟帖：{{ item.replyCount }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist"  :key="item.number">
                <a :href="item.url">
                    <img class="mui-media-object mui-pull-left" :src="item.imgsrc" />
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{ item.ptime | dateFormat }}</span>
                            <span>跟帖：{{ item.replyCount }}次</span>
                        </p>
                    </div>
                </a>
            </li> -->
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://avatars0.githubusercontent.com/u/57655956?s=40&v=4" />
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：2019-12-16 21:41:02</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://avatars0.githubusercontent.com/u/57655956?s=40&v=4" />
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：2019-12-16 21:41:02</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    data() {
        return {
            newslist: []    // 新闻列表
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() { // 获取新闻列表
            this.$http.get("http://localhost:3001/getnewslist").then(result => {
                console.log(result)
                if(result.status === 200) {
                    // 如果没有失败，应该把数据保存到 data 上
                    this.newslist = result.body.T1348647853363;
                } else {
                    Toast('获取新闻列表失败！')
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.mui-media-body {
    h1 {
        font-size: 14px;
    }
    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>