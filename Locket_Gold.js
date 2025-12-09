/*
  Locket Gold Unlock - V2 (Force Enable)
  Updated: 2025
*/

const obj = JSON.parse($response.body);

// 1. Tạo dữ liệu gói Gold giả lập (Siêu Vip)
const goldData = {
  "expires_date": "2099-09-09T09:09:09Z",
  "original_purchase_date": "2023-09-09T09:09:09Z",
  "purchase_date": "2023-09-09T09:09:09Z",
  "ownership_type": "PURCHASED",
  "store": "app_store"
};

const productID = "com.locket.gold.yearly";

// 2. Kiểm tra và tiêm thuốc (Inject)
if (obj && obj.subscriber) {
  
  // A. Kích hoạt Subscription
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.subscriptions[productID] = goldData;

  // B. Kích hoạt Entitlements (Quyền hạn)
  // Locket thường check 1 trong các key này, ta kích hoạt TẤT CẢ.
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  
  const entitlementKeys = ["Gold", "Locket Gold", "premium", "pro"];
  
  entitlementKeys.forEach(key => {
    obj.subscriber.entitlements[key] = {
      "product_identifier": productID,
      ...goldData
    };
  });
}

// 3. Trả về kết quả đã hack
$done({ body: JSON.stringify(obj) });
