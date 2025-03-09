export default async (req, res) => {
    // 目标服务器地址
    const targetUrl = 'https://47.94.74.16/api';
  
    // 转发请求并添加自定义头
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        'X-Custom-Header': 'From Vercel Proxy',
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });
  
    // 返回响应内容
    const data = await response.json();
    res.status(response.status).json(data);
  };