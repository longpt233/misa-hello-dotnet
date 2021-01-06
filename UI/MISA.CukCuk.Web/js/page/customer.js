$(document).ready(function () {

    alert("hello");

    //dialog = $(".m-dialog").dialog({
     //   autoOpen: false,
     //   width: 700,
      //  modal: true,
    //});
     //loadData();

    //initEvens();

    $.ajax({
        url: 'http://api.manhnv.net/api/customers',
        method: 'GET'
    }).done(function (response) {
        console.log('ok ' + response);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i].FullName);
           // debugger;
        };
        var person = response[1];
        var name = person['FullName'];
        console.log("name=" + name + person);
        $('#tbListData tbody').empty();
        var html = ` <tr class="el-table__row"><td> ${ name }</td ></tr > `;
        $('#tbListData tr:last').after(html);
        $('#tbListData tr:last').after(` <tr class="el-table__row"><td rowspan="1" colspan="1"><div class="cell"> ${response[1].FullName} </div></td><td rowspan="1" colspan="1"><div class="cell">Nguyễn Diễm Minh</div></td><td rowspan="1" colspan="1"><div class="cell"></div></td><td rowspan="1" colspan="1"><div class="cell text-align-center">08/04/1950</div></td><td rowspan="1" colspan="1"><div class="cell"></div></td><td rowspan="1" colspan="1"><div class="cell">0950433775</div></td><td rowspan="1" colspan="1"><div class="cell">deployFmisa@misa.com</div></td><td rowspan="1" colspan="1"><div class="cell">804 West Bayview Ln, STE 1849, Trenton, NJ, 49680</div></td><td rowspan="1" colspan="1" class="text-align-right"><div class="cell"></div></td><td rowspan="1" colspan="1"><div class="cell">661749911</div></td><td rowspan="1" colspan="1"><div class="cell"></div></td></tr> `);
      
    }).fail(function (response) {
        console.log('wrong ' + response);
    });


    $('#tbListData tr:last').after(' <tr class="el-table__row"><td rowspan="1" colspan="1"><div class="cell">ok nha </div></td><td rowspan="1" colspan="1"><div class="cell">Nguyễn Diễm Minh</div></td><td rowspan="1" colspan="1"><div class="cell"></div></td><td rowspan="1" colspan="1"><div class="cell text-align-center">08/04/1950</div></td><td rowspan="1" colspan="1"><div class="cell"></div></td><td rowspan="1" colspan="1"><div class="cell">0950433775</div></td><td rowspan="1" colspan="1"><div class="cell">deployFmisa@misa.com</div></td><td rowspan="1" colspan="1"><div class="cell">804 West Bayview Ln, STE 1849, Trenton, NJ, 49680</div></td><td rowspan="1" colspan="1" class="text-align-right"><div class="cell"></div></td><td rowspan="1" colspan="1"><div class="cell">661749911</div></td><td rowspan="1" colspan="1"><div class="cell"></div></td></tr> ');
   
  
})

/**
 * Thực hiện load dữ liệu
 * Author: NVMANH (07/12/2020)
 * */
function loadData() {
    // load dữ liệu:
    // 1. Bước 1: gọi service lấy dữ liệu: (api.manhnv.net/api/customes)
    debugger;
    $.ajax({
        url: 'http://api.manhnv.net/api/customers',
        method: 'GET',
    }).done(function (response) {
        console.log(response);
        debugger;
        // 2. Bước 2: xử lý dữ liệu

        // 3. Bước 3: Build html và append lên UI:
        $('#tbListData tbody').empty();
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);
            var DOB = formatDate(response[i].DateOfBirth);
            var trHtml = `<tr class="el-table__row first">
                        <td rowspan="1" colspan="1" style="width: 100px;">
                            <div class="cell">${response[i].CustomerCode}</div>
                        </td>
                        <td rowspan="1" colspan="1" style="width: 143px;">
                            <div class="cell">${response[i].FullName}</div>
                        </td>
                        <td rowspan="1" colspan="1" style="width: 58px;"><div class="cell">${response[i].GenderName}</div></td>
                        <td rowspan="1" colspan="1" style="width: 100px;"><div class="cell text-align-center">${DOB}</div></td>
                        <td rowspan="1" colspan="1" style="width: 72px;"><div class="cell">${response[i].CustomerGroupName}</div></td>
                        <td rowspan="1" colspan="1" style="width: 119px;"><div class="cell">${response[i].PhoneNumber}</div></td>
                        <td rowspan="1" colspan="1" style="width: 192px;"><div class="cell">${response[i].Email}</div></td>
                        <td rowspan="1" colspan="1" style="width: 232px;"><div class="cell">${response[i].Address}</div></td>
                        <td rowspan="1" colspan="1" class="text-align-right" style="width: 55px;"><div class="cell">${response[i].DebitAmount || ""}</div></td>
                        <td rowspan="1" colspan="1" style="width: 98px;"><div class="cell">${response[i].MemberCardCode}</div></td>
                        <td rowspan="1" colspan="1" style="width: 32px;"><div class="cell"></div></td>
                    </tr>`;
            $('#tbListData >tbody:last-child').append(trHtml);

            
        }

    }).fail(function (response) {

    })

}

/**
 * Thực hiện gán các sự kiện
 * Author: NVMANH (07/12/2020)
 * */
function initEvens() {
    // Gán các sự kiện:
    $('#btnAdd').click(function () {
        dialog.dialog('open');
    })

    $('#btnCancel').click(function () {
        dialog.dialog('close');
    })
 
    //$('#tbListData').on('dblclick', 'tr', function () {
    //    alert('á');
    //})

    $('#tbListData').on('dblclick', 'tr', function () {
        // load dữ liệu chi tiết:

        // Hiển thị dialog thông tin chi tiết:
        dialog.dialog('open');
    })
}

/**
 * Hàm thực hiện định dạng ngày tháng (ngày/tháng/năm)
 * @param {Number} date ngày truyền vào
 * Author: NVMANH (07/12/2020)
 */
function formatDate(date) {
    var date = new Date(date);
    // lấy ngày:
    var day = date.getDate();
   
    // lấy tháng:
    var month = date.getMonth() + 1;
   
    // lấy năm:
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
}