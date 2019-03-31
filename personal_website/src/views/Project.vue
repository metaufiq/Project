<template>
    <div class="project">
        <h1>This is an project view</h1>
        <ProjectList/>
    </div>
</template>

<script>
import ProjectList from '@/components/ProjectList.vue'
export default {
    name:'project',
    components:{ProjectList
    }
}
</script>

