//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RexonaAU
{
    using System;
    using System.Collections.Generic;
    
    public partial class PledgeInviteData
    {
        public int Id { get; set; }
        public int LinkId { get; set; }
        public string Type { get; set; }
        public Nullable<bool> IsUsed { get; set; }
        public Nullable<System.DateTime> InvitedDate { get; set; }
        public Nullable<System.DateTime> AcceptedDate { get; set; }
    }
}
