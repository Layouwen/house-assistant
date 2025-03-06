import { useEffect } from "react";
import {
  subwayTransferSearch,
  ridingSearch,
  walkingSearch,
  transferSearch,
} from "./utils";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window._AMapSecurityConfig = {
  securityJsCode: import.meta.env.VITE_SECURITY_JS_CODE,
};

async function calcLine(
  起始点: any,
  地铁: any,
  目的地: any,
  { walking, riding, subwayTransfer, transfer, transferCenter }: any
) {
  // if (地铁) {
  //   await walkingSearch(walking, { start: 起始点.center, end: 地铁.center });
  //   await ridingSearch(riding, { start: 起始点.center, end: 地铁.center });
  //   await subwayTransferSearch(subwayTransfer, {
  //     start: 地铁.center,
  //     end: 目的地.center,
  //   });
  // }

  // await transferSearch(transfer, {
  //   start: 起始点.center,
  //   end: 目的地.center,
  // });

  await transferSearch(transferCenter, {
    start: 起始点.center,
    end: 芳村地铁.center,
  });
}

const 广州市真光中学初中部本部校区 = {
  name: "广州市真光中学初中部本部校区",
  center: [113.245134, 23.077277],
};
const 广州市真光中学初中部实验校区 = {
  name: "广州市真光中学初中部实验校区",
  center: [113.247294, 23.078784],
};
const 广州市第四中学初中逸园校区 = {
  name: "广州市第四中学初中逸园校区",
  center: [113.206299, 23.109685],
};
const 广州市西关外国语学校校本部 = {
  name: "广州市西关外国语学校校本部",
  center: [113.236228, 23.128506],
};
const 广州市第九十三中学 = {
  name: "广州市第九十三中学",
  center: [113.214663, 23.106788],
};
const 中国教育科学研究院荔湾实验学校 = {
  name: "中国教育科学研究院荔湾实验学校",
  center: [113.215577, 23.077787],
};
const 广州市荔湾区花地中学 = {
  name: "广州市荔湾区花地中学",
  center: [113.232985, 23.097188],
};
// const 广东实验中学荔湾学校广钢新城校区 = {
//   name: "广东实验中学荔湾学校广钢新城校区",
//   center: [],
// };
const 广东实验中学荔湾学校花地湾校区 = {
  name: "广东实验中学荔湾学校花地湾校区",
  center: [113.233145, 23.084221],
};
const 广东广雅中学初中部 = {
  name: "广东广雅中学初中部",
  center: [113.240889, 23.138589],
};

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
const 鹤洞地铁 = {
  name: "鹤洞地铁",
  center: [113.240153, 23.072495],
};
const 坑口地铁 = {
  name: "坑口地铁",
  center: [113.232498, 23.078878],
};
const 芳村地铁 = {
  name: "芳村地铁",
  center: [113.23587, 23.09857],
};

const 石围塘地铁 = {
  name: "石围塘地铁",
  center: [113.224847, 23.10377],
};

const 新世界天馥 = {
  name: "新世界天馥",
  center: [113.210261, 23.111539],
  schools: [
    广州市真光中学初中部本部校区,
    广州市真光中学初中部实验校区,
    广州市第四中学初中逸园校区,
    广州市西关外国语学校校本部,
    广州市第九十三中学,
    中国教育科学研究院荔湾实验学校,
    广州市荔湾区花地中学,
    // 广东实验中学荔湾学校广钢新城校区,
    广东实验中学荔湾学校花地湾校区,
    广东广雅中学初中部,
  ],
  run: ({ walking, riding, subwayTransfer, transfer, transferCenter }: any) => {
    const 起始点 = 新世界天馥;
    const 地铁 = 滘口地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
      transferCenter,
    });
  },
};

const 诚汇新都 = {
  name: "诚汇新都榕诚湾",
  center: [113.222039, 23.08719],
  run: ({ walking, riding, subwayTransfer, transfer, transferCenter }: any) => {
    const 起始点 = 诚汇新都;
    const 地铁 = 花地湾地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
      transferCenter,
    });
  },
};

const 广钢花城 = {
  name: "广钢花城",
  center: [113.253051, 23.054807],
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 广钢花城;
    const 地铁 = 鹤洞地铁;
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

const 保利锦上印 = {
  name: "保利锦上印",
  center: [113.224448, 23.080103],
  vrRoom:
    "https://www.anjuke.com/panorama?params=%7B%22city_id%22%3A12%2C%22loupan_id%22%3A518863%2C%22housetype_id%22%3A802498%2C%22pano_id%22%3A106031376%2C%22seeHouseBtn%22%3A1%2C%22pc_type%22%3A%22in_pc%22%2C%22page_source%22%3A%22VR%5Cu9875%22%7D&type=1&mode=0",
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 保利锦上印;
    const 地铁 = 坑口地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  },
};

const 万科理想花地朗庭 = {
  name: "万科理想花地朗庭",
  center: [113.228471, 23.086165],
  vrRoom:
    "https://www.anjuke.com/panorama?params=%7B%22city_id%22%3A12%2C%22loupan_id%22%3A520681%2C%22housetype_id%22%3A813474%2C%22pano_id%22%3A999900000886%2C%22seeHouseBtn%22%3A1%2C%22pc_type%22%3A%22in_pc%22%2C%22page_source%22%3A%22VR%5Cu9875%22%7D&type=1&mode=0",
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 万科理想花地朗庭;
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

const 保利和颂 = {
  name: "保利和颂",
  center: [113.228667,23.082651],
  vrRoom: 'https://www.anjuke.com/panorama/ybj?params={"city_id"%3A12%2C"loupan_id"%3A523872%2C"housetype_id"%3A826274%2C"pano_id"%3A111714820%2C"seeHouseBtn"%3A0%2C"panoSource"%3A"virtualModel"%2C"pc_type"%3A"in_pc"%2C"page_source"%3A"VR\u9875"}&type=1&mode=0',
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 保利和颂;
    const 地铁 = 坑口地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  },
};

const 中海浣花里 = {
  name: "中海浣花里",
  center: [113.232172, 23.082296],
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 中海浣花里;
    const 地铁 = 坑口地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  },
};

const 花语和岸 = {
  name: "花语和岸",
  center: [113.228255,23.09862],
  vrRoom: 'https://www.anjuke.com/panorama?params={"city_id"%3A12%2C"loupan_id"%3A522808%2C"housetype_id"%3A818792%2C"pano_id"%3A111719195%2C"seeHouseBtn"%3A0%2C"pc_type"%3A"in_pc"%2C"page_source"%3A"VR\u9875"}&type=1&mode=0&from=pc_lpxc_view',
  run: ({ walking, riding, subwayTransfer, transfer }: any) => {
    const 起始点 = 花语和岸;
    const 地铁 = 芳村地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
    });
  }
};

const 保利雅郡 = {
  name: "保利雅郡",
  center: [113.239793, 23.071507],
  run: ({ walking, riding, subwayTransfer, transfer, transferCenter }: any) => {
    const 起始点 = 保利雅郡;
    const 地铁 = 鹤洞地铁;
    const 目的地 = 东方国际广场;
    calcLine(起始点, 地铁, 目的地, {
      walking,
      riding,
      subwayTransfer,
      transfer,
      transferCenter,
    });
  },
};

const 广州无忧美家 = {
  name: "广州无忧美家",
  center: [113.313164, 23.096068],
};

const 名雕装饰股份 = {
  name: "名雕装饰股份",
  center: [
113.431102, 23.103294],
};

const 星艺装饰整装馆天河店 = {
  name: "星艺装饰整装馆天河店",
  center: [113.320964, 23.14138],
};

const 诺艺装饰 = {
  name: "诺艺装饰",
  center: [113.302604, 23.064882],
};

const 名门大厦首层九艺装饰 = {
  name: "名门大厦首层九艺装饰",
  center: [113.31586, 23.119057],
};

const 轩怡家装番禺旗舰店 = {
  name: "轩怡家装番禺旗舰店",
  center: [113.319984, 23.033156],
};

const pois = [
  // 西朗地铁,
  滘口地铁,
  石围塘地铁,
  // 花地湾地铁,
  // 鹤洞地铁,
  // 坑口地铁,
  // 芳村地铁,

  // 南塘,
  // 东方国际广场,

  // 新世界天馥,
  // 保利锦上印,
  // 诚汇新都,
  // 广钢花城,
  // 越秀天瀛,
  // 保利和颂,
  // 花语和岸,
  // 保利雅郡,
  // 中海浣花里,
  // 万科理想花地朗庭,

广州无忧美家,
名雕装饰股份,
星艺装饰整装馆天河店,
诺艺装饰,
名门大厦首层九艺装饰,
轩怡家装番禺旗舰店,
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
          // viewMode: "3D", //地图模式
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

          if (poi.schools) {
            for (const school of poi.schools) {
              const schoolMarker = new AMap.Marker({
                position: school.center,
                content: `<div class="custom-content-marker"><div class="poi-school-icon"></div><div class="poi-school">${school.name}</div></div>`,
                offset: new AMap.Pixel(-13, -30),
              });
              map.add(schoolMarker);
            }
          }
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

            const transferCenter = new AMap.Transfer({
              city: "020",
              policy: "LEAST_TIME",
              // policy: "MOST_COMFORT",
              map: map,
              panel: "map-transfer-center",
            });

            // 诚汇新都.run({ walking, riding, subwayTransfer, transfer, transferCenter });
            // 新世界天馥.run({ walking, riding, subwayTransfer, transfer, transferCenter });
            // 越秀天瀛.run({ walking, riding, subwayTransfer, transfer });
            // 广钢花城.run({ walking, riding, subwayTransfer, transfer });
            // 保利锦上印.run({ walking, riding, subwayTransfer, transfer });
            // 万科理想花地朗庭.run({ walking, riding, subwayTransfer, transfer });
            // 中海浣花里.run({ walking, riding, subwayTransfer, transfer });
            // 保利和颂.run({ walking, riding, subwayTransfer, transfer });
            // 花语和岸.run({ walking, riding, subwayTransfer, transfer });
            // 保利雅郡.run({ walking, riding, subwayTransfer, transfer });

            // return;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.searchList = (name: string) => {
            const placeSearch = new AMap.PlaceSearch({
              pageSize: 20, //单页显示结果条数
              pageIndex: 1, //页码
              city: "020", //兴趣点城市
              citylimit: true, //是否强制限制在设置的城市内搜索
              map: map, //展现结果的地图实例
              panel: "my-panel", //参数值为你页面定义容器的 id 值<div id="my-panel"></div>，结果列表将在此容器中进行展示。
                // autoFitView: true, //是否自动调整地图视野使绘制的 Marker 点都处于视口的可见范围
              });
              placeSearch.search(name, (status: any, result: any) => {
                console.log("layouwen place search status", status);
                if (status === "error") {
                console.log("layouwen place search error", result);
                return;
              }
              console.log(
                "layouwen place search result",
                result.poiList,
                result.poiList?.pois
              );
            }); //使用插件搜索关键字并查看结果
            }
          }
        );

        // const lineArr = [
        //   [116.368904, 39.913423],
        //   [116.382122, 39.901176],
        //   [116.387271, 39.912501],
        //   [116.398258, 39.9046],
        // ];
        // const polyline = new AMap.Polyline({
        //   path: lineArr, //设置线覆盖物路径
        //   strokeColor: "#3366FF", //线颜色
        //   strokeWeight: 5, //线宽
        //   strokeStyle: "solid", //线样式
        // });
        // map.add(polyline);

        const layers = map.getLayers();
        console.log("layouwen layers", layers);

        map.setFeatures(["bg", "point", "road", "building"]);
      })
      .catch((e: any) => {
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
      <div id="map-transfer-center"></div>
      <div id="my-panel"></div>
    </div>
  );
}

export default App;
