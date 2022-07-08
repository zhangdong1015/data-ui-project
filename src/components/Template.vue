<template>
    <Space direction="vertical">

        <Space wrap>
            <Button type="info">新增</Button>
        </Space>
    </Space>
    <Table border :columns="columns" :data="data">
        <template #name="{ row }">
            <strong>{{ row.name }}</strong>
        </template>
        <template #action="{ row, index }">
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>

        </template>
    </Table>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    title: '模板名称',
                    slot: 'name'
                },
                {
                    title: '模板文件格式',
                    key: 'type'
                },
                {
                    title: '创建人',
                    key: 'creator'
                },
                {
                    title: '创建时间',
                    key: 'creatTime'
                },
                 {
                    title: '最后修改人',
                    key: 'mdifier'
                },
                {
                    title: '最后修改时间',
                    key: 'lastModifyTime'
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
            data: []
        }
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
            })
        },
        remove(index) {
            this.data.splice(index, 1);
        }
    }
}
</script>
