# Profile Image API

API สำหรับสร้าง **รูปโปรไฟล์ (Avatar)** แบบอัตโนมัติจากชื่อผู้ใช้  
ใช้ **Node.js + Express + canvas**  
เหมาะสำหรับใช้เป็น default avatar, profile image, หรือ placeholder image

ภาพที่ได้จะเป็น:
- รูปสี่เหลี่ยมจัตุรัส
- สีพื้นหลังสุ่มแบบ **คงที่ตามชื่อ (seeded color)**
- ตัวอักษรย่อของชื่อ อยู่ตรงกลาง
- ส่งออกเป็นไฟล์ **PNG**

