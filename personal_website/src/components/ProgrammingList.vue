<template>
    <div id="list">
        <div id="item">
            <span style="">
                <i class="fab fa-android"></i>
            </span>
            <h4>ANDROID DEVELOPMENT</h4>
            <p>i really love to learn and create andriod app,
                one of my project [Deen] is an to do list app,
                i build it for myself.</p>
        </div>
        <div id="itemRobot">
            <span id="robot">
                <i class="fas fa-robot"></i>
            </span>
            <h4 id="robottittle">ARTIFICIAL INTELLIGENCE</h4>
            <p>i love A.I! i really want to create an A.I that have a purpose for me or for others </p>
        </div>
        <div id="item">
            <span>
                <i class="far fa-file-code"></i>
            </span>
            <h4>WEB DEVELOPMENT</h4>
            <p>this is the field that I'm <b>focusing</b> on now,i really enjoy to create a website,especially on back-end part</p>
        </div>
        <div id="item">
            <span>
                <i class="fas fa-gamepad"></i>
            </span>
            <h4>GAME DEVELOPMENT</h4>
            <p>i really enjoy to create a game,making something move and interact with other thing has its own charm from my prespective</p>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 5vw;
  padding: 0 5%;
  align-items: center;
  grid-column-gap: 1rem;
  #item{
      text-align: center;
      padding: 0 2vw;
    span{
        font-size: 40px; color:#42b983;
    }
  }
  #itemRobot{
    text-align: center;
    padding: 0 2vw;
    span{
        font-size: 25px; color:#42b983;
    }
  }
  #robottittle{
  }

}
</style>

