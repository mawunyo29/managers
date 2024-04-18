<script setup>
import { reactive, ref } from "vue";
import { routerKey } from "vue-router";
// const { scrfToken, getScrfToken } = useScrfToken()
const appConfig = useRuntimeConfig().public;
const api_url = appConfig;

const formLogin = reactive({
  email: {
    label: "Email",
    prop: "email",
    value: "",
    placeholder: "Email",
    type: "email",
    is_visible: true,
  },
  password: {
    label: "Password",
    prop: "password",
    value: "",
    placeholder: "Password",
    type: "password",
    is_visible: true,
  },
  remeber: {
    label: "Remember me",
    prop: "remeber",
    value: false,
    type: "checkbox",
    is_visible: true,
  },
});
const title = "Login";
const stringRegex = /^[a-zA-Z0-9]+$/;
const rules = reactive({
  // username: [
  //   { required: true, message: "Please input username", trigger: "blur" },
  // ],
  email: [{ required: true, message: "Please input email", trigger: "blur" }],

  password: [
    { required: true, message: "Please input password", trigger: "blur" },
  ],
});

// const { authentificate, options } = useAuth()
const { isAuthenticated } = storeToRefs(useAuthStore());
const { authentificateHandler } = useAuthStore();
let formData = new FormData();
const login = async () => {
  console.log(isAuthenticated);
  try {
    if (isAuthenticated.value) {
      return navigateTo("/dashboard");
    }
    formData.append("email", formLogin.email.value);
    formData.append("password", formLogin.password.value);
    const {error} = await authentificateHandler(
      formData
    );
    console.log("error", error.value,);
    if (!error.value) {
      //redirect to dashboard
      return navigateTo("/dashboard");
    } 
  } catch (error) {
    ElMessage.error("An error occured");
  }
};
const submit = async (dataLogin) => {
  if (dataLogin.email.value == "" || dataLogin.password.value == "") {
    return;
  }
  formData.append("email", dataLogin.email.value);
  formData.append("password", dataLogin.password.value);
  console.log("dataLogin", dataLogin);
  await login();
};
</script>

<template>
  <request-form
    :title="title"
    :dataInput="formLogin"
    :rules="rules"
    @submit="submit"
  >
  </request-form>
</template>

<style scoped></style>
