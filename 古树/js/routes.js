document.addEventListener('DOMContentLoaded', function() {
    var map = new AMap.Map('map-container', {
        zoom: 10,
        center: [114.305469, 30.592925] // 默认中心点为湖北大学附近
    });

    var driving = new AMap.Driving({
        map: map,
        panel: 'panel'
    });

    document.getElementById('plan-route').addEventListener('click', function() {
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;

        if (!start || !end) {
            alert('请输入起点和终点地址！');
            return;
        }

        driving.search(start, end, function(status, result) {
            if (status === 'complete') {
                console.log('绘制驾车路线完成');
            } else {
                console.error('获取驾车数据失败：' + result);
            }
        });
    });
});