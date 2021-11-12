<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.product_name}}</td>
                        <td>{{product.price}}</td>
                            <td>{{product.category}}</td>
                                <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'DataBindingList2',
    components: {},
    data () {
        return { productList: Array }
    },
    methods: {
        async getList () {
            this.productList = await this.$api('https://52d3c7df-eb60-4ac4-897c-54f76f1ff413.mock.pstmn.io/list', 'get')
        }
    },
    beforeCreate () {},
    created () {
      //  console.log(this);
        this.getList()
    },
    beforeMount () {},
    mounted () {},
    beforeUpdate () {},
    updated () {},
    beforeUnmount () {},
    unmounted () {}
}
</script>
<style scoped>
    table{
        width:100%;
    }
    td, th{
        border : 1px solid black;
        padding: 8px;
    }

</style>