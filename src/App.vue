<template>
        <a-config-provider :autoInsertSpaceInButton="false" :locale="locale">
            <div id="app" v-scale="{ width: 3840, height: 1620 }">
                <router-view/>
            </div>
        </a-config-provider>
</template>
<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

    export default {
        data() {
            return {
                locale: zhCN,
            }
        }
    }
</script>
<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        color: #fff;
    }
</style>
