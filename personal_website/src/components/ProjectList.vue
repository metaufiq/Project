<template>
    <div id="list">
        <ProjectTemplate 
        name='MyWorld' 
        img='../img/MyWorld.ab56a7dd.png' 
        desc='MyWorld is a game that implement MineCraft world to website,so you can create and enjoy the world.We use Three.js to create this project'
        git='https://github.com/metaufiq/College/tree/master/Computer%20Graphics/FinalProject/MyWorld'
        view = 'active'>
        </ProjectTemplate>

        <ProjectTemplate
        name = 'This Website too!'
        img  = 'https://cdn.lynda.com/course/82409/82409-636282992381780999-16x9.jpg'
        desc = 'I use Vue.js to create this website and i hope you like it'
        git = 'https://github.com/metaufiq/Project/tree/master/personal_website'
        view ='none'>
        </ProjectTemplate>
    </div>
</template>


<script>
import ProjectTemplate from '@/components/template/ProjectTemplate.vue'
export default {
    name:'app',
    components:{
        ProjectTemplate
    }
}
</script>


<style lang="scss" scoped>
    #list{
        display: grid;
        grid-template-columns: 80vw;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
</style>

