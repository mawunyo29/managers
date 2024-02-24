<script  setup>
import { reactive ,ref } from "vue";

const formLogin = reactive({
  username: {
    label: "Username",
    prop: "username",
    value: "",
    placeholder: "Username",
    type: "text",
    is_visible:true
  },
  password: {
    label: "Password",
    prop: "password",
    value: "",
    placeholder: "Password",
    type: "password",
    is_visible:true
  },
  password: {
    label: "Password confirm",
    prop: "password_confirm ",
    value: "",
    placeholder: "Password",
    type: "password",
    is_visible:true
  },
  // gender:{
  //   label:"Gender",
  //   prop: "gender",
  //   value: "",
  //   type: "select",
  //   is_visible:true,
  //   options:[
  //     {
  //       label:"Mr",
  //       value:"Mr"
  //     },
  //     {
  //       label:"Mrs",
  //       value:"Mrs"
  //     },
  //     {
  //       label:"Miss",
  //       value:"Miss"
  //     },

  //   ]
  // },
  remeber: {
    label: "Remember me",
    prop: "remeber",
    value: false,
    type: "checkbox",
    is_visible:true
  },
});
const title = "Login";
const stringRegex = /^[a-zA-Z0-9]+$/;
const rules = ref({
  username: [
    { required: true, message: "Please input username", trigger: "blur" },
    

  ],
  password: [
    { required: true, message: "Please input password", trigger: "blur" },
  ],
});

const submit = (data) => {
  console.log("submit" , data['username']);
  
};
</script>

<template>
  <request-form :title="title" :dataInput="formLogin" :rules="rules" @submit="submit"></request-form>
</template>

<style scoped></style>
