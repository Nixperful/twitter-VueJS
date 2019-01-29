<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <h3 align="left" style="font-family: 'Times New Roman', Times, serif">Your Name:</h3>
                <textarea class="form-control" rows="1" v-model="user.name"></textarea>
                <hr>
                <button class="btn btn-success" :disabled="isDisabled" @click.prevent="createNewUser">Continue</button>
            </div>
        </form>
    </div>
</template>

<script> 
    export default{
        data:function(){
            return {
                user:{
                    name:''
                }
            };
        },
        methods:{
            createNewUser(){
                this.$emit('newUserAdded',this.user);
                this.user={
                    name:''
                };
            }
        },
        computed:{
            isDisabled(){
                let isVoid=true;
                if (this.user.name){
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
