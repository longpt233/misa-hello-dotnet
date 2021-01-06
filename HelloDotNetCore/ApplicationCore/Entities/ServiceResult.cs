using ApplicationCore.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entities
{
    public class ServiceResult
    {
        public object Data { get; set; }
        public string Messenger { get; set; }
        public MISACode MISACode { get; set; }
    }
}
