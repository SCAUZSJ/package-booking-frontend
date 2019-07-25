import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    addParcel(data) {
        return axios({
            url: 'http://localhost:8080/parcels',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    

}
