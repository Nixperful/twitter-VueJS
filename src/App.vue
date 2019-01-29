<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8  col-md-6">
                <h2 style="font-family:'Times New Roman', Times, serif">Welcome to your Favorite App!</h2>
                <hr>
                <router-view name="header-top"></router-view>
                <transition name= "slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <hr>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>



<script>

    export default {

    } 
</script>


<style>
    .slide-leave-active{
        transition: opacity 1s ease;
        opacity:0;
        animation: slide-out 1s ease-out forwards;
    }
    .slide-leave{
        opacity:1;
        transform: translateX(0);
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
    }
    @keyframes slide-out {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-15px)
        }  
    }
    @keyframes slide-in {
        0%{
            transform: translateY(-15px);
        }
        100%{
            transform: translateY(0);
        }  
    }
</style>















