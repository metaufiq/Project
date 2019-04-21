<template>
        <div id="list">
            <div id="box1">
                <div id="item">
                    <i class="fab fa-android"></i>
                </div>
                <h4>ANDROID DEVELOPMENT</h4>
                <div><p>i really love to learn and create andriod app,
                one of my project [Deen] is an to do list app,
                i build it for myself.</p></div>

            </div>
            <div id="box2">
                <div id="itemRobot">
                    <i class="fas fa-robot">
                </i></div>
                <h4>ARTIFICIAL INTELLIGENCE</h4>
                <div><p>i love A.I! i really want to create an A.I that have a purpose for me or for others </p></div>
            </div>
            <div id="box3">
                <div id="item">
                    <i class="far fa-file-code"></i>
                </div>
                <h4>WEB DEVELOPMENT</h4>
                <div><p>this is the field that I'm <b>focusing</b> on now,i really enjoy to create a website,especially on back-end part</p></div>
            </div>
            <div id="box4">
                <div id="item">
                    <i class="fas fa-gamepad"></i>
                </div>
                <h4>GAME DEVELOPMENT</h4>
                <div><p>i really enjoy to create a game,making something move and interact with other thing has its own charm from my prespective</p></div>
            </div>
        </div>
</template>

<script>
export default {
    name:'ProgrammingList'
}
</script>

<style lang="scss" scoped>
    #list{
        width: 85vw;
        margin-left:auto; 
        margin-right:auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 3vw;
        grid-template-areas:
        "box1 box2 box3 box4";
        overflow: hidden;
        #box1{
            grid-area: box1;
        }
        #box2{
            grid-area: box2;
            h4{
                margin-top: 27px;
            }
        }
        #box3{
            grid-area: box3;
        }
        #box4{
            grid-area: box4;
        }
        #item{
            font-size: 30px;
            color: #42b983;
        }
        #itemRobot{
            font-size: 25px;
            color:#42b983;
        }
    }

    @media screen and (max-width: 800px) {
        #list{
            width: 80vw;
            margin-left:auto; 
            margin-right:auto;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
            "box1 box2"
            "box3 box4";
            grid-column-gap: 15vw;
            #item{
                font-size: 30px;
                color: #42b983;
            }
            #itemRobot{
                font-size: 25px;
                color:#42b983;
            }
        }
    }
</style>

