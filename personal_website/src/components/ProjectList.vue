<template>
    <div id="list">
        <div id="project">
            <div id="projectTittle">
                <h2>MyWorld</h2>
            </div>
            <div id="image">
                <img src="../assets/MyWorld.png" alt="" id="image">
            </div>
            <div id="description">
                <p>MyWorld is a game that implement MineCraft world to website,so you can create and enjoy the world.We use Three.js to create this project</p>
            </div> 
        </div>

        <div id="project">
            <div id="projectTittle">
                <h2>This Website too!</h2>
            </div>
            <div id="image">
                <img src="https://cdn.lynda.com/course/82409/82409-636282992381780999-16x9.jpg" alt="" id="image">
            </div>
            <div id="description">
                <p>I use Vue.js to create this website and i hope you like it</p>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #list{
        display: grid;
        grid-template-columns: 80vw;
        align-items: center;
        text-align: center;
        justify-content: center;
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

            #description{
                grid-area: description;
                text-align: left;
                padding-left: 6vw;
            }
        }
    }

    @media screen and (max-width: 800px){
        #list{
            #project{
                #image{
                    grid-area: img;
                    padding-left: 2vw;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>

