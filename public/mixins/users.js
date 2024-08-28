//this is as if i am cutting 
//the script section out of the vue file and puuting it here inside the export
import axios from "axios";
export default{
  data(){
    return{
      name:'',
      email:'',
      phoneno:'',
      address:'',
    }
  },
  methods:{
    getUserById(){
      axios.get("http://localhost:2000/users/${this.id}")
      .then(res=>{
        this.name = res.data.name;
        this.phoneno = res.data.phoneno;
        this.address = res.data.address;
        this.email = res.data.email    
    }).catch(err=>console.log(err))
    },
  }
}