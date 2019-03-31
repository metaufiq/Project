<template>
        <table id="list">
            <tr>
                <td id="item">
                    <i class="fab fa-android"></i>
                </td>
                <td id="itemRobot">
                    <i class="fas fa-robot">
                        </i></td>
                <td id="item">
                    <i class="far fa-file-code"></i>
                </td>
                <td id="item">
                    <i class="fas fa-gamepad"></i>
                </td>
            </tr>
            <tr id="tittle">
                <th>ANDROID DEVELOPMENT</th>
                <th>ARTIFICIAL INTELLIGENCE</th>
                <th>WEB DEVELOPMENT</th>
                <th>GAME DEVELOPMENT</th>
            </tr>

            <tr id="description">
                <td><p>i really love to learn and create andriod app,
                one of my project [Deen] is an to do list app,
                i build it for myself.</p></td>
                <td><p>i love A.I! i really want to create an A.I that have a purpose for me or for others </p></td>
                <td><p>this is the field that I'm <b>focusing</b> on now,i really enjoy to create a website,especially on back-end part</p></td>
                <td><p>i really enjoy to create a game,making something move and interact with other thing has its own charm from my prespective</p></td>
            </tr>
        </table>
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
        
        #item{
            font-size: 30px;
            color: #42b983;
        }
        #itemRobot{
            font-size: 25px;
            color:#42b983;
        }
        td{
            padding: 0 2vw;
        }

        #tittle>th{
            padding-top: 2vw;
        }

    }
</style>

