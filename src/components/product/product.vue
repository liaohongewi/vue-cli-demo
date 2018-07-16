  <template>
    <div class="shop-list">
        <router-link to="/" v-for="product in info.data" :key="product.id">
            <div class="l">
                <img :src="product.mainImage">
            </div>
            <div class="r">
                <span>{{product.name}}</span>
                <p>
                    <span>
                        <span class="u-money">¥
                            <i class="j-price-int">{{product.price}}</i>.
                            <em class="j-price-piont">00</em>
                        </span>
                    </span>
                </p>
                <p>
            <span style="font-size: 13px; color: gray;">数量:{{product.saleQuantity}} &nbsp;&nbsp; {{product.shopName}}</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Vueaxios from "vue-axios";
import store from "@/store.js";

Vue.use(Vueaxios, axios);
export default {
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    let LocalAPI =
      "https://www.easy-mock.com/mock/5b47190524cb747cf8888abb/store/product";
    this.info = "数据正在加载";
    Vue.axios.get(LocalAPI).then(res => {
      console.log(res.data);
      this.info = res.data;
    });
  }
};
</script>
