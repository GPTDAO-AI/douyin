import json
import httpx
import time
from datetime import datetime


def build_video_response(video_id, video_url) -> dict:
    """
    根据数据库中的 Video 对象，构建符合“抖音”风格 JSON 结构的数据。
    你可以根据实际情况调整以下字段和示例。
    """

    return {
        "aweme_id": video_id,   # 这里用 video_id 充当 aweme_id
        "desc": "",
        "create_time": 0,
        "video": {
            "play_addr": {
                # 这里的 uri 可以是 MinIO 文件的 object_key，
                # 或者你想自定义成类似 "v0d00fg10000cj1lq4jc77u0ng6s1gt0"
                "uri": video_url,
                "url_list": [video_url]
            },
            "poster": "none.jpg",
            "duration": 0
        },
        "share_url": "https://dev3.gptdao.ai/video/" + video_id,
        "share_info": {
            "share_url": "https://dev3.gptdao.ai/video/" + video_id,
            "share_link_desc": f"Check this video at Telegram mini app! https://dev3.gptdao.ai/video/{video_id}"
        },
        "duration": 0
    }


def refresh_task():
    resp = httpx.get("https://ttapi.gptdao.ai/video/random").json()
    return_list = []
    for video in resp:
        return_list.append(build_video_response(video["video_id"], video["url"]))
    # Dump json to file ./src/assets/data/posts6.json
    with open("./src/assets/data/posts6.json", "w") as f:
        json.dump(return_list, f, indent=4)
    print(f"Refreshed at {datetime.now()}")


if __name__  == "__main__":
    while True:
        refresh_task()
        # Refresh every 10 minutes
        time.sleep(600)
