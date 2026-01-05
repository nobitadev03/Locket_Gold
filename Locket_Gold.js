// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @Ohoang7 ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);

obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Đã sửa ngày mua (original_purchase_date) về năm 2003
var ohoang7={
    is_sandbox:!1,
    ownership_type:"PURCHASED",
    billing_issues_detected_at:null,
    period_type:"normal",
    expires_date:"2099-12-18T01:04:17Z", // Ngày hết hạn giữ nguyên 2099 để dùng vĩnh viễn
    grace_period_expires_date:null,
    unsubscribe_detected_at:null,
    original_purchase_date:"2003-07-28T01:04:18Z", // Sửa thành 2003
    purchase_date:"2003-07-28T01:04:17Z", // Sửa thành 2003
    store:"app_store"
};

var vuong2023={
    grace_period_expires_date:null,
    purchase_date:"2003-07-28T01:04:17Z", // Sửa thành 2003
    product_identifier:"com.ohoang7.premium.yearly",
    expires_date:"2099-12-18T01:04:17Z"
};

const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(vuong2023.product_identifier=s,obj.subscriber.subscriptions[s]=ohoang7):obj.subscriber.subscriptions["com.ohoang7.premium.yearly"]=ohoang7,obj.subscriber.entitlements[e]=vuong2023}else obj.subscriber.subscriptions["com.ohoang7.premium.yearly"]=ohoang7,obj.subscriber.entitlements.pro=vuong2023;$done({body:JSON.stringify(obj)});
