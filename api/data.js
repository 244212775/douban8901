import axios from "axios";
export var getFindlist=()=>{
  return axios.get("../../static/发现.json").then((res)=>{
    return res.data
  })
}
