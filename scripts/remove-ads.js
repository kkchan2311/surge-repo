
// 屏蔽页面常见广告词
let body = $response.body;
body = body.replace(/ads|tracking|advert/gi, '');
$done({ body });