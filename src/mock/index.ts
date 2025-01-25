import resource from '../assets/data/resource.js'
import posts6 from '@/assets/data/posts6.json'
import { _fetch, cloneDeep, random } from '@/utils'
import { BASE_URL, FILE_URL } from '@/config'
import { useBaseStore } from '@/store/pinia'
import { axiosInstance } from '@/utils/request'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axiosInstance)

function getPage2(params: any): { limit: number; offset: number; pageNo: number } {
  const offset = params.pageNo * params.pageSize
  const limit = params.pageNo * params.pageSize + params.pageSize
  return { limit, offset, pageNo: params.pageNo }
}

let allRecommendPosts = []
let userVideos = []


const userItem = {
  "avatar_168x168": {
    "height": 720,
    "uri": "aweme-avatar/mosaic-legacy_330b002fd56a93e8b6f1",
    "url_list": [
      "https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_330b002fd56a93e8b6f1~c5_168x168.jpeg?from=2956013662"
    ],
    "width": 720
  },
  "avatar_300x300": {
    "height": 720,
    "uri": "aweme-avatar/mosaic-legacy_330b002fd56a93e8b6f1",
    "url_list": [
      "https://p3-pc.douyinpic.com/img/aweme-avatar/mosaic-legacy_330b002fd56a93e8b6f1~c5_300x300.jpeg?from=2956013662"
    ],
    "width": 720
  },
  "aweme_count": 772,
  "birthday_hide_level": 0,
  "can_show_group_card": 1,
  "city": "绵阳",
  "commerce_info": {
    "challenge_list": null,
    "head_image_list": null,
    "offline_info_list": [],
    "smart_phone_list": null,
    "task_list": null
  },
  "commerce_user_info": {
    "ad_revenue_rits": null,
    "has_ads_entry": true,
    "show_star_atlas_cooperation": false,
    "star_atlas": 1
  },
  "commerce_user_level": 0,
  "country": "中国",
  "cover_colour": "#02161823",
  "cover_url": [
    {
      "uri": "c8510002be9a3a61aad2",
      "url_list": ["2uHX3U05JE9hy7W6loPDK.png"]
    }
  ],
  "district": null,
  "favoriting_count": 0,
  "follow_status": 0,
  "follower_count": 40201989,
  "follower_request_status": 0,
  "follower_status": 0,
  "following_count": 1,
  "forward_count": 1,
  "gender": 2,
  "max_follower_count": 45635987,
  "mplatform_followers_count": 48209510,
  "nickname": "李子柒",
  "province": "四川",
  "public_collects_count": 0,
  "share_info": {
    "bool_persist": 1,
    "share_desc": "长按复制此条消息，打开抖音搜索，查看TA的更多作品。",
    "share_image_url": {
      "uri": "tos-cn-p-0015/b01c417ab84c48a18151df6f4874c517_1651306670",
      "url_list": ["noPw6HHZHlcIQTKhc-Sr4.png"]
    },
    "share_qrcode_url": {
      "uri": "330b002fd4ab5b64f36e",
      "url_list": [
        "https://p11.douyinpic.com/obj/330b002fd4ab5b64f36e",
        "https://p3.douyinpic.com/obj/330b002fd4ab5b64f36e",
        "https://p26.douyinpic.com/obj/330b002fd4ab5b64f36e"
      ]
    },
    "share_title": "快来加入抖音，让你发现最有趣的我！",
    "share_url": "www.iesdouyin.com/share/user/MS4wLjABAAAAPCnTQLqza4Xqu-uO7KZHcKuILkO7RRz2oapyOC04AQ0?iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&sec_uid=MS4wLjABAAAAPCnTQLqza4Xqu-uO7KZHcKuILkO7RRz2oapyOC04AQ0&from_ssr=1&from_aid=6383&u_code=13kgm680k&did=MS4wLjABAAAAiOgYyZm8XbWZMr5o3OvhR-TEOuNygb_hQOwkie-VXJpDYaR4vZfpiIGBfAWKCFHB",
    "share_weibo_desc": "长按复制此条消息，打开抖音搜索，查看TA的更多作品。"
  },
  "short_id": "71158770",
  "signature": "李家有女，人称子柒。联系邮箱：loveliziqi777@163.com",
  "total_favorited": 222610560,
  "uid": "68310389333",
  "unique_id": "",
  "user_age": -1,
  "white_cover_url": [
    {
      "uri": "318f1000413827e122102",
      "url_list": ["wqKmvIFifx1re2KR2VAXF.png"]
    }
  ]
}

let allRecommendVideos = (() => {
  const videos = posts6.map((v: any) => {
    v.type = 'recommend-video'
    v.author = userItem
    return v
  }).slice(0, 10)
  
  // If less than 10 items, duplicate existing ones until we have 10
  while (videos.length < 10) {
    const itemToDuplicate = videos[Math.floor(Math.random() * videos.length)]
    videos.push({ ...itemToDuplicate }) // Create a shallow copy
  }
  
  return videos.sort(() => Math.random() - 0.5)
})()


// console.log('allRecommendVideos', allRecommendVideos)
// eslint-disable-next-line
const t = [
  {
    type: 'imgs',
    src: `https://imgapi.cn/bing.php`,
    author: {
      unique_id: 1,
      avatar_168x168: {
        url_list: []
      },
      avatar_300x300: {
        url_list: []
      },
      cover_url: [
        {
          url_list: []
        }
      ],
      white_cover_url: [
        {
          url_list: []
        }
      ]
    }
  }
  // {
  //   type: 'user',
  //   src: `https://imgapi.cn/bing.php`,
  //   author: {
  //     unique_id: 2,
  //     avatar_168x168: {
  //       url_list: []
  //     },
  //     avatar_300x300: {
  //       url_list: []
  //     },
  //     cover_url: [
  //       {
  //         url_list: []
  //       }
  //     ],
  //     white_cover_url: [
  //       {
  //         url_list: []
  //       }
  //     ]
  //   }
  // },
  // {
  //   type: 'img',
  //   src: `https://imgapi.cn/bing.php`,
  //   author: {
  //     unique_id: 3,
  //     avatar_168x168: {
  //       url_list: []
  //     },
  //     avatar_300x300: {
  //       url_list: []
  //     },
  //     cover_url: [
  //       {
  //         url_list: []
  //       }
  //     ],
  //     white_cover_url: [
  //       {
  //         url_list: []
  //       }
  //     ]
  //   }
  // }
]

// allRecommendVideos.unshift(...t)
// {
//   type: 'user-imgs',
//   src: `http://douyin.ttentau.top/0.mp4?vframe/jpg/offset/0/w/${document.body.clientWidth}`,
//   author: {
//     unique_id: uniqueId('list_')
//   }
// },
// {
//   type: 'user',
//   src: `http://douyin.ttentau.top/0.mp4?vframe/jpg/offset/0/w/${document.body.clientWidth}`,
//   author: {
//     unique_id: uniqueId('list_')
//   }
// },

async function fetchData() {
  const baseStore = useBaseStore()

  _fetch(`${BASE_URL}/data/videos.md`).then((r) => {
    r.json().then(async (v) => {
      console.log('v', v)
      let userList = cloneDeep(baseStore.users)
      if (!userList.length) {
        await baseStore.init()
        userList = cloneDeep(baseStore.users)
      }
      v = v.map((w) => {
        w.type = 'recommend-video'
        const item: any = userList.find((a) => String(a.uid) === String(w.author_user_id))
        if (item) w.author = item
        return w
      })
      allRecommendVideos = allRecommendVideos.concat(v)
    })
  })
}

//TODO 有个bug，一开始只返回了6条数据，但第二次前端传过来的pageNo是2了，就是会从第10条数据开始返回，导致中间漏了4条
export async function startMock() {
  mock.onGet(/video\/recommended/).reply(async (config) => {
    const { start, pageSize } = config.params
    // shuffle
    const list = allRecommendVideos.sort(() => Math.random() - 0.5)
    return [
      200,
      {
        data: {
          total: 10000,
          list: list.slice(0, pageSize)
        },
        code: 200,
        msg: ''
      }
    ]
  })
  mock.onGet(/video\/long\/recommended/).reply(async (config) => {
    const page = getPage2(config.params)
    return [
      200,
      {
        data: {
          total: 844,
          list: allRecommendVideos.slice(page.offset, page.limit)
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/video\/comments/).reply(async (config) => {
    const videoIds = [
      '7260749400622894336',
      '7128686458763889956',
      '7293100687989148943',
      '6923214072347512068',
      '7005490661592026405',
      '7161000281575148800',
      '7267478481213181238',
      '6686589698707590411',
      '7321200290739326262',
      '7194815099381484860',
      '6826943630775831812',
      '7110263965858549003',
      '7295697246132227343',
      '7270431418822446370',
      '6882368275695586568',
      '7000587983069957383'
    ]
    let id = config.params.id
    if (!videoIds.includes(String(id))) {
      id = videoIds[random(0, videoIds.length - 1)]
    }
    const r2 = await _fetch(`${FILE_URL}/comments/video_id_${id}.md`)
    const v = await r2.json()
    if (v) {
      return [200, { data: v, code: 200 }]
    }
    return [200, { code: 500 }]
  })

  mock.onGet(/video\/private/).reply(async (config) => {
    const page = getPage2(config.params)
    return [
      200,
      {
        data: {
          total: 10,
          list: allRecommendVideos.slice(100, 110).slice(page.offset, page.limit)
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/video\/like/).reply(async (config) => {
    const page = getPage2(config.params)
    return [
      200,
      {
        data: {
          total: 150,
          list: allRecommendVideos.slice(200, 350).slice(page.offset, page.limit)
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/video\/my/).reply(async (config) => {
    const page = getPage2(config.params)
    if (!userVideos.length) {
      // let r = await fetch(BASE_URL + '/data/user-71158770.json')
      // let r = await fetch(BASE_URL + '/data/user-8357999.json')
      const r = await _fetch(BASE_URL + '/data/user_video_list/user-12345xiaolaohu.md')
      const list = await r.json()
      const baseStore = useBaseStore()
      const userList = cloneDeep(baseStore.users)

      userVideos = list.map((w) => {
        if (userList.length) {
          const item = userList.find((a) => String(a.uid) === String(w.author_user_id))
          if (item) w.author = item
        }
        return w
      })
    }

    return [
      200,
      {
        data: {
          pageNo: page.pageNo,
          total: userVideos.length,
          list: userVideos.slice(page.offset, page.limit)
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/video\/history/).reply(async (config) => {
    const page = getPage2(config.params)
    return [
      200,
      {
        data: {
          total: 150,
          list: allRecommendVideos.slice(200, 350).slice(page.offset, page.limit)
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/user\/collect/).reply(async () => {
    return [
      200,
      {
        data: {
          video: {
            total: 50,
            list: allRecommendVideos.slice(350, 400)
          },
          music: {
            total: resource.music.length,
            list: resource.music
          }
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/user\/video_list/).reply(async (config) => {
    const id = config.params.id
    const r2 = await _fetch(`${FILE_URL}/user_video_list/user-${id}.md`)
    const v = await r2.json()
    if (v) {
      return [200, { data: v, code: 200 }]
    }
    return [200, { code: 500 }]
  })

  mock.onGet(/user\/panel/).reply(async () => {
    // const r2 = await _fetch(BASE_URL + '/data/users.md')
    // const v = await r2.json()
    // let item = v.find(a => a.uid === '68310389333')
    // let item = v.find(a => a.uid === '59054327754')
    if (userItem) {
      return [200, { data: userItem, code: 200 }]
    }
    return [200, { code: 500 }]
  })

  mock.onGet(/user\/friends/).reply(async () => {
    //const r2 = await _fetch(BASE_URL + '/data/users.md')
    //const v = await r2.json()
    return [200, { data: [], code: 200 }]
  })

  mock.onGet(/historyOther/).reply(async (config) => {
    console.log('historyOther', config.params)
    const page = getPage2(config.params)
    return [
      200,
      {
        data: {
          pageNo: page.pageNo,
          total: 0,
          list: []
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/post\/recommended/).reply(async (config) => {
    const page = getPage2(config.params)

    if (!allRecommendPosts.length) {
      const r = await _fetch(BASE_URL + '/data/posts.md')
      allRecommendPosts = await r.json()
    }
    return [
      200,
      {
        data: {
          pageNo: page.pageNo,
          total: allRecommendPosts.length,
          list: allRecommendPosts.slice(0, 1000).slice(page.offset, page.limit)
        },
        code: 200,
        msg: ''
      }
    ]
  })

  mock.onGet(/shop\/recommended/).reply(async (config) => {
    const page = getPage2(config.params)

    const r2 = await _fetch(BASE_URL + '/data/goods.md')
    const v = await r2.json()
    return [
      200,
      {
        data: {
          total: v.length,
          list: v.slice(page.offset, page.limit)
        },
        code: 200
      }
    ]
  })

  fetch("https://ttapi.gptdao.ai/app/random").then((r) => {
    r.json().then((v) => {
      console.log('v', v)
      allRecommendVideos = allRecommendVideos.concat(v).map((w) => {
        w.type = 'recommend-video'
        w.author = userItem
        return w
      })
      console.log('allRecommendVideos', allRecommendVideos)
    })
  })

  // setTimeout(fetchData, 1000)
}
