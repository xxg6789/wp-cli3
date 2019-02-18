<template>
  <div>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>
  </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";

export default {
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  }
};
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background:url('../assets/img/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg');
  background-size: cover;
  color: #fff;
}
 
.slide2 {
  background:url('../assets/img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg');
  background-size: cover;
  color: #000;
}
 
.slide3 {
  background:url('../assets/img/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg');
  background-size: cover;
  color: #fff;
}
</style>


