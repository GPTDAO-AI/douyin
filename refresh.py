import json
import httpx
import time
from datetime import datetime, timedelta
import schedule
import logging
import sys

# 配置日志
logging.basicConfig(
    level=logging.INFO,  # 或 DEBUG
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)  # 输出到标准输出
    ]
)

def build_video_response(video_id, video_url) -> dict:
    """
    根据数据库中的 Video 对象，构建符合“抖音”风格 JSON 结构的数据。
    """
    return {
        "aweme_id": video_id,
        "desc": "",
        "create_time": 0,
        "video": {
            "play_addr": {
                "uri": video_url,
                "url_list": [video_url]
            },
            "poster": "none.jpg",
            "duration": 0
        },
        "share_url": f"https://dev3.gptdao.ai/video/{video_id}",
        "share_info": {
            "share_url": f"https://dev3.gptdao.ai/video/{video_id}",
            "share_link_desc": f"Check this video at Telegram mini app! https://dev3.gptdao.ai/video/{video_id}"
        },
        "duration": 0
    }

def refresh_task():
    try:
        resp = httpx.get("https://ttapi.gptdao.ai/video/random").json()
        return_list = []
        for video in resp:
            return_list.append(build_video_response(video["video_id"], video["url"]))
        # Dump json to file ./src/assets/data/posts6.json
        with open("./src/assets/data/posts6.json", "w") as f:
            json.dump(return_list, f, indent=4)
        logging.info(f"Refreshed at {datetime.now()}")
    except Exception as e:
        logging.error(f"Failed to refresh task: {e}")

def scheduled_video_push():
    try:
        resp = httpx.get("https://ttapi.gptdao.ai/video/random-push").json()
        logging.info(f"Pushed video at {datetime.now()}: {resp}")
    except Exception as e:
        logging.error(f"Failed to push video: {e}")

def log_next_run_times():
    now = datetime.now()
    next_refresh = min([job.next_run for job in schedule.get_jobs() if job.job_func == refresh_task], default=None)
    next_push = min([job.next_run for job in schedule.get_jobs() if job.job_func == scheduled_video_push], default=None)

    refresh_time_left = (next_refresh - now).total_seconds() // 60 if next_refresh else "N/A"
    push_time_left = (next_push - now).total_seconds() // 60 if next_push else "N/A"

    logging.info(f"Time until next refresh_task: {refresh_time_left} minutes")
    logging.info(f"Time until next scheduled_video_push: {push_time_left} minutes")

if __name__ == "__main__":
    # Schedule tasks
    schedule.every(5).minutes.do(refresh_task)
    schedule.every(15).minutes.do(scheduled_video_push)

    logging.info("Scheduler started. Press Ctrl+C to exit.")

    while True:
        schedule.run_pending()
        log_next_run_times()
        time.sleep(60)
