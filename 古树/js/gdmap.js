var map = new AMap.Map('gdmap', {
  viewMode: '2D', // 默认使用 2D 模式
  zoom: 14, // 初始化地图层级
  center: [114.334121, 30.57687] // 初始化地图中心点
});

// 定义标记并添加标注
const marker1 = new AMap.Marker({
  position: [114.332926, 30.576112], // 枫杨，二级，教超，待定
  label: {
      content: '枫杨，二级，教超1，待定',
      offset: new AMap.Pixel(20, -10),
      direction: 'right'
  },
  icon: new AMap.Icon({
      size: new AMap.Size(40, 50),
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png', // 自定义图标
      imageSize: new AMap.Size(40, 50)
  }),
  cursor: 'pointer'
});
map.add(marker1);

const marker2 = new AMap.Marker({
  position: [114.333058, 30.576221], // 枫杨，二级，教超，180
  label: {
      content: '枫杨，二级，教超2，180',
      offset: new AMap.Pixel(20, -10),
      direction: 'right'
  },
  icon: new AMap.Icon({
      size: new AMap.Size(40, 50),
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png', // 自定义图标
      imageSize: new AMap.Size(40, 50)
  }),
  cursor: 'pointer'
});
map.add(marker2);

const marker3 = new AMap.Marker({
  position: [114.331706, 30.576313], // 枫杨，二级，田家炳，待定
  label: {
      content: '枫杨，二级，田家炳，待定',
      offset: new AMap.Pixel(20, -10),
      direction: 'right'
  },
  icon: new AMap.Icon({
      size: new AMap.Size(40, 50),
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png', // 自定义图标
      imageSize: new AMap.Size(40, 50)
  }),
  cursor: 'pointer'
});
map.add(marker3);

// 添加信息窗口
function addInfoWindow(marker, content) {
  var infoWindow = new AMap.InfoWindow({
      content: content,
      offset: new AMap.Pixel(0, -30)
  });
  marker.on('click', function() {
      map.setCenter(marker.getPosition()); // 点击标记时，将地图中心移动到标记位置
      infoWindow.open(map, marker.getPosition());
  });
}

// 为每个标记点添加信息窗口
addInfoWindow(marker1, `
  <div style="color:#ff0000">
    <h3>枫杨，二级，教超，待定</h3>
    <button onclick="addToFavorites('枫杨，二级，教超，待定')">收藏</button>
    <button onclick="notInterested('枫杨，二级，教超，待定')">不感兴趣</button>
  </div>
`);

addInfoWindow(marker2, `
  <div style="color:#00ff00">
    <h3>枫杨，二级，教超，180</h3>
    <button onclick="addToFavorites('枫杨，二级，教超，180')">收藏</button>
    <button onclick="notInterested('枫杨，二级，教超，180')">不感兴趣</button>
  </div>
`);

addInfoWindow(marker3, `
  <div style="color:#0000ff">
    <h3>枫杨，二级，田家炳，待定</h3>
    <button onclick="addToFavorites('枫杨，二级，田家炳，待定')">收藏</button>
    <button onclick="notInterested('枫杨，二级，田家炳，待定')">不感兴趣</button>
  </div>
`);

// 收藏功能
function addToFavorites(treeName) {
    alert(treeName + " 已添加到收藏列表！");
    // 这里可以添加逻辑，将古树信息存储到本地存储或服务器
}

// 不感兴趣功能
function notInterested(treeName) {
    alert(treeName + " 已标记为不感兴趣！");
    // 这里可以添加逻辑，记录用户不感兴趣的古树
}