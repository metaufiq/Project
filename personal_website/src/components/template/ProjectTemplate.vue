<template>
    <div class="project">
            <div class="projectTittle">
                <h2>{{name}}</h2>
            </div>
            <div class="image">
                <img v-bind:src="img" alt="" class="image">
            </div>
            <div class="descAndPlay">
                <!-- <p>MyWorld is a game that implement MineCraft world to website,so you can create and enjoy the world.We use Three.js to create this project</p> -->
                <div class="description">
                    <p >{{desc}}</p>
                </div>
                <div class="git">
                    <p><a :href="git">see code</a></p>
                </div>
                <div class="play" :style="'display:'+view+';'">
                   <p><a href="https://www.youtube.com/">play</a></p>
                </div>
            </div> 
    </div>
</template>


<script>
export default {
  name: 'ProjectTemplate',
  props: {
    name: String,
    desc: String,
    img: String,
    git: String,
    view: String
  }
}
</script>

<style lang="scss" scoped>
        .project{
            display: grid;
            grid-template-columns: 30% 70%;
            grid-template-areas: 
                "tittle tittle"
                "img descAndPlay";

            margin-bottom: 3vw;
            .projectTittle{
                grid-area: tittle;
                text-align: left;
            }
            .image{
                grid-area: img;
                padding-left: 2vw;
                img{
                    width: 20vw;
                    height: 10vw;
                }
            }

            .descAndPlay{
                grid-area: descAndPlay;
                display: grid;
                grid-template-columns: 15% 15% auto;
                grid-template-areas: 
                "description description description"
                "git  play xxx";
                padding-left:5vw;
                text-align: left;
                .description{
                    grid-area: description;

                }
                .git{
                    grid-area: git;
                }
                .play{
                    grid-area: play;
                }
            }
 
        }

        @media screen and (max-width: 800px) {
            .project{
                grid-template-columns: 50% 60%;
                .image{
                    grid-area: img;
                    padding-left: 2vw;
                    img{
                        width: 100%;
                        height: 90%;
                    }
                }

                .descAndPlay{
                    grid-template-columns: 50% 50% auto;
                }
            }
        }
</style>

