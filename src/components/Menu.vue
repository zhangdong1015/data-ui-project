<template>
    <Row>
        <Col span="8">
        <Menu :theme="theme">
            <Submenu name="5">
                <template #title>
                    <Icon type="ios-paper" />
                    模板管理
                </template>
                <MenuItem name="1-1" v-on:click="template">模板</MenuItem>
                <MenuItem name="1-2">格式</MenuItem>
            </Submenu>
            <Submenu name="5">
                <template #title>
                    <Icon type="ios-people" />
                    配置管理
                </template>
                <MenuItem name="2-1" v-on:click="config">配置</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>

        </Menu>
        </Col>

    </Row>
    <br>

</template>
<script>
export default {
    data() {
        return {
            theme: 'dark'
        }
    },
    methods: {
        config: function () {
          // 跳转到config
          this.$router.push('/Config');
        },
        template: function(){
            this.$router.push('/Template')
        }
    }
}
</script>