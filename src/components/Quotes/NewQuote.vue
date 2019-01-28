<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <h3 align="left" >Your Title:</h3>
                <textarea class="form-control" rows="1" v-model="quote.title"></textarea>
                <h4 align="left" for="bodyt">Your Quote:</h4>
                <textarea id="bodyt" class="form-control" rows="2" v-model="quote.body"></textarea>
                <hr>
                <button class="btn btn-primary" :disabled="isDisabled" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script> 
    export default{
        data:function(){
            return {
                quote:{
                    title:'',
                    body:''
                }
            };
        },
        methods:{
            createNew(){
                this.$emit('newQuoteAdded',this.quote);
                this.quote={
                    title:'',
                    body:''
                };
            }
        },
        computed:{
            isDisabled(){
                let isVoid=true;
                if (this.quote.title && this.quote.body){
                    isVoid=false;
                }
                return isVoid;
            }
        }

    }
</script>

<style scoped>
  div{
    border: 1px solid black;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 100 auto;
    text-align: center;
  }
  
</style>
