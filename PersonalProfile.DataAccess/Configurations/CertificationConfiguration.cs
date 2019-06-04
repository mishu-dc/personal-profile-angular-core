using PersonalProfile.DataAccess.Entitiy;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProfile.DataAccess.Configuration
{
    public class CertificationConfiguration : IEntityTypeConfiguration<Certification>
    {
        public void Configure(EntityTypeBuilder<Certification> builder)
        {
            builder.ToTable("Certifications");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.CertificationDate)
                .IsRequired();

            builder.Property(c => c.IssueingAuthority)
                .HasMaxLength(100);

            builder.Property(c => c.Link)
                .HasMaxLength(255);

            builder.Property(c => c.Title)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(c => c.ProfileId)
                .IsRequired();

            builder.Property(c => c.Serial)
                .IsRequired();

            builder.HasOne(c => c.Profile)
                .WithMany(p => p.Certifications);
        }
    }
}
