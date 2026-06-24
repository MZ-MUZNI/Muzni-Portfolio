export const experience = [
  {
    role: "Software Engineer",
    company: "HCL Technologies",
    location: "Colombo, Sri Lanka",
    period: "Oct 2025 - Present",
    bullets: [
      "Architected a full Permission-Based Access Control system, migrating the platform from role-based permissions to per-page granular checks across multiple modules, with contextual disabled-state UI for unauthorized users.",
      "Designed and implemented a comprehensive User Management module with complex role/permission logic in C#, earning direct client recognition for improving administrative efficiency.",
      "Prepared release handover documentation and deployment packages for multiple major productionreleases, coordinating with the application support team to ensure smooth handoffs with zero critical post-release defects."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "HCL Technologies",
    location: "Colombo, Sri Lanka",
    period: "Apr 2023 - Oct 2025",
    bullets: [ 
        "Designed the Master Group Industry Classification module end-to-end, including a classification derivation algorithm based on best-rated Legal Entities by rank, manual override support, and full audit logging.",
        "Developed and maintained the Counterparty management module, including bulk Excel/CSV upload with pre-import validation covering duplicate ID detection, mandatory field checks, and row-level error reporting, and delivered iterative UI and functional enhancements in response to client change requests.",
        "Diagnosed and resolved critical production bugs where entities were silently excluded from Master Group Ratings due to a missing entry, delivering a minimal, production-safe fix.",
        "Built bulk permission assignment scripts for user groups, incorporating duplicate-prevention logic, regional GUID handling, and transaction rollback with preview modes.",
        "Conducted Knowledge Transfer sessions to onboard new team members, covering platform architecture, codebase conventions, and development workflows."
     ]
  },
  {
    role: "Intern Software Engineer",
    company: "HCL Technologies",
    location: "Colombo, Sri Lanka",
    period: "Jan 2022 - Apr 2023",
    bullets: [ 
        "Authored transactional database scripts with preview modes, rollback capabilities, and soft-deletionpatterns, maintaining data integrity across tens of thousands of production records.",
        "Executed manual test cases across credit risk and counterparty management modules, identifying and documenting defects in collaboration with the development team.",
        "Reproduced and investigated production-reported issues, providing root cause analysis to accelerate developer resolution.",
        "Supported UAT cycles by validating business logic against client requirements and raising discrepancies through the defect tracking workflow."
     ]
  }
];