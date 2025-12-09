/*
  Locket Gold Unlock
  Fixed & Optimized
*/

const obj = JSON.parse($response.body);

// Định nghĩa thông tin gói Gold (Hết hạn năm 2099)
const goldData = {
  "expires_date": "2099-02-18T07:52:54Z",
  "original_purchase_date": "2024-02-11T07:52:55Z",
  "purchase_date": "2024-02-11T07:52:54Z",
  "ownership_type": "PURCHASED",
  "store": "app_store"
};

const productID = "com.locket.gold.yearly"; // ID gói cước chuẩn
const entitlementID = "Gold"; // Tên quyền hạn chuẩn của Locket

// Kiểm tra xem obj có cấu trúc subscriber không để tránh lỗi
if (obj && obj.subscriber) {
  
  // Gán thông tin vào subscriptions
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.subscriptions[productID] = goldData;

  // Gán thông tin vào entitlements (Quyền hạn)
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  obj.subscriber.entitlements[entitlementID] = {
    "product_identifier": productID,
    ...goldData
  };
  
  // Thêm dòng này để đánh lừa UI hiển thị (nếu cần)
  obj.Attention = "Locket Gold Fixed by AI";
}

$done({ body: JSON.stringify(obj) });
