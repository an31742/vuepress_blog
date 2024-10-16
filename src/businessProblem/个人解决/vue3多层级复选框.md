---
title: vue3多层级复选框
icon: circle-info
---

! [vue3多层级复选框](./image/imageCheck.png)

### 需求
当点击左侧复选框时，右侧的全部复选框会被选中，当右侧部分复选框被选中时，左侧会显示半选状态。上方有一个全选复选框，当左侧所有复选框都被选中时，全选按钮会显示选中状态，当左侧复选框部分选中时，全选按钮会显示半选状态。
### 代码
1首先我们要确定数据格式，就是左侧和右侧还是有全选按钮的关联关系
```

全选是独立的
//全选 设置选中的非选择
const selectAll: any = ref(false);
//使用element 完成半选
const selectAllIndeterminate: any = ref(false);


//左侧和右侧的关联关系


const options: any = ref([
  {
    label: 'Option 1',  //左侧展示的数据
    leftChecked: false, // 左侧是否选中
    optionsData: ['A', 'B', 'C'], // 右侧的数据
    rightChecked: [],    //右侧选中
    indeterminate:false,  //左侧是否全选还是半选
  },
  {
    label: 'Option 2',
    leftChecked: false,
    optionsData: ['X', 'Y', 'Z'],
    rightChecked: [],
    indeterminate:false,
  },
]);

```
2.通过循环展示出来原型图的样式
```

   <div>
        <el-checkbox v-model="selectAll" :indeterminate="selectAllIndeterminate" @change="handleSelectAll">全选</el-checkbox>

        <el-row v-for="(item, index) in options" :key="index">
          <!-- 左侧复选框 -->
          <el-col :span="8">
            <el-checkbox v-model="item.leftChecked" @change="handleLeftChange(index)" :indeterminate="item.indeterminate">
              {{ item.label }}
            </el-checkbox>

          </el-col>


          <!-- 右侧复选框 -->
          <el-col :span="16">
            <el-checkbox-group v-model="item.rightChecked" @change="(val:any)=>handleCheckGroup(index,val)">
              <el-checkbox :label="option" v-for="(option, optionIndex) in item.optionsData" :key="optionIndex">
                {{ option }}
              </el-checkbox>

            </el-checkbox-group>

          </el-col>

        </el-row>

      </div>

    

```
3 实现的相应的逻辑
```
//点击左侧的复选框 右侧全选 同时消除半选的状态
const handleLeftChange = (index: number) => {
//找到对应的左侧复选框
  const option = options.value[index];
  //  option.leftChecke是否选中，如果选中就将右侧的所有的都赋值过去 这是多个复选框展示和选中都是以数组的形式所表现的所以就可以的到点击左侧右侧全选和右侧不全选
  option.rightChecked = option.leftChecked ? [...option.optionsData] : [];
  option.indeterminate=false
  checkSelectAll();
}


// 监听右侧复选框的变化
const handleCheckGroup=(index:number,data:any)=>{
//找到对应的数据
  const option = options.value[index];
//根据右侧复选框来判断做的是否选中还是半选 如果右侧全部选中和原本数据对比如果一致那就左侧就是选中
  option.leftChecked =data.length>0 && data.length === option.optionsData.length 
  // 如果右侧全部选中和原本数据对比如果不一致那就左侧就是半选
  option.indeterminate = data.length>0 && data.length !== option.optionsData.length 
  checkSelectAll();
}

// 无论左侧还是右侧全部选中了对上面的全选做一个状态调整

const checkSelectAll = () => {
// 判断左侧是否全部选中
  const allLeftChecked = options.value.every((option: any) => option.leftChecked);
//判断左侧是否是部分选中
  const someLeftChecked = options.value.some((option: any) => option.leftChecked);


 //如果是全部选中那么就将全选的按钮做选中效果
  selectAll.value = allLeftChecked ? true : (someLeftChecked ? null : false);
 //如果是部分选中那么就将全选的按钮做部分选中效果
  selectAllIndeterminate.value =allLeftChecked ? false : (someLeftChecked ? true : false); 
}

//当全选的点击事件触发变化
const handleSelectAll = (data: any) => {
//去掉全选的半选样式
  selectAllIndeterminate.value=false
  options.value.map((option: any) => {
  //将全选选中 true /false 选中和不选中的效果 赋值给所有的左侧复选框
    option.leftChecked = data;
    //将全选选中 将所有的左侧半选样式去掉
    option.indeterminate = false;
       //将全选选中 将所有的左侧半选样式去掉
     

    // 右侧整体如果是选中的话那么就有全部的数据否则就是空 

    option.rightChecked = data ? [...option.optionsData] : [];
  });
}


// 初始化时检查是否全选
onMounted(() => {
  checkSelectAll();
});


```
