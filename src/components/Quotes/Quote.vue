<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default">
        <div class="panel-title">
          {{quoinfo.title}}
          <h6 class="hou">
          by: {{quoinfo.user.name}}
          </h6>
        </div>
        <div class="panel-body .quote">
          {{quoinfo.body}}
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        props:['quoinfo'], 
    }
</script>


<style scoped>
  div{
    border: 1px solid black;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: auto;
    text-align: center;
  }
  .quote{
    cursor: pointer;
  }
  .panel-body{
      font-family: 'Arizonia';
      font-size: 15px;
      color: #020202
  }
  .panel-title{
      font-family: 'Arizonia';
      font-size: 22px;
      color: #d10505
  }
  .quote:hover {
    background-color: #e6d463;
  }
  .hou{
    font-family: 'Times New Roman', Times, serif;
    color: #020202
  }
</style>
