using System;
using System.Collections.Generic; 
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    public class CustomersController: BaseEntityController<Customer>
    {

        // mặc dù kế thừa nnhưng vẫn phải truyền lên thì mới khởi tạo được
        ICustomerService _baseService;
        public CustomersController(ICustomerService baseService):base(baseService)
        {
            _baseService = baseService;
        }
    }
}
