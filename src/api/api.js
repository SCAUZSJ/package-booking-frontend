import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const base_url = 'http://localhost:8080';
export default {
    addParcel(data) {
        return axios({
            url: base_url+'/parcels',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getParcels(status){
        return axios({
            url:base_url+'/parcels',
            method:'get',
            params:{
                status
            }
        });
    },
    appointmentTime(id,apTime){
        return axios({
            url:base_url+'/parcels/'+id,
            method:'patch',
            params:{
                apTime
            },
           
        });
    },
    changeStatus(id,data){
        return axios({
            url: base_url+'/parcels/'+id,
            method: 'put',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    

}
