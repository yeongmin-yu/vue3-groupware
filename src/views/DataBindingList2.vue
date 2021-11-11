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
<script lang='ts'>
import ApiMixin from '../mixins'
export default {
    name:'DataBindingList2',
    mixins:[ApiMixin],
    components:{},
    data() {
    return {
            productList: []
        };
    },
    beforeCreate() {},
    created() {
        this.testcode();
        this.getList();
    },
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    methods: {
        testcode(){
                console.log('getlist')
        },
        async getList(){            
         
            this.productList = await this.$api("https://52d3c7df-eb60-4ac4-897c-54f76f1ff413.mock.pstmn.io/list","get");          

        }
    }
}
</script>

