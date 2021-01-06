1. new Solution .NET Core API web 


2.  Create các Library .NET core support (Project)
- theo đúng câu trúc VS .NET core structure web
- thêm sự phụ thuộc : infrastructure phụ thuộc core, web phụ thuộc core và infrastructure
- cái namespace không nhất thiết phải trung với tên gói 

3. nuget pack 
- dapper
- mysql
- microsoft. extension. configuration. abstraction :

4. debugg
- đặt debugg
- shift f9 cửa sổ xem nhanh 
- Ctrl- alt -p
- timì đúng pid
- Ctrl- alt -c : call stack : taát cả hàm nó chạy qua 

5. configuration
- DI trong startup
- configg connect trong  application.json

6. some exp 
- transaction: ACID : một giao dịch hoặc là thành côgn hết hoặc là rollback 
- Excute : trả về số bản gghi bị ảnh hưởng, trả vêề -1 nếu chạy lệnh select 
