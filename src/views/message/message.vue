<template>
    <div id="messageboard">
        <el-form ref="form" label-width="50px">
            <el-form-item label="标题">
                <el-input v-model="title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="content" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="add()">添加</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-form-item>
            <el-table border :data="mydata">
                <el-table-column label="编号" inline-template :context="_self">
                    <span>{{$index+1}}</span>
                </el-table-column>
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="content" label="内容">
                </el-table-column>
                <el-table-column label="操作" inline-template :context="_self">
                    <span><el-button size="small" @click="showDialog()">删除</el-button></span>
                </el-table-column>
            </el-table>
            <div style="text-align:right" v-show="mydata.length>0">
                <el-button size="small" @click="showDelallDialog()">全部删除</el-button>
            </div>
        </el-form>
 
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <span v-if="nowIndex==-2">删除全部条留言</span>
            <span v-else>删除此条留言</span>
            <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="del(nowIndex)" >确 定</el-button>
        </span>
        </el-dialog>
    </div>

</template>

<script>

    export default {
        data: function() {
            return {
                title: '',
                content: '',
                mydata: [],
                dialogVisible: false,
                nowIndex: -100,
            }
        },
        methods: {
            add() {
                if (this.title == '' || this.content == '') {
                    this.$message.error('请填写完整');
                } else {
                    this.mydata.push({
                        title: this.title,
                        content: this.content,
                    });
                    this.title = '';
                    this.content = '';
                }
            },
            showDialog() {
                this.dialogVisible = true;
            },
            showDelallDialog() {
                this.dialogVisible = true;
                this.nowIndex = -2;
            },
            del(n) {
                if (n == -2) {
                    this.mydata = [];
                } else {
                    this.mydata.splice(n, 1);
                }
                this.nowIndex = -100;
                this.dialogVisible = false;
            },
            handleReset() {
                this.title = '';
                this.content = '';
            }
        },
    }
</script>
<style>

</style>