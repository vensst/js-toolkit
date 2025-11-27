<!--
 * @Name: TheDate.vue
 * @Description:
 * @Date: 2025-11-03 15:05:15
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-03 15:05:15
-->
<script setup lang="ts">
import {ref} from 'vue';
import {request, requestFetch,type CancelToken} from '@vensst/js-toolkit';

const cancelToken = ref<CancelToken|null>(null);
// xhr 请求
const xhrMockGet = () => {
  cancelToken.value = new request.CancelToken();
  request({
    url: 'http://localhost:5001/api/user/detail',
    method: "get",
    params: {
      id: 1,
    },
    cancelToken: cancelToken.value
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
const xhrMockPost = () => {
  request.post('http://localhost:5001/api/user/login', {
    username: 'admin',
    password: 123456
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })

  // request({
  //   url: 'http://localhost:5001/api/user/login',
  //   method: 'post',
  //   data: {
  //     username: 'admin',
  //     password: 123456
  //   },
  //
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
}
const xhrMockDelete = () => {
}

const xhrMockPut = () => {
}

// fetch 请求
const fetchMockGet = () => {
  cancelToken.value = new requestFetch.CancelToken();
  requestFetch({
    url: 'http://localhost:5001/api/user/detail',
    method: 'get',
    params: {
      id: 1,
    },
    cancelToken: cancelToken.value
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

const fetchMockPost = () => {
  requestFetch({
    url: 'http://localhost:5001/api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: 123456
    },

  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
const fetchMockDelete = () => {
}

const fetchMockPut = () => {
}

// 取消请求
const cancelRequest = () => {
  cancelToken.value && cancelToken.value.cancel("请求取消")
}
</script>

<template>
  <div>
    <div>
      xhr 请求:
      <button id="btn1" @click="xhrMockGet">get 请求</button>
      <button id="btn2" @click="xhrMockPost">post 请求</button>
      <button id="btn3" @click="xhrMockDelete">delete 请求</button>
      <button id="btn4" @click="xhrMockPut">put 请求</button>
    </div>
    <div>
      fetch 请求:
      <button id="btn5" @click="fetchMockGet">get 请求</button>
      <button id="btn6" @click="fetchMockPost">post 请求</button>
      <button id="btn7" @click="fetchMockDelete">delete 请求</button>
      <button id="btn8" @click="xhrMockPut">put 请求</button>
    </div>
    <div>
      取消请求:
      <button id="btn9" @click="cancelRequest">取消请求</button>
    </div>
  </div>
</template>

<style scoped>

</style>
