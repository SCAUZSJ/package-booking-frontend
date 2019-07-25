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
              <a-input v-model="apTime">d</a-input>
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
export default {
  data () {
    return {
        parcelNum:'',
        apTime:''
    };
  },

  components: {},

  computed: {},

  mounted(){},

  created(){},

  methods: {
      submit(){
          if(this.parcelNum == undefined||this.parcelNum === ''){
              return;
          }
          if(this.apTime == undefined || this.apTime ===  ''){
              return;
          }
          
      }
  },

  filters:{},

}

</script>
<style lang='scss' >

.user{
    & >p {
        text-align:center;
        font-size:28px;
        font-weight: bold;
    }

    .ant-row-flex{
        margin:10px 0 ;
    }
}
</style>