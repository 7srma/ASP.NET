//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IconicsArena.Context
{
    using System;
    using System.Collections.Generic;
    
    public partial class Sale
    {
        public int SaleId { get; set; }
        public Nullable<int> OrderId { get; set; }
        public Nullable<int> CartId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalAmount { get; set; }
    
        public virtual Cart Cart { get; set; }
        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}
