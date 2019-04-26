<template>
    <div id="list">
        <ProjectTemplate 
        name='MyWorld' 
        img= 'MyWorld.png' 
        desc='MyWorld is a game that implement MineCraft world to website,so you can create and enjoy the world.We use Three.js to create this project'
        git='https://github.com/metaufiq/College/tree/master/Computer%20Graphics/FinalProject/MyWorld'
        view = 'active'
        link = 'https://demoworld.netlify.com'>
        </ProjectTemplate>

        <ProjectTemplate
        name = 'This Website too!'
        img  = 'PersonalWebsite.png'
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

