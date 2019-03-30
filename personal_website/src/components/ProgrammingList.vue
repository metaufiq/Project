<template>
    <div id="list">
        <div id="item">
            <span style="">
                <i class="fab fa-android"></i>
            </span>
            <h4>ANDROID DEVELOPMENT</h4>
            <p>explaination about what i can do on android</p>
        </div>
        <div id="itemRobot">
            <span id="robot">
                <i class="fas fa-robot"></i>
            </span>
            <h4 id="robottittle">ARTIFICIAL INTELLIGENCE</h4>
            <p>explaination about what i can do on A.I</p>
        </div>
        <div id="item">
            <span>
                <i class="far fa-file-code"></i>
            </span>
            <h4>WEB DEVELOPMENT</h4>
            <p>explaination about what i can do on Web Development</p>
        </div>
        <div id="item">
            <span>
                <i class="fas fa-gamepad"></i>
            </span>
            
            <h4>GAME-DEVELOPMENT</h4>
            <p>explaination about what i can do on Game Development</p>
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
  margin-top: 5vw;
  margin-left: 8vw;
  margin-right: 8vw;
  align-items: center;
  grid-column-gap: 1rem;
  #item{
      text-align: center;
      padding: 2rem 2vw;
    span{
        font-size: 40px; color:#42b983;
    }
  }
  #itemRobot{
    text-align: center;
    padding: 0rem 2vw;
    span{
        font-size: 30px; color:#42b983;
    }
  }
  #robottittle{
      padding-top: 10px;
  }

}
</style>

