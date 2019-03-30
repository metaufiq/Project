<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>My name is Muhammad taufiqulsa`di, I am a Software Engineer.I study at Institut Teknologi Sepuluh Nopember,what i can do and really like to do on programming are:</p>
    <ProgrammingList/>
    
  </div>
</template>

<script>
import ProgrammingList from '@/components/ProgrammingList.vue'
export default {
  name:'about',
  components:{
    ProgrammingList
  }
}
</script>

<style lang="scss" scoped>
p{
  width: 100vw;
}
</style>


