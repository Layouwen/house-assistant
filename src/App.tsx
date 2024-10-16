import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window._AMapSecurityConfig = {
  securityJsCode: import.meta.env.VITE_SECURITY_JS_CODE,
};

function calcLine(
  起始点: any,
  地铁: any,
  目的地: any,
  { walking, riding, subwayTransfer, transfer }: any
) {
  walking.search(起始点.center, 地铁.center, (status: any, result: any) => {
    console.log("layouwen walking result", result);
  });

  riding.search(起始点.center, 地铁.center, (status: any, result: any) => {
    console.log("layouwen riding result", result);
  });

  subwayTransfer.search(
    地铁.center,
    目的地.center,
    (status: any, result: any) => {
      console.log("layouwen subwayTransfer result", result);
    }
  );

  transfer.search(起始点.center, 目的地.center, (status: any, result: any) => {
    console.log("layouwen transfer result", result);
  });
}

const 南塘 = {
  name: "南塘",
  center: [113.216471, 23.100384],
};

const 东方国际广场 = {
  name: "东方国际广场",
  center: [113.287755, 23.135538],
};

const 滘口地铁 = {
  name: "滘口地铁",
  center: [113.20844, 23.113796],
};
const 西朗地铁 = {
  name: "西朗地铁",
  center: [113.232521, 23.066789],
};
const 花地湾地铁 = {
  name: "花地湾地铁",
  center: [113.23403, 23.087055],
};

const 新世界天馥 = {
  name: "新世界天馥",
  center: [113.210261, 23.111539],
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 新世界天馥;
    const 地铁 = 滘口地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  },
};

const 诚汇新都 = {
  name: "诚汇新都榕诚湾",
  center: [113.222039, 23.08719],
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 诚汇新都;
    const 地铁 = 花地湾地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  },
};

const 越秀天瀛 = {
  name: "越秀天瀛",
  center: [113.203718, 23.051949],
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 越秀天瀛;
    const 地铁 = 西朗地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  },
};

const 中海花湾壹号 = {
  name: "中海花湾壹号",
  center: [113.238532, 23.068602],
};

const 保利雅郡 = {
  name: "保利雅郡",
  center: [113.239793, 23.071507],
};

const pois = [
  西朗地铁,
  滘口地铁,
  花地湾地铁,
  南塘,
  东方国际广场,
  新世界天馥,
  诚汇新都,
  越秀天瀛,
  保利雅郡,
  中海花湾壹号,
];

function App() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AMapLoader.load({
      key: import.meta.env.VITE_KEY, //申请好的Web端开发者 Key，调用 load 时必填
      version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
    })
      .then((AMap: any) => {
        const map = new AMap.Map("map", {
          mapStyle: "amap://styles/26cf7e5fe26024097cc49d172d10c23f",
          zoom: 15,
          center: 越秀天瀛.center,
        });

        map.on("click", (ev: any) => {
          const lnglat = ev.lnglat;
          console.log("layouwen", ev, [lnglat.lng, lnglat.lat]);
        });

        pois.forEach((poi) => {
          const markerContent = `<div class="custom-content-marker">
<img src="//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png">
<div class="poi-name">${poi.name}</div>
</div>`;
          {
            /* <div class="close-btn"">X</div> */
          }
          const marker = new AMap.Marker({
            position: poi.center,
            content: markerContent,
            offset: new AMap.Pixel(-13, -30),
          });
          map.add(marker);
        });

        AMap.plugin(
          [
            "AMap.ToolBar",
            "AMap.Scale",
            "AMap.MapType",
            "AMap.Geolocation",
            "AMap.ControlBar",
            // "AMap.HawkEye",
            "AMap.PlaceSearch",
            "AMap.Walking",
            "AMap.Riding",
            "AMap.Transfer",
          ],
          function () {
            //添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
            map.addControl(new AMap.ToolBar());

            //添加比例尺控件，展示地图在当前层级和纬度下的比例尺
            map.addControl(new AMap.Scale());

            //添加鹰眼控件，在地图右下角显示地图的缩略图
            // map.addControl(new AMap.HawkEye({ isOpen: true }));

            // //添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
            map.addControl(new AMap.MapType());

            //添加定位控件，用来获取和展示用户主机所在的经纬度位置
            map.addControl(new AMap.Geolocation());

            //添加控制罗盘控件，用来控制地图的旋转和倾斜
            map.addControl(new AMap.ControlBar());

            const walking = new AMap.Walking({
              map: map,
              panel: "map-walking",
              autoFitView: true,
            });

            const riding = new AMap.Riding({
              map: map,
              panel: "map-riding",
              // autoFitView: true,
            });

            const subwayTransfer = new AMap.Transfer({
              city: "020",
              policy: "LEAST_TIME",
              // policy: "MOST_COMFORT",
              map: map,
              panel: "map-subway-transfer",
            });

            const transfer = new AMap.Transfer({
              city: "020",
              policy: "LEAST_TIME",
              // policy: "MOST_COMFORT",
              map: map,
              panel: "map-transfer",
            });

            // 诚汇新都.run({ walking, riding, subwayTransfer, transfer });
            // 新世界天馥.run({ walking, riding, subwayTransfer, transfer });
            越秀天瀛.run({ walking, riding, subwayTransfer, transfer });

            return;

            const placeSearch = new AMap.PlaceSearch({
              pageSize: 20, //单页显示结果条数
              pageIndex: 1, //页码
              city: "020", //兴趣点城市
              citylimit: true, //是否强制限制在设置的城市内搜索
              map: map, //展现结果的地图实例
              panel: "my-panel", //参数值为你页面定义容器的 id 值<div id="my-panel"></div>，结果列表将在此容器中进行展示。
              // autoFitView: true, //是否自动调整地图视野使绘制的 Marker 点都处于视口的可见范围
            });
            placeSearch.search("西朗", (status: any, result: any) => {
              console.log(
                "layouwen place search result",
                result.poiList,
                result.poiList.pois
              );
            }); //使用插件搜索关键字并查看结果
          }
        );

        const lineArr = [
          [116.368904, 39.913423],
          [116.382122, 39.901176],
          [116.387271, 39.912501],
          [116.398258, 39.9046],
        ];
        const polyline = new AMap.Polyline({
          path: lineArr, //设置线覆盖物路径
          strokeColor: "#3366FF", //线颜色
          strokeWeight: 5, //线宽
          strokeStyle: "solid", //线样式
        });
        map.add(polyline);
        const layers = map.getLayers();
        console.log("layouwen layers", layers);

        // map.setFeatures(["bg", "point", "road", "building"]);
      })
      .catch((e) => {
        console.error(e, "error"); //加载错误提示
      });
  }, []);
  return (
    <div className="w-screen h-screen flex">
      <div className="flex-grow" id="map"></div>
      <div id="map-walking"></div>
      <div id="map-riding"></div>
      <div id="map-subway-transfer"></div>
      <div id="map-transfer"></div>
      <div id="my-panel"></div>
    </div>
  );
}

export default App;
