<template>
  <a-form
    :model="user"
    name="register"
    class="register-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    @submit="submitUser"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="user.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input v-model:value="user.email">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="user.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item
      label="Confirm Password"
      name="confirmpassword"
      :rules="[{ required: true, message: 'Please confirm your password!' }]"
    >
      <a-input-password v-model:value="user.confirmpassword">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        Register
      </a-button>
      <br />
      Are you already registered!
      <a href="/Login">login</a>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { useUserStore } from '../composables/userStore';
import { useForm } from 'vee-validate';

// const user = reactive({
//   username: '',
//   password: '',
//   email: '',
//   confirmpassword: '',
//   remember: true,
//   user: ref({}),
// });

const userStore = useUserStore();
const user = ref({})
const { handleSubmit, validate } = useForm({
  initialValues: user,
});

const submitUser = handleSubmit(async (values) => {
  const isValid = await validate();
  if (isValid) {
    // create user
    await userStore.create(values.username || '', values.email);
  } else {
    // Updated user
    userStore.update(values.email, values.username || '');
  }
});

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// const disabled = computed(() => {
//   return !(user.username && user.password && user.confirmpassword);
// });
</script>

<style scoped>
.register-form {
  margin-top: 2rem;
  width: 50%;
}
</style>
