<template>
    <div class="manager">
    <a-row type="flex" justify="center">
        <a-col :span="3" style="font-size:20px;font-weight:bold;">菜鸟驿站</a-col>
        <a-col :span="1">
            <a-button @click="getData('ALL')">ALL</a-button>    
        </a-col>
        <a-col :span="1">
            <a-button @click="getData('已预约')">已预约</a-button>    
        </a-col>
        <a-col :span="1">
            <a-button @click="getData('已取件')">已取件</a-button>    
        </a-col>
        <a-col :span="1">
            <a-button @click="getData('未预约')">未预约</a-button>    
        </a-col>
        <a-col :span="1">
            <a-button shape="circle" @click="visible=true">+添加</a-button>    
                <a-modal
                v-model="visible"
                title="包裹入库"
                @onOk="add"
                >
                <template slot="footer">
                    <a-button key="back" @click="visible = false">取消</a-button>
                    <a-button key="submit" type="primary"  @click="add">
                    确定
                    </a-button>
                </template>
                <div style="line-height:32px;">
                    <a-row type="flex" justify="center" style="margin-bottom:12px;">
                    <a-col :span="3">
                        <span >运单号:</span>
                    </a-col>
                    <a-col :span="12">
                        <a-input v-model="form.parcelNum"></a-input>
                    </a-col>
                </a-row>
                <a-row type="flex" justify="center" style="margin-bottom:12px;">
                    <a-col :span="3">
                        <span >收件人:</span>
                    </a-col>
                    <a-col :span="12">
                        <a-input v-model="form.owner"></a-input>
                    </a-col>
                </a-row>
                <a-row type="flex" justify="center" style="margin-bottom:12px;">
                    <a-col :span="3">
                        <span >电话:</span>
                    </a-col>
                    <a-col :span="12">
                        <a-input v-model="form.phone"></a-input>
                    </a-col>
                </a-row>
                <a-row type="flex" justify="center" style="margin-bottom:12px;">
                    <a-col :span="3">
                        <span >重量:</span>
                    </a-col>
                    <a-col :span="12">
                        <a-input v-model="form.weight"></a-input>
                    </a-col>
                </a-row>

                </div>
                
             </a-modal>
        </a-col>
    </a-row>
    <a-row type="flex" justify="center">
        <a-col :span="8">
        <div class="table">
            <a-table :columns="columns" :dataSource="data" :pagination="false"> 
            <template slot="apTime" slot-scope="text,record">
                {{record.apTime|timeFilter}}
            </template>
            <template slot="op" slot-scope="text, record">
                <a-button v-if="record.status === '已预约'" type="primary">确认收货</a-button>
            </template>
            </a-table>
        </div>
        </a-col>
    </a-row>

    </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      visible: true,
      columns: [
        {
          title: "运单号",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "收件人",
          dataIndex: "owner",
          key: "owner"
        },
        {
          title: "电话",
          dataIndex: "phone",
          key: "phone"
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status"
        },
        {
          title: "预约时间",
          key: "aptime",
          width: "160px",
          scopedSlots: { customRender: "apTime" }
        },
        {
          title: "",
          key: "op",
          scopedSlots: { customRender: "op" }
        }
      ],
      data: [
        {
          id: "22",
          owner: "2232",
          phone: "231331313",
          status: "已预约",
          apTime: 1564022727
        }
      ],
      form:{
          parcelNum:'',
          owner:'',
          phone:'',
          weight:''
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {
    this.getData("ALL");
  },

  methods: {
    getData(status) {},
    add() {
        
    }
  },

  filters: {
    timeFilter(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>
<style lang='scss' >
.manager {
  .table {
    border: 1px solid #33333350;
  }
  .ant-row-flex {
    height: 50px;
    line-height: 50px;
  }
  .ant-btn-circle {
    height: 50px;
    width: 50px;
  }
}
</style>