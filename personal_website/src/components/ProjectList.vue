<template>
    <div id="list">
        <div id="project">
            <div id="projectTittle">
                <h2>MyWorld</h2>
            </div>
            <div id="image">
                <img src="https://cdn3.vox-cdn.com/thumbor/bPCRIdjx6NGcRodhN6CgGwrhJy8=/0x1080/volume-assets.voxmedia.com/production/7cd11af9a0191b0eba43afdbe4e0172a/Action_forest.png" alt="" id="image">
            </div>
            <div id="description">
                <p>MyWorld is a game that implement MineCraft world to website,so you can create and enjoy the world.We use Three.js to create this project</p>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #list{
        display: grid;
        grid-template-columns: 80vw;
        margin-top: 5vw;
        align-items: center;
        text-align: center;
        justify-content: center;
        #project{
            display: grid;
            grid-template-columns: 30% 70%;
            grid-template-areas: 
                "tittle tittle"
                "img description";
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

            #description{
                grid-area: description;
                text-align: left;
                padding-left: 6vw;
            }
        }
    }
</style>

