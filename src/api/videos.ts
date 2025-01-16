import { request } from '@/utils/request'

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

export function historyOther(params?: any, data?: any) {
  return request({ url: '/video/historyOther', method: 'get', params, data })
}

export function historyVideo(params?: any, data?: any) {
  return request({ url: '/video/history', method: 'get', params, data })
}

export function recommendedVideo(params?: any, data?: any) {
  return request({ url: '/video/recommended', method: 'get', params, data })
}

export function recommendedLongVideo(params?: any, data?: any) {
  return request({ url: '/video/long/recommended/', method: 'get', params, data })
}

export function myVideo(params?: any, data?: any) {
  return request({ url: '/video/my', method: 'get', params, data })
}

export function privateVideo(params?: any, data?: any) {
  return request({ url: '/video/private', method: 'get', params, data })
}

export function likeVideo(params?: any, data?: any) {
  return request({ url: '/video/like', method: 'get', params, data })
}

export function videoComments(params?: any, data?: any) {
  return request({ url: '/video/comments', method: 'get', params, data })
}
