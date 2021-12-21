<template>
    <div>
        <el-container style="height: 100%; padding-bottom: 60px;">
                <el-main>
                    <el-carousel :interval="2000" type="card" height="200px" style=" top:50px" autoplay:true >
                        <el-carousel-item v-for="item1 in imagebox" :key="item1.id">
                            <img :src="item1.idView" class="image">
                    </el-carousel-item>
                </el-carousel>
                </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagebox:[{id:0,idView:require('../../assets/imagebox/bounc1.jpg')},
            {id:1,idView:require('../../assets/imagebox/bounc2.jpg')},
            {id:2,idView:require('../../assets/imagebox/bounc3.jpg')},
            {id:3,idView:require('../../assets/imagebox/bounc4.jpg')}
            ]
        }
    },
}
</script>

<style>
    
</style>