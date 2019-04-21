<template>
    <div id="project">
            <div id="projectTittle">
                <h2>{{name}}</h2>
            </div>
            <div id="image">
                <img :src="img" alt="" id="image">
            </div>
            <div id="descAndPlay">
                <!-- <p>MyWorld is a game that implement MineCraft world to website,so you can create and enjoy the world.We use Three.js to create this project</p> -->
                <p>{{desc}}</p>
            </div> 
    </div>
</template>


<script>
export default {
  name: 'ProjectTemplate',
  props: {
    name: String,
    desc: String,
    img: String
  }
}
</script>

<style lang="scss" scoped>
        #project{
            display: grid;
            grid-template-columns: 30% 70%;
            grid-template-areas: 
                "tittle tittle"
                "img description";

            margin-bottom: 3vw;
            #projectTittle{
                grid-area: tittle;
                text-align: left;
            }
            #image{
                grid-area: img;
                padding-left: 2vw;
                img{
                    width: 20vw;
                    height: 10vw;
                }
            }

            #descAndPlay{
                grid-area: description;
                text-align: left;
                padding-left: 6vw;
            }
        }

        @media screen and (max-width: 800px) {
            #project{
                grid-template-columns: 50% 60%;
                #image{
                    grid-area: img;
                    padding-left: 2vw;
                    img{
                        width: 100%;
                        height: 90%;
                    }
                }
            }
        }
</style>

