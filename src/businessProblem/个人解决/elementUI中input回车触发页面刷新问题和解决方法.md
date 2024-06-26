---
title: elementUI中input回车触发页面刷新问题和解决方法.
icon: circle-info
---



1、如果希望阻止这一默认行为，可以在 el-form 标签上添加 @submit.native.prevent
2、
```
<el-form 
  :model="form" 
  ref="form" 
  label-width="200px" 
  class="form" 
  @submit.native.prevent="() => submit('form')"
>
  <el-form-item
    label="姓名"
    prop="name"
  >
    <el-input v-model.number="form.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">提交</el-button>
    <el-button @click="reset('form')">重置</el-button>
  </el-form-item>
</el-form>
 
 
 
//注意事项
el-form 方式 确保使用 @submit.native.prevent 阻止原生事件，执行方法为搜索按钮按click事件
[确保方法调用不丢参数]
搜索按钮 - 确保被包裹在 el-form 中
搜索按钮 - 确保按钮的click事件去除掉
搜索按钮 - 确保增加 native-type="submit" 属性
```
