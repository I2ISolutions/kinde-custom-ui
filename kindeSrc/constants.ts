import { ModuleItem, StepItem } from './types';

export const ENTERPRISE_MODULES: ModuleItem[] = [
  { name: "REVENUE CRM", detail: "Modern CRM for high-velocity Sales Teams" },
  { name: "HRMS", detail: "Complete HR & Workforce Management" },
  { name: "FINANCIALS", detail: "Multi-Entity Accounting & Treasury" },
  { name: "OPERATIONS", detail: "Inventory & Supply Chain Orchestration" },
  { name: "PROJECTS", detail: "Enterprise Resource & Portfolio Planning" },
  { name: "AFFILIATE", detail: "Influencer & Partner Marketing Suite" },
];

export const WORKFLOW_STEPS: StepItem[] = [
  { 
    number: "01", 
    title: "Unified Login", 
    description: "Secure, single-sign-on for your entire workforce." 
  },
  { 
    number: "02", 
    title: "Stack Access", 
    description: "Instant permissions for all enterprise modules." 
  },
  { 
    number: "03", 
    title: "Scale Output", 
    description: "Accelerate growth with intelligent workflows." 
  }
];

