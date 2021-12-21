<template>
    <section class="profile-section" id="profile" >
    <!-- 简介 -->
    <div class="profile-container">
      <div class="left-area">
        <div class="bg-area">
          <a
            href="https://weibo.com/u/5369689800?topnav=1&wvr=6&topsug=1&is_all=1"
            target="_blank"
            ><img
              src="../../assets/imagebox/curry.jpg"
              alt=""
              class="img-curry c-img-left"
          /></a>
          <h3>Stephen Curry</h3>
          <p>
            斯蒂芬·库里（Stephen
            Curry），1988年3月14日出生于美国俄亥俄州阿克伦（Akron,
            Ohio），美国职业篮球运动员，司职控球后卫，效力于NBA金州勇士队。2009年NBA选秀，库里在首轮第7顺位被金州勇士队选中，至今一直在勇士队打球。新秀赛季入选最佳新秀第一阵容；2014-15赛季随勇士队获得NBA总冠军；两次当选常规赛MVP，两次入选最佳阵容第一阵容，三次入选全明星赛西部首发阵容。2010年随美国队获土耳其世锦赛冠军，2014年随美国队获西班牙篮球世界杯冠军。
          </p>
          <a
            href="https://weibo.com/u/5369689800?topnav=1&wvr=6&topsug=1&is_all=1"
            target="_blank"
            ><i class="fa fa-weibo"></i
          ></a>
          <br />
          <a
            href="https://weibo.com/u/5369689800?topnav=1&wvr=6&topsug=1&is_all=1"
            target="_blank"
            class="btn-a"
            >了解更多</a
          >
        </div>
      </div>

      <div class="right-area">
        <div class="bg-area">
          <a
            href="https://weibo.com/u/5369689800?topnav=1&wvr=6&topsug=1&is_all=1"
            target="_blank"
            ><img
              src="../../assets/imagebox/monkey.jpg"
              alt=""
              class="img-curry c-img-right"
          /></a>
          <h3>斯蒂芬 库里</h3>
          <p>
            斯蒂芬·库里斯蒂芬·库里高中毕业后，曾参加杜克大学篮球训练营，希望加入名校杜克。但是当时杜克大学的K教练和他的教练团队认为库里太过瘦弱矮小，不会适应NCAA的强度，因而放弃将其招致麾下。库里最终选择进入戴维森学院。
            大一赛季，库里以场均21.5分成为SEC联盟的最佳新人和得分王。在大学的第二场比赛中，贡献32分9板和4次助攻；在2007年南区锦标赛中打破新生三分球纪录。大二赛季，库里率领戴维森学院进入疯狂三月八强战。
          </p>
          <!-- 使用了图标库font-awesome -->
          <a
            href="https://weibo.com/u/5369689800?topnav=1&wvr=6&topsug=1&is_all=1"
            target="_blank"
            ><i class="fa fa-weibo"></i
          ></a>
          <br />
          <a
            href="https://weibo.com/u/5369689800?topnav=1&wvr=6&topsug=1&is_all=1"
            target="_blank"
            class="btn-a"
            >了解更多</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
<style scoped>
.profile-section {
  
  height: 100%;
}
.profile-container {
  width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  
}
.left-area,
.right-area {
  display: inline-block;
  text-align: center;
  width: 50%;
  position: relative;
  /* margin: 0px 20px; */
}
.img-curry {
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin-top: -120px;
  border: 10px solid rgb(215, 215, 215);
}
.img-curry:hover {
  border: 10px solid rgb(140, 140, 140);
}
.left-area p,
.right-area p {
  width: 90%;
  line-height: 25px;
  font-size: 15px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  padding: 0px 20px;
  margin: 0px 10px !important;
}
.bg-area {
  background-color: rgb(253, 253, 253);
  margin: 0px 20px;
  box-shadow: 0px 56px 36px -60px #121d12;
}
.btn-a {
  text-decoration: none;
  background-color: rgb(0, 161, 214);
  padding: 10px 20px;
  display: inline-block;
  border-radius: 3px;
  color: white;
  margin: 10px auto 30px;
}
.btn-a:hover {
  background-color: rgb(0, 181, 229);
}
.fa {
  color: #777;
  font-size: 20px;
  margin: 5px 0px;
  padding: 5px;
}
.fa:hover {
  color: rgb(230, 22, 45);
  border-radius: 50%;
  /* border: 1px solid rgb(217,0,19); */
  padding: 5px;
}
</style>>