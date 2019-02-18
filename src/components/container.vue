<template>
    <div>
        <slider></slider>
        <mainbox></mainbox>
    </div>
</template>
<script>
import slider from './slider';
import mainbox from './mainbox';

export default {
   data(){return {
       list:[]
   }},
    mounted() {

        this.$http({
            url:'/data/post.json'
        }).then(
            res=>console.log(res)
        )
    },
    components:{slider,mainbox}
}
</script>