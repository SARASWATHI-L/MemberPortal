using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MemberPortal.Migrations
{
    public partial class ClaimDbMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MockDatabases",
                columns: table => new
                {
                    TransactionID = table.Column<Guid>(nullable: false),
                    MemberID = table.Column<int>(nullable: false),
                    PolicyID = table.Column<int>(nullable: false),
                    ClaimID = table.Column<int>(nullable: false),
                    BenefitID = table.Column<int>(nullable: false),
                    HospitalId = table.Column<int>(nullable: false),
                    ClaimAmount = table.Column<double>(nullable: false),
                    BenefitName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MockDatabases", x => x.TransactionID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MockDatabases");
        }
    }
}
