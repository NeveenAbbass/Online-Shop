import {createStore} from "vuex";
import axios from "axios";
let Store = createStore({
  state(){
    return{
      items:[
        {
          code:"1",
          name: "Face Lotion",
          price:"20LE",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          id:"1"
        },
        {
          code:"2",
          name: "Face wash",
          price:"20LE",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          id:"2"
        },
        {
          code:"3",
          name: "hand Lotion",
          price:"20LE",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          id:"3"
        },
      ],
      products:[]
    }
  },
  mutations: {
    DELLETEITEM(state,item){
      let index = state.items.indexOf(item)
      state.items.splice(index,1)
    },
    GETALLPRODUCTS(state,data){
      state.products = data
    },
    DELETEPRODUCTPRIV(state,item){
      let index = state.products.indexOf(item)
      state.products.splice(index,1);
      location.reload();
    },
    ADDTOCART(state,item){
      state.items.push(item);
    }
    
  },
  actions: {
    DeleteItem({commit},item){
      //commit to tell go to the mutatio
      commit('DELLETEITEM', item)
    },
    AddToCart({commit},item){
      //commit to tell go to the mutatio
      commit('ADDTOCART', item)
    },
    DeleteProductPriv({ commit }, item) {
      axios.delete(`http://localhost:2000/products/${item}`)
        .then(res => {
          console.log(res.data);
          commit('DELETEPRODUCTPRIV', item);
        })
        .catch(err => {
          console.error(err);
        });
    },
    
      // commit to tell go to the mutatio
    GetAllProducts({commit}){
      axios.get("http://localhost:2000/products")
      //same commit but different syntax as we are dealing with axios and crud operations
      .then(res=>commit('GETALLPRODUCTS', res.data))
      .catch(err=>console.log(err))
    },
  },
  getters:{
    ItemsCount(state){
      return state.items.length;
    }
  }
});
export default Store;