### 如何把视频变成序列图片
[FFmpeg](https://ffmpeg.zeranoe.com/builds/)

[具体看文档](https://trac.ffmpeg.org/wiki/Create%20a%20thumbnail%20image%20every%20X%20seconds%20of%20the%20video)

```bash
# 例如 西部世界第二季某一集的10秒片段
# -ss 开始时间 -t 结束时间
~/Downloads/ffmpeg/bin/ffmpeg -i ~/Downloads/Westworld.mp4 -ss 00:00:31 -t 00:00:41 -vf fps=5 %d.jpg
```