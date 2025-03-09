// export default async (req, res) => {
//     // 目标服务器地址
//     const targetUrl = 'https://47.94.74.16/api';
  
//     // 转发请求并添加自定义头
//     const response = await fetch(targetUrl, {
//       method: req.method,
//       headers: {
//         ...req.headers,
//         'X-Custom-Header': 'From Vercel Proxy',
//       },
//       body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
//     });
  
//     // 返回响应内容
//     const data = await response.json();
//     res.status(response.status).json(data);
//   };


console.log("I'm running")

  const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // 目标服务器地址（可从环境变量读取）
  const target = process.env.TARGET_SERVER || 'https://47.94.74.16';
  console.log("get request url:",req.url)
  console.log("get request method:",req.method)
  console.log("get request headers:",req.headers)



  // 创建代理中间件
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,            // 修改 Host 头为目标域名
    pathRewrite: { '^/api': '' },  // 移除路径中的 /api 前缀
    secure: true,                   // 验证 SSL 证书
    onProxyRes: (proxyRes) => {Available
      // 可选：修改响应头（如解决 CORS）
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
    },
    onError: (err, req, res) => {
      res.status(500).json({ error: 'Proxy Error', details: err.message });
    }
  });

  // 执行代理
  proxy(req, res);
};

const testBackend = async () => {
    try {
      const response = await fetch('https://47.94.74.16/api');
      console.log('目标服务器响应状态:', response.status);
    } catch (error) {
      console.error('目标服务器不可达:', error.message);
    }
  };
  
  testBackend(); // 启动时自动测试