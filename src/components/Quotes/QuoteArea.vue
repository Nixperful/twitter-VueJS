<template>
    <div class="row">    
            <quote v-for="(quo,key) in quotes" :key="quo.id" :quoinfo="quotes[key]" @click.native="deleteQuote(quotes[key])" >
            </quote>     
        </div>  
</template>

<script>
    import Quote from './Quote.vue'


    export default {
        props:['quotes'],
        components:{
            'quote':Quote           
        },
        methods:{
            deleteQuote(index){
                this.$emit('quoteDeleted',index.id);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: rgba(6, 199, 35, 0.568);
    }
</style>
