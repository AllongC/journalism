<template>
  <div>
    <div class="edit">
      <div class="headeImg">
        <div class="mask">修改</div>
        <img v-if="userInfo.head_img" :src="$axios.defaults.baseURL+ userInfo.head_img" alt />
        <img v-else src="@/assets/logo.jpg" alt />
        <van-uploader :after-read="afterRead" />
      </div>
    </div>
    <div class="userInfo">
      <EditInput name="昵称" :val="userInfo.nickname" @editInfo="nickShow=true" />
      <EditInput name="性别" :val="userInfo.gender==1?'男':'女'" @editInfo="genderShow=true" />
      <EditInput name="用户名" :val="userInfo.username" @editInfo="userShow=true" />
      <EditInput name="密码" val="******" @editInfo="PwdShow=true" />
      <EditInput name="设置" val />
    </div>
    <p @click="$router.back()">完成</p>
    <van-dialog v-model="nickShow" title="修改昵称" show-cancel-button @confirm="editNickname">
      <van-field placeholder="请输入用户名" :value="userInfo.nickname" label="原昵称：" readonly />
      <van-field label="新昵称：" placeholder="请输入新的昵称" v-model="newNick" />
    </van-dialog>
    <van-action-sheet v-model="genderShow" :actions="actions" @select="onSelect" cancel-text="取消" />
    <van-dialog v-model="userShow" title="修改用户名" show-cancel-button @confirm="editUsername">
      <van-field label="原用户名：" :value="userInfo.username" readonly />
      <van-field label="新用户名：" placeholder="请输入新的用户名" v-model="newUser" />
    </van-dialog>
    <van-dialog v-model="PwdShow" title="修改密码" show-cancel-button @confirm="editPwd">
      <van-field label="旧密码：" placeholder="请输入旧的密码" v-model="oldPwd" />
      <van-field label="新密码：" placeholder="请输入新的密码" v-model="newPwd" />
    </van-dialog>
  </div>
</template>

<script>
import EditInput from "@/components/personal/EditInput";
export default {
  components: {
    EditInput
  },
  data() {
    return {
      userInfo: {},
      nickShow: false,
      genderShow: false,
      userShow: false,
      PwdShow: false,
      newNick: "",
      newUser: "",
      newPwd: "",
      oldPwd: "",
      actions: [
        { name: "男", gender: 1 },
        { name: "女", gender: 0 }
      ]
    };
  },
  methods: {
    updata() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
        method: "get"
      }).then(res => {
        const { data, message } = res.data;
        if (message == "获取成功") {
          this.userInfo = data;
        }
      });
    },
    afterRead(fileObj) {
      const data = new FormData();
      data.append("file", fileObj.file);
      this.$axios({
        url: "/upload",
        method: "post",
        data: data
      }).then(res => {
        const { message, data } = res.data;
        if (message == "文件上传成功") {
          this.editEvery({ head_img: data.url });
          this.updata();
        }
      });
    },
    editNickname() {
      this.editEvery({ nickname: this.newNick });
      this.newNick = "";
    },
    editUsername() {
      this.newUser = "";
      this.editEvery({ username: this.newUser });
    },
    editPwd() {
      if (this.oldPwd === this.userInfo.password && this.newPwd) {
        this.editEvery({ password: this.newPwd });
        this.oldPwd = "";
        this.newPwd = "";
      } else if (this.newPwd === "") {
        this.oldPwd = "";
        this.newPwd = "";
        this.$toast.fail("输入密码的不能为空");
      } else {
        this.oldPwd = "";
        this.newPwd = "";
        this.$toast.fail("输入密码的与之前不一致");
      }
    },
    onSelect(item) {
      this.editEvery({ gender: item.gender });
      this.genderShow = false;
    },
    editEvery(data) {
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
        data: data
      }).then(res => {
        this.updata();
      });
    }
  },
  mounted() {
    this.updata();
  }
};
</script>

<style lang="less" scoped>
.edit {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .headeImg {
    position: relative;
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 50%;
    overflow: hidden;
    .mask {
      position: absolute;
      bottom: 0;
      height: 40%;
      width: 100%;
      line-height: 200%;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      color: white;
      font-size: 12px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    .van-uploader {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
}
.userInfo {
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px;
  border-radius: 14px;
}
p {
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px 10px 10px 10px;
  border-radius: 14px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
.van-field {
  font-size: 16px;
  margin: 10px 0px;
}
</style>