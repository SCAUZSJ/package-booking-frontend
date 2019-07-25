<template>
  <div class="user">
      <p >预约取件</p>
      <a-row type="flex" justify="center">
          <a-col :span="2">运单号：</a-col>
          <a-col :span="4">
              <a-input v-model="parcelNum">d</a-input>
              
          </a-col>
      </a-row>
      <a-row type="flex" justify="center">
          <a-col :span="2">取件时间：</a-col>
          <a-col :span="4">
              <a-date-picker 
              @change="onChange" 
              :showTime="true" 
              format="YYYY-MM-DD, h:mm:ss"
              :disabledDate="disabledDate"
              :disabledTime="disabledDateTime"
             
              ></a-date-picker>
          </a-col>
      </a-row>
      <a-row type="flex" justify="center">
          <a-col :span="2" :offset="2">
              <a-button @click="submit">预约</a-button>
          </a-col>
          <a-col :span="2">
              <a-button>取消</a-button>
          </a-col>
      </a-row>
      
      
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      parcelNum: "",
      apTime: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {
    onChange(date, dateString) {
      var date = new Date(dateString);
      var str = date.getTime();
      this.apTime = str;
    },
    async submit() {
      const res = await this.$API.appointmentTime(this.parcelNum, this.apTime);
      if (res.data.code === 200) {
        this.$message.success("预约成功");
      }
    }, 
     disabledDate(current) {
      return current && current <moment().endOf('day');
    },
     disabledDateTime() {
      return {
        disabledHours: () => [0,1,2,3,4,5,6,7,8,20,21,22,23]
      };
    },

    
  },

  filters: {}
};
</script>
<style lang='scss' >
.user {
  & > p {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }

  .ant-row-flex {
    margin: 10px 0;
  }
}
</style>