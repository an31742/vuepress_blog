---
title: js数组及对象数组取交集，并集，补集的方法H
icon: circle-info
---

这是后端给的json数据格式
```javascript
{
    "id": "726a59f1413043c18cacbd3a2d6514b9",
    "name": "2dbe1f139b334a901eeb64dcabbe3a55.jpg",
    "code": "F03584600293",
    "type": "1",
    "children": [
        {
            "id": "c687e253b96f4ca0acbb1cd6d29d538e",
            "name": "rvt-{3D}",
            "code": "M27701353069",
            "type": "2",
            "children": []
        },
        {
            "id": "e3d86ad54151452a8bd11455556e7b8e",
            "name": "截屏2023-12-27 08.45.13.png",
            "code": "F03637928953",
            "type": "1",
            "children": []
        }
    ]
}
```
echarts需要的数据格式
```javascript
option
  option = {
    tooltip: {
      trigger: 'item',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter(params: any) {
        const item = params.data
        return `
                ${categoriesData[item.type].label}名称：${item.name}
                 <br/>
                 ${categoriesData[item.type].label}编码：${item.code}
               `
      },
      backgroundColor: 'rgba(50,50,50,0.7)',
      borderColor: "rgba(50,50,50,0.7)",
      textStyle: {
        color: "#fff"
      }
    },
    legend: {
      orient: 'vertical',
      left: "left",
      bottom: '2',
    },
    series: [{
      type: 'graph',
      layout: 'force',
      symbolSize: 58,
      draggable: true,
      roam: true,
      categories: categories,
      focusNodeAdjacency: true,
      edgeSymbol: ['', 'arrow'],
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 20
          },
          formatter(x: any) {
            return x.data.name;
          }
        }
      },
      label: {
        show: true
      },
      force: {
        repulsion: 2000,
        edgeLength: 120
      },
      data: chartsData.nodes,
      links: chartsData.links
    }]
  }
  option && myChart.setOption(option);
}

```
series 里面的link的数据
```javascript


[
    {
        "lineStyle": {},
        "label": {
            "align": "center",
            "fontSize": 12
        },
        "source": "2dbe1f139b334a901eeb64dcabbe3a55.jpg",
        "target": "rvt-{3D}",
        "name": ""
    },
    {
        "lineStyle": {},
        "label": {
            "align": "center",
            "fontSize": 12
        },
        "source": "2dbe1f139b334a901eeb64dcabbe3a55.jpg",
        "target": "截屏2023-12-27 08.45.13.png",
        "name": ""
    }
]
```
series 里面的link的数据
```javascript
[
    {
        "code": "F03584600293",
        "type": "0",
        "symbolSize": 100,
        "name": "2dbe1f139b334a901eeb64dcabbe3a55.jpg",
        "itemStyle": {
            "color": "#8570FE"
        }
    },
    {
        "code": "M27701353069",
        "type": "2",
        "symbolSize": 100,
        "name": "rvt-{3D}",
        "itemStyle": {
            "color": "#73A455"
        }
    },
    {
        "code": "F03637928953",
        "type": "1",
        "symbolSize": 100,
        "name": "截屏2023-12-27 08.45.13.png",
        "itemStyle": {
            "color": "#34A490"
        }
    }
]
```
递归调用方法
```javascript
const changeData = (data: any) => {



  let newData: any;
  if (Object.prototype.toString.call(data) === '[object Object]') {
    newData = [data]

  } else if (Object.prototype.toString.call(data) === '[object Array]') {
    newData = data
  }
  newData.forEach((item: any) => {
    chartsData.nodes.push({
      code: item.code,
      type: item.type,
      symbolSize: 100,
      name: item.name,
      itemStyle: {}
    })
    if (item.children.length > 0) {
      changeData(item.children)
    }

    if (item.children.length > 0) {
      item.children.forEach((value: any) => {
        chartsData.links.push({
          lineStyle: {},
          label: {},
          source: item.name,
          target: value.name,
          name: ''
        })
      })
    }
  })



}

```
