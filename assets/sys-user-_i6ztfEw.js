import{aT as e}from"./index-B2sUpHKW.js";const o=s=>e({url:"sys/user/listPage",method:"get",data:s}),u=s=>e({url:"sys/user/save",method:"post",data:s}),n=s=>{const{id:t}=s;return delete s.id,e({url:`sys/user/update/${t}`,method:"post",data:s})},d=s=>{const{id:t}=s;return delete s.id,e({url:`sys/user/password/${t}`,method:"get",data:s})},l=s=>e({url:"sys/user/delete",method:"post",data:s});export{d as a,o as l,l as r,u as s,n as u};
