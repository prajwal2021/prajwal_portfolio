import { PROJECT_CARD_DEFAULT_IMAGE } from "@/constants";
import { SAAS_PRODUCT_DETAILS } from "./saas-product-details";

export type ProjectDetail = {
  title: string;
  subtitle?: string;
  points: string[];
  image: string;
  description: string;
  structuredContent?: {
    sections: Array<{
      title: string;
      content: string[];
      image?: string;
      images?: string[];
    }>;
  };
  links?: {
    frontend?: string;
    backend?: string;
    github?: string;
  };
};

const SAAS_CARD_IMAGES: Record<string, string> = {
  fortress: PROJECT_CARD_DEFAULT_IMAGE,
  promptify: PROJECT_CARD_DEFAULT_IMAGE,
  countdown: PROJECT_CARD_DEFAULT_IMAGE,
  "security-analyser": PROJECT_CARD_DEFAULT_IMAGE,
  clearbill: PROJECT_CARD_DEFAULT_IMAGE,
  ash: PROJECT_CARD_DEFAULT_IMAGE,
};

const saasMerged = Object.fromEntries(
  Object.entries(SAAS_PRODUCT_DETAILS).map(([slug, d]) => [
    slug,
    { ...d, image: SAAS_CARD_IMAGES[slug] ?? PROJECT_CARD_DEFAULT_IMAGE },
  ])
) as Record<string, ProjectDetail>;

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "mssql-to-postgresql-migration": {
    title: "Aurora Migration",
    subtitle: "Enterprise Work Project",
    points: [
      "Migrated a large-scale enterprise application from MSSQL to PostgreSQL, handling schema design, data conversion, and query optimization to improve query response time by ~30%.",
      "Refactored application code to support the new database, ensuring seamless integration and improving system scalability and performance.",
      "Conducted regression testing and validation to ensure zero data loss and improved query efficiency post-migration.",
      "Delivered migration and feature enhancements that support over 200K merchants, improving transaction reliability and scalability.",
    ],
    image: "/projects/project_1.png",
    description: "Led the seamless migration of critical databases from Microsoft SQL Server to PostgreSQL.",
    structuredContent: {
      sections: [
        {
          title: "Project Overview",
          content: [
            "I led the migration of a large-scale enterprise application from Microsoft SQL Server to Aurora PostgreSQL on AWS.",
            "The migration goal was to improve scalability, performance, and long-term maintainability while supporting high-volume merchants and production traffic.",
            "The project involved comprehensive schema redesign, query refactoring, and performance optimization to achieve approximately 30% improvement in query response times.",
            "The migration supports over 200,000 merchants in production with zero data loss and improved system reliability.",
          ],
        },
        {
          title: "Problem Statement",
          content: [
            "The existing Microsoft SQL Server database was limiting scalability and performance as the application grew to support hundreds of thousands of merchants.",
            "Migration to a cloud-native database solution was necessary to improve long-term maintainability and reduce infrastructure costs.",
            "The migration required zero data loss and minimal downtime to avoid disrupting production merchant operations.",
            "Application code needed refactoring to support PostgreSQL syntax and leverage new database features for optimal performance.",
          ],
        },
        {
          title: "Technology Stack Used",
          content: [
            "Database: Aurora PostgreSQL on AWS",
            "Previous System: Microsoft SQL Server",
            "Cloud Platform: AWS Aurora for managed database services",
            "Data Access: Application-level SQL queries and refactored stored procedures",
            "Validation: Regression testing and data consistency validation tools",
          ],
        },
        {
          title: "Migration Strategy",
          content: [
            "I designed a comprehensive migration strategy that included schema redesign to optimize for PostgreSQL's strengths and data type mapping from MSSQL to PostgreSQL.",
            "The migration involved converting stored procedures, functions, and triggers from T-SQL to PostgreSQL PL/pgSQL syntax.",
            "I implemented a phased approach to minimize risk, starting with non-critical tables and gradually migrating core transaction tables.",
            "Data migration scripts were developed to ensure accurate data conversion, including handling of MSSQL-specific data types and constraints.",
            "Index optimization was performed to leverage PostgreSQL's indexing capabilities and improve query performance.",
          ],
        },
        {
          title: "Implementation Details",
          content: [
            "I redesigned the database schema to take advantage of PostgreSQL features, including proper use of JSONB for flexible data storage and optimized foreign key relationships.",
            "Application code was refactored to replace MSSQL-specific syntax with PostgreSQL-compatible SQL, including date functions, string operations, and aggregate functions.",
            "I converted stored procedures from T-SQL to PostgreSQL PL/pgSQL, ensuring business logic remained intact while adapting to PostgreSQL syntax requirements.",
            "Query optimization involved analyzing execution plans, creating appropriate indexes, and rewriting complex queries to leverage PostgreSQL's query optimizer.",
            "I implemented data migration scripts that handled type conversions, constraint mappings, and ensured referential integrity throughout the migration process.",
            "Application-level changes were made to support the new database connection strings, error handling, and transaction management specific to PostgreSQL.",
          ],
        },
        {
          title: "Performance Optimization",
          content: [
            "I optimized database indexes to align with PostgreSQL's B-tree and GIN index types, improving query performance for frequently accessed data.",
            "Query refactoring focused on eliminating MSSQL-specific optimizations and leveraging PostgreSQL's advanced query planning capabilities.",
            "I implemented connection pooling and query caching strategies to reduce database load and improve response times.",
            "The migration resulted in approximately 30% improvement in query response times compared to the previous MSSQL implementation.",
            "Performance testing was conducted under production-like load to validate optimization improvements and identify bottlenecks.",
          ],
        },
        {
          title: "Reliability & Validation",
          content: [
            "I conducted comprehensive regression testing to ensure all application functionality worked correctly with the new database.",
            "Data consistency validation was performed to verify zero data loss and accurate data migration across all tables.",
            "I implemented automated testing scripts to compare query results between MSSQL and PostgreSQL implementations during the migration phase.",
            "Transaction integrity was validated to ensure ACID properties were maintained throughout the migration process.",
            "Performance benchmarks were established and monitored to ensure the migration met performance improvement goals.",
            "Rollback procedures were prepared and tested to ensure the ability to revert to MSSQL if critical issues were discovered.",
          ],
        },
        {
          title: "Scale & Impact",
          content: [
            "The migration supports over 200,000 merchants in production, handling high-volume transaction processing reliably.",
            "Query performance improvements of approximately 30% contribute to better user experience and reduced system load.",
            "The move to Aurora PostgreSQL provides better scalability for future growth and reduces infrastructure management overhead.",
            "Improved system reliability and performance enable the platform to handle increased merchant traffic without degradation.",
          ],
        },
      ],
    },
  },
  "venmo-integration": {
    title: "Venmo Integration",
    subtitle: "Enterprise Work Project",
    points: [
      "Integrated Venmo SDK into Forte Checkout, enabling seamless peer-to-peer payment support alongside existing methods.",
      "Built an iframe-based modal for secure transactions and optimized the front end in Angular for a smooth user experience.",
      "Ensured compliance with security protocols and performed unit/integration testing for reliability.",
      "Contributed to features used by 150K+ merchants, significantly increasing the adoption of Venmo as a payment option.",
    ],
    image: "/projects/project_2.png",
    description: "Integrated Venmo as a payment option into an enterprise-grade financial platform at CSG.",
    structuredContent: {
      sections: [
        {
          title: "Overview",
          content: [
            "I integrated Venmo as a payment option into an enterprise checkout platform used by over 150,000 merchants in production.",
            "The integration enables secure peer-to-peer payment processing alongside existing payment methods, providing users with additional payment flexibility during checkout.",
            "The solution focuses on secure payment handling, scalability, and seamless user experience while maintaining compliance with payment industry standards.",
          ],
        },
        {
          title: "Statement",
          content: [
            "Merchants needed additional payment options to increase checkout conversion rates and provide customers with preferred payment methods.",
            "The existing checkout system required integration of Venmo SDK without disrupting current payment flows or compromising security.",
            "Payment data handling must be isolated from the main application to ensure PCI compliance and prevent exposure of sensitive payment information.",
            "The integration must scale to support high-volume production traffic and coexist seamlessly with other payment methods.",
          ],
        },
        {
          title: "Technology Stack Used",
          content: [
            "Frontend: Angular framework for checkout UI components",
            "Backend: .NET REST APIs for payment processing and confirmation",
            "Payments: Venmo SDK for payment initiation and tokenization",
            "UI Security: iframe-based modal for isolating payment flow",
            "Testing: Unit testing and integration testing frameworks",
          ],
        },
        {
          title: "System Architecture",
          content: [
            "I implemented the integration where the Angular frontend initiates the Venmo payment flow during checkout when users select Venmo as their payment method.",
            "The Venmo payment UI is loaded inside a secure iframe-based modal, isolating the payment interface from the main application and preventing direct access to payment data.",
            "Backend .NET APIs handle payment confirmation, response mapping, and transaction status updates after Venmo processes the payment.",
            "Sensitive payment data is isolated within the iframe and never directly handled or stored by the frontend application.",
            "The integration coexists with other payment methods in the checkout system, allowing users to switch between payment options seamlessly.",
          ],
        },
        {
          title: "Key Features",
          content: [
            "Venmo SDK integration for payment initiation and processing",
            "Secure iframe-based modal for payment UI isolation",
            "Seamless checkout flow that integrates with existing payment methods",
            "Backend API endpoints for payment confirmation and status tracking",
            "Error handling and fallback mechanisms for payment failures",
            "Responsive UI optimized for various device sizes",
          ],
        },
        {
          title: "Implementation Details",
          content: [
            "I integrated the Venmo SDK into the Angular frontend, configuring it to initialize within an iframe modal when users select Venmo during checkout.",
            "The iframe-based modal ensures that Venmo's payment interface is completely isolated from the main application, preventing any cross-site scripting vulnerabilities.",
            "I implemented Angular components to handle the payment flow, including modal display, user interaction, and payment status communication with the backend.",
            "Backend .NET REST APIs were created to handle payment confirmation requests from Venmo, map response data to the internal transaction format, and update payment status.",
            "I optimized the frontend Angular code to ensure smooth user experience, including proper loading states, error messages, and success confirmations.",
            "The integration was designed to handle payment callbacks, verify transaction authenticity, and update order status accordingly.",
          ],
        },
        {
          title: "Security & Reliability",
          content: [
            "I implemented iframe-based isolation to ensure payment data never directly interacts with the main application, maintaining PCI compliance requirements.",
            "All payment communication between frontend and backend uses secure HTTPS connections with proper authentication tokens.",
            "I performed unit testing on Angular components to ensure proper payment flow handling and error scenarios.",
            "Integration testing was conducted to verify end-to-end payment processing, including successful payments, failures, and edge cases.",
            "The solution includes proper error handling and retry mechanisms to handle network issues and payment service unavailability.",
            "Security protocols were followed to ensure compliance with payment industry standards and prevent exposure of sensitive payment information.",
          ],
        },
        {
          title: "Scale & Impact",
          content: [
            "The integration supports live production payment traffic and is used by over 150,000 merchants.",
            "The solution handles high-volume transaction processing without impacting system performance or other payment methods.",
            "Merchant adoption of Venmo as a payment option has significantly increased, providing customers with additional payment flexibility.",
            "The integration contributes to improved checkout conversion rates by offering users their preferred payment method.",
          ],
        },
      ],
    },
  },
  ...saasMerged,
};
