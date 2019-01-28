<template>
    <div class='container'>
        <app-header :max-quotes="maxQuotes" :quote-count="quoteList.length"></app-header>
        <user-quote @newQuoteAdded="addQuote"></user-quote>
        <quote-area :quotes="quoteList" @quoteDeleted="eraseQuote"></quote-area>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Information: Click on a Quote to delete it </div>
            </div>
        </div>
        <hr>
        <button class="btn btn-primary" @click="getData">Get Server Data</button>
    
    </div> 
</template>

<script>
    import QuoteArea from './components/Quotes/QuoteArea.vue'
    import NewQuote from './components/Quotes/NewQuote.vue'
    import HeaderProgressBar from './components/Shared/HeaderProgressBar.vue' 
    export default {
        data: function(){
            return {
                quoteList:[],
                maxQuotes:10,
                node:'tweets',
                index:0
            }
        },
        components:{
            'quote-area':QuoteArea,
            'user-quote':NewQuote,
            'app-header':HeaderProgressBar        
        },
        methods:{
            addQuote(quote){
                var me= this;
                if(!(this.quoteList.length>=this.maxQuotes)){
                    
                    this.resource.addQuote({node:this.node},{"tweet": {"title": quote.title, "body":quote.body}})
                    .then(function(data){
                        console.log(data);
                        me.getData();
                    });
                    
                }  
                else{alert("Delete yout Quotes, you reach the free limit")}              
            },
            eraseQuote(index){
                var me= this;
                this.index=index;
                this.resource.deleteData({index:this.index})
                .then(function(){
                    me.getData();   
                });
               
            },
            getData(){
                this.resource.getData({ node:this.node}) 
                    .then(response => {
                        return response.json();
                    })
                    .then(data =>{
                        const resultArray=[];
                        for (let key in data){
                            resultArray.push(data[key]);
                        }
                        this.quoteList = resultArray[0];
                    }) ;
            }
        },
        created(){
            
            const customActions={
                //saveAlt: {method: 'POST',  url: 'alternative.json'},
                addQuote: {method: 'POST', headers:{
                    Authorization: "Bearer dc431c3980eede8c781bae0c42f150e5",
                }},
                getData: {method: 'GET'} ,
                deleteData: {method:'DELETE', headers:{
                    Authorization: "Bearer dc431c3980eede8c781bae0c42f150e5"
                }, url:"tweets/{index}"

                }   
            };
            this.resource= this.$resource('{node}.json',{},customActions);
            this.getData();
        }
    } 
</script>

<style>
</style>
