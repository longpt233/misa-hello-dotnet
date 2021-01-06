using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Services
{
    public class BaseService<TEntity> : IBaseService<TEntity> //where TEntity:BaseEntity
    {
        IBaseRepository<TEntity> _baseRepository;
        ServiceResult _serviceResult;
        public BaseService(IBaseRepository<TEntity> baseRepository)
        {
            _baseRepository = baseRepository;
            _serviceResult = new ServiceResult() { MISACode = Enums.MISACode.Success};
        }


        // virtual thăngf con có thể gghi đè , nếu không ggghi thì mặc định dùng bình thuươgnf
        // override ở thằng con 
        public virtual ServiceResult Add(TEntity entity)
        {
            //entity.EntityState = Enums.EntityState.AddNew;
            // Thực hiện validate:
            var isValidate = Validate(entity);
           
            if (isValidate == true)
            {
                // data bằng 1 àl thành côngg 0 là thất bại 
                _serviceResult.Data = _baseRepository.Add(entity);
                _serviceResult.MISACode = Enums.MISACode.IsValid;
                return _serviceResult;
            }
            else
            {
                return _serviceResult;
            }
           
        }

        public ServiceResult Delete(Guid entityId)
        {
            _serviceResult.Data = _baseRepository.Delete(entityId);
            return _serviceResult;
        }

        public IEnumerable<TEntity> GetEntities()
        {
            return _baseRepository.GetEntities();
        }

        public TEntity GetEntityById(Guid entityId)
        {
            return _baseRepository.GetEntityById(entityId);
        }

        public ServiceResult Update(TEntity entity)
        {
            //entity.EntityState = Enums.EntityState.Update;
            var isValidate = Validate(entity);
            if (isValidate == true)
            {
                _serviceResult.Data = _baseRepository.Update(entity);
                _serviceResult.MISACode = Enums.MISACode.IsValid;
                return _serviceResult;
            }
            else
            {
                return _serviceResult;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        private bool Validate(TEntity entity)
        {
            var isValidate = true;
            
            return isValidate;
        }

        /// <summary>
        /// Hàm thực hiện kiểm tra dữ liệu/ nghiệp vụ tùy chỉnh
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        protected virtual bool ValidateCustom(TEntity entity)
        {
            return true;
        }
    }
}
