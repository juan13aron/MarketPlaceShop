<template>
    <div class="fondoError">
        <div class="sliderError">
            <img src="../assets/img/Error/ErrorEmoji.png" alt="Error Page404"/>
        </div>
            <h1>Página 404</h1>
            <h2>Page Not Found</h2>
    </div>
</template>
<script>
export default {
    name:'ErrorComponent',
}
</script>
<style>
.sliderError img{
    display: block;
    margin-left: auto ;
    margin-right: auto;
    margin-bottom: 0px;
    padding-top: 100px;
}
.fondoError h1{
    font-size: 100px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
}
.fondoError h2{
    font-size: 40px;
    text-align: center;
    margin-bottom: 60px;
}
.sliderError{
     background: white;
    width: 100%;
    height: 380px;
    line-height: 320px;
    text-shadow: 0px 0px 5px #4444;
}
.sliderError h2{
    text-align: center;
    font-size: 100px;
    color: black;
}
.fondoError{
    background: white;
    padding-bottom: 80px;
    color:black;
}
</style>