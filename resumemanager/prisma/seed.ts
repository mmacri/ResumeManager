
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:c:/Users/mikem/OneDrive/Mike/GitHub/ResumeManager/resumemanager/prisma/dev.db",
    },
  },
});

const resumeData = {
  "owner": "Mike Macri MBA",
  "contacts": {
    "email": "MikeMacri@gmail.com",
    "phone": "650-308-4071",
    "website": "https://mikemacri.com/",
    "linkedin": "https://linkedin.com/in/mikemacri"
  },
  "headline": "Strategic Partner Development & Solution Advisory Leader",
  "summary": [
    "Experienced strategic partner development leader with a proven track record of building and scaling partner ecosystems across North America.",
    "Skilled in collaborating with GSIs, channel partners, and multiple tiers to design and execute joint go-to-market programs that align technical and business value, accelerate adoption, and create new revenue streams.",
    "Adept at cross-functional collaboration with Sales, Marketing, Services, and Product to ensure seamless partner onboarding, support, and empowerment that drives measurable customer value."
  ],
  "key_achievements": [
    "Directed cross-functional partner solutions at VMware, securing two $50M+ partner-led deals while achieving 450% of target goals.",
    "Designed enablement frameworks and onboarding that drove 21% new pipeline and 20% renewal growth across VMware’s Americas ecosystem.",
    "Built onboarding playbooks and KPI frameworks generating 250% pipeline growth at VMware.",
    "Trusted advisor integrating cloud-native and compliance solutions that mitigated $900M in enterprise risk while expanding market reach.",
    "Represented VMware and ServiceNow at partner forums/QBRs/events; delivered enablement workshops and co-branded GTM programs."
  ],
  "experience": [
    {
      "company": "Momentum Edge Consulting",
      "title": "Consultant",
      "location": "Remote",
      "date_start": "2025-05",
      "date_end": null,
      "bullets": [
        "Advise consulting groups on development strategies, driving growth in existing technical compliance accounts.",
        "Provide expertise in partner ecosystem alignment, building new lines of revenue."
      ],
      "tags": ["GRC","Partner","Consulting"]
    },
    {
      "company": "ServiceNow",
      "title": "Sr. Manager, Solution Advisory – Legal Ethics & Compliance",
      "location": "Remote",
      "date_start": "2021-12",
      "date_end": "2025-05",
      "bullets": [
        "Directed cross-functional solution advisory initiatives across Sales, Security, Legal, and Product to accelerate adoption and reduce enterprise risk.",
        "Streamlined processes and shaped roadmap integration; led Solution Advisors to resolve complex compliance challenges across Security, ESG, Legal, Product, and Sales.",
        "Integrated AI/ML governance into enterprise frameworks; SME for ServiceNow’s inaugural AI risk policies and requirements."
      ],
      "tags": ["GRC","AI","Leadership","CustomerSuccess"]
    },
    {
      "company": "VMware",
      "title": "Partner Business & Technical Alliance Director – Americas",
      "location": "San Francisco, CA",
      "date_start": "2019-11",
      "date_end": "2021-12",
      "bullets": [
        "Designed partner joint business plans and managed co-selling motions, resulting in two record-setting $50M+ deals.",
        "Developed embedded partner programs and re-platformed solutions aligned to partner goals.",
        "Executed GTM with consulting/implementation partners, exceeding sales targets by 450%.",
        "Aligned product and engineering on partner-led integrations (e.g., VMware on AWS with DXC)."
      ],
      "tags": ["Partner","Leadership","GTM"]
    },
    {
      "company": "VMware",
      "title": "Partner Staff Solutions Engineer Leader",
      "location": "Chicago, IL",
      "date_start": "2017-12",
      "date_end": "2019-12",
      "bullets": [
        "Partnered with CDW to drive $440M through multi-tiered routes-to-market; increased pipeline capture by 20%, certifications by 200%, and solution adoption by 20%.",
        "Delivered partner training, workshops, and roadmap sessions; coached architects to increase partner-driven pipeline by 21%."
      ],
      "tags": ["Partner","Enablement","Revenue"]
    },
    {
      "company": "VMware",
      "title": "Sr Manager, Customer Success, TAMs & Product Specialists – West Coast Regional Practice",
      "location": "Seattle, WA",
      "date_start": "2014-11",
      "date_end": "2017-12",
      "bullets": [
        "Hired and mentored CS teams; improved NPS by 30 points (20 above company standard) and increased adoption by 20%.",
        "Built engagement frameworks aligning technical outcomes with business metrics; drove expansion and efficiency."
      ],
      "tags": ["CustomerSuccess","Leadership"]
    },
    {
      "company": "VMware",
      "title": "Staff Technical Account Manager",
      "location": "Seattle, WA",
      "date_start": "2011-12",
      "date_end": "2014-11",
      "bullets": [
        "Created engagement deliverables aligning customer metrics and enhancing operational efficiency; led services attach on all deals.",
        "Delivered solutions driving adoption and roadmap expansions (e.g., 500 Costco storefronts deployed in 10 minutes)."
      ],
      "tags": ["CustomerSuccess","Delivery","Scale"]
    },
    {
      "company": "VMware",
      "title": "Technical Partner Lead – Channel Partner Strategy (North America)",
      "location": "Seattle, WA",
      "date_start": "2011-01",
      "date_end": "2011-12",
      "bullets": [
        "Technical SME for top NA partners; C-level alignment and self-service demo labs for adoption."
      ],
      "tags": ["Partner","SME"]
    }
  ],
  "awards": [
    "GSI Americas Regions Technical Alliance Manager of the Quarter – 02/2021",
    "Partner Excellence – Rockstar MVP of the Half – 12/2020",
    "GSI Americas Regions Technical Alliance Manager of the Quarter – 12/2020",
    "Partner Solutions Engineer of the Quarter – 03/2019",
    "Americas VP Award for Service Excellence – 10/2017",
    "Technical Account Manager of the Half – 02/2013"
  ],
  "education": [
    { "degree": "MBA", "school": "Xavier University", "location": "Cincinnati, OH" },
    { "degree": "B.S. Industrial Organizational Psychology / I.T.", "school": "Xavier University", "location": "Cincinnati, OH" }
  ],
  "skills": { "primary": ["ServiceNow GRC/IRM","Partner Strategy","Solution Consulting","Customer Success","AI Governance"] }
};

async function main() {
  console.log(`Start seeding ...`);

  const user = await prisma.user.create({
    data: {
      email: 'mike@test.com',
      name: 'Mike Macri',
    },
  });

  await prisma.resumeMaster.create({
    data: {
      ownerId: user.id,
      json: JSON.stringify(resumeData),
    },
  });

  const template1 = await prisma.template.create({
    data: {
      ownerId: user.id,
      name: 'sleek-compact',
      engine: 'jsx',
      source: '<div>Sleek Compact Template</div>',
    },
  });

  const template2 = await prisma.template.create({
    data: {
      ownerId: user.id,
      name: 'modern-wide',
      engine: 'jsx',
      source: '<div>Modern Wide Template</div>',
    },
  });

  const template3 = await prisma.template.create({
    data: {
      ownerId: user.id,
      name: 'classic',
      engine: 'jsx',
      source: '<div>Classic Template</div>',
    },
  });

  await prisma.variant.create({
    data: {
      ownerId: user.id,
      name: 'GRC-IRM Presales',
      rulesJson: JSON.stringify({
        includeTags: ["GRC", "AI", "CustomerSuccess"],
        maxBulletsPerRole: 4,
        sectionOrder: ["summary", "skills", "experience", "education", "awards"],
      }),
      overridesJson: JSON.stringify({}),
    },
  });

  await prisma.variant.create({
    data: {
      ownerId: user.id,
      name: 'Partner Development Director',
      rulesJson: JSON.stringify({
        includeTags: ["Partner", "Leadership", "GTM"],
        sectionOrder: ["key_achievements", "experience"],
      }),
      overridesJson: JSON.stringify({}),
    },
  });

  await prisma.coverLetter.create({
    data: {
      ownerId: user.id,
      title: 'Sample Cover Letter',
      body: 'Dear Hiring Manager at {{company}}, I am writing to express my interest in the {{role}} position. My experience in ... would be a great asset to your team.',
    },
  });


  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
