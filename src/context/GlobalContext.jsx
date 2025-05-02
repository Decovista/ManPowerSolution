import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [subTitle, setSubTitle] = useState('');
  const [getFinder, setGetFinder] = useState(null)
  console.log(getFinder)
  const getSubTitle = (e) => {
    setSubTitle(e.target.value);
  };
   
  const courseData = [
    { id:  '1',
      Title: 'Electrical Engineering',
      path: 'electrical-engineering',
      Subject: [
        { SubjectTitle: 'Basic Electrical Concepts (Current, Voltage, Resistance, Power)' },
        { SubjectTitle: 'Wiring Systems and Circuit Installation' },
        { SubjectTitle: 'Electrical Machines: Transformers, Motors, Generators' },
        { SubjectTitle: 'Electrical Drawings and Wiring Diagrams' },
        { SubjectTitle: 'Electrical Safety Standards and Protective Equipment' },
        { SubjectTitle: 'Renewable Energy and Smart Home Systems' },
        { SubjectTitle: 'Troubleshooting Electrical Equipment' },
        { SubjectTitle: 'Building Codes and Industry Regulations' },
        { SubjectTitle: 'Practical Lab Work and Real-World Projects' }
      ],
      description: `Covers basic to advanced electrical principles, machine handling, safety, and hands-on circuit projects.`
    },
    {
      id:  '2',
      Title: 'Solar Energy Technician',
      path: 'solar-energy-technician',
      Subject: [
        { SubjectTitle: 'Basics of Solar Energy and PV Systems' },
        { SubjectTitle: 'Solar Panel Types and Battery Systems' },
        { SubjectTitle: 'Inverter and Wiring Techniques' },
        { SubjectTitle: 'Site Assessments and Installations' },
        { SubjectTitle: 'Maintenance and Troubleshooting' },
        { SubjectTitle: 'National Safety Standards' },
        { SubjectTitle: 'Solar Entrepreneurship and Career Options' }
      ],
      description: `Train in designing, installing, and maintaining solar systems with a focus on safety and green energy careers.`
    },
    {
      id:  '3',
      Title: 'Electronic Technician',
      path: 'electronic-technician',
      Subject: [
        { SubjectTitle: 'Basic Electronic Theory and Components' },
        { SubjectTitle: 'Circuit Design and Troubleshooting' },
        { SubjectTitle: 'Multimeter and Oscilloscope Usage' },
        { SubjectTitle: 'Soldering and PCB Design' },
        { SubjectTitle: 'Repair of Consumer and Industrial Electronics' }
      ],
      description: `Learn circuit theory, soldering, troubleshooting, and repairing a variety of electronic devices.`
    },
    {
      id:  '4',
      Title: 'Welder Training',
      path: 'welder-training',
      Subject: [
        { SubjectTitle: 'Arc, MIG, TIG, and Gas Welding' },
        { SubjectTitle: 'Plasma Cutting and Joint Design' },
        { SubjectTitle: 'Materials Science and Blueprint Reading' },
        { SubjectTitle: 'Safety Practices in Welding' },
        { SubjectTitle: 'Hands-on Equipment Training' }
      ],
      description: `Master professional welding techniques, plasma cutting, and blueprint reading for the metalwork industry.`
    },
    {
      id:  '5',
      Title: 'Fitter',
      path: 'fitter',
      Subject: [
        { SubjectTitle: 'Mechanical Part Assembly and Fitting' },
        { SubjectTitle: 'Hand Tools and Precision Instruments' },
        { SubjectTitle: 'Engineering Drawings and Alignment' },
        { SubjectTitle: 'Lathe Operations and Thread Cutting' }
      ],
      description: `Skill development for mechanical fitting, precision measurement, and lathe operations for industrial work.`
    },
    {
      id:  '6',
      Title: 'Animal Husbandry & Artificial Insemination (AI)',
      path: 'animal-husbandry-artificial-insemination',
      Subject: [
        { SubjectTitle: 'Livestock Nutrition and Health' },
        { SubjectTitle: 'Artificial Insemination Techniques' },
        { SubjectTitle: 'Vaccination and Shelter Management' },
        { SubjectTitle: 'Semen Collection and Storage' },
        { SubjectTitle: 'Govt. Schemes for Livestock Businesses' }
      ],
      description: `Focuses on livestock care, artificial breeding, animal health, and business opportunities in animal farming.`
    },
    {
      id:  '7',
      Title: 'Rural Medical Practitioner (RMP)',
      path: 'rural-medical-practitioner',
      Subject: [
        { SubjectTitle: 'Basic Anatomy and Physiology' },
        { SubjectTitle: 'First Aid and Common Diseases' },
        { SubjectTitle: 'Patient Care and Hygiene' },
        { SubjectTitle: 'Blood Pressure Monitoring and Medication' }
      ],
      description: `Train to deliver basic healthcare, emergency first aid, and patient care services in rural areas.`
    },
    {
      id:  '8',
      Title: 'Mobile Repair',
      path: 'mobile-repair',
      Subject: [
        { SubjectTitle: 'Hardware Troubleshooting (Screen, Battery, Port)' },
        { SubjectTitle: 'Software Repair and Flashing' },
        { SubjectTitle: 'Custom ROMs and Unlocking' },
        { SubjectTitle: 'Data Recovery and Diagnostics' }
      ],
      description: `Hands-on repair training covering mobile hardware, software flashing, unlocking, and data recovery.`
    },
    {
      id:  '9',
      Title: 'Computer Repair',
      path: 'computer-repair',
      Subject: [
        { SubjectTitle: 'PC and Laptop Hardware Repair' },
        { SubjectTitle: 'Software Troubleshooting and Virus Removal' },
        { SubjectTitle: 'Operating System Installation' },
        { SubjectTitle: 'Data Backup and Recovery' }
      ],
      description: `Comprehensive course on diagnosing, repairing, and maintaining computers and laptops.`
    },
    {
      id:  '10',
      Title: 'Automobile Technician',
      path: 'automobile',
      Subject: [
        { SubjectTitle: 'Engine, Brake, and Transmission Systems' },
        { SubjectTitle: 'Electrical Systems in Vehicles' },
        { SubjectTitle: 'Diagnostic Tools and EV Technology' },
        { SubjectTitle: 'Hands-on Vehicle Maintenance and Servicing' }
      ],
      description: `Training in automobile repair, engine maintenance, and the latest EV diagnostic technologies.`
    },
    {
      id:  '11',
      Title: 'Agriculture',
      path: 'agriculture',
      Subject: [
        { SubjectTitle: 'Modern Farming Techniques' },
        { SubjectTitle: 'Soil and Irrigation Management' },
        { SubjectTitle: 'Pest Control and Smart Agriculture' },
        { SubjectTitle: 'Livestock and Crop Management' }
      ],
      description: `Practical farming skills, smart agriculture methods, soil and crop management.`
    },
    {
      id:  '12',
      Title: 'Marketing and Sales',
      path: 'marketing-and-sales',
      Subject: [
        { SubjectTitle: 'Market Research and Consumer Behavior' },
        { SubjectTitle: 'Sales Techniques and Lead Generation' },
        { SubjectTitle: 'Digital Marketing and Branding' },
        { SubjectTitle: 'CRM and Communication Skills' }
      ],
      description: `Equips students with marketing strategies, digital branding, CRM use, and consumer analysis.`
    },
    {
      id:  '13',
      Title: 'Accounting and Finance',
      path: 'accounting-and-finance',
      Subject: [
        { SubjectTitle: 'Bookkeeping and Financial Statements' },
        { SubjectTitle: 'Taxation, Auditing, and Budgeting' },
        { SubjectTitle: 'Cash Flow and Investment Management' },
        { SubjectTitle: 'Practical Application of Accounting Principles' }
      ],
      description: `Training in financial records management, budgeting, auditing, and investment handling.`
    },
    {
      id:  '14',
      Title: 'Hotel Management',
      path: 'hotel-management',
      Subject: [
        { SubjectTitle: 'Front Desk and Housekeeping Operations' },
        { SubjectTitle: 'Food and Beverage Management' },
        { SubjectTitle: 'Event Planning and Customer Service' },
        { SubjectTitle: 'Hospitality Law and Marketing' }
      ],
      description: `Prepare for hotel, hospitality, and event management careers with customer service expertise.`
    },
    {
      id:  '15',
      Title: 'Driving Training',
      path: 'driving-training',
      Subject: [
        { SubjectTitle: 'Vehicle Handling and Driving Laws' },
        { SubjectTitle: 'Traffic Signs and Safety Measures' },
        { SubjectTitle: 'Emergency Handling and Road Etiquette' },
        { SubjectTitle: 'Behind-the-Wheel Training' }
      ],
      description: `Covers vehicle handling, driving rules, safety procedures, and practical driving skills.`
    },
    {
      id:  '16',
      Title: 'Safety Training',
      path: 'safety-training',
      Subject: [
        { SubjectTitle: 'Workplace Hazards and PPE' },
        { SubjectTitle: 'Fire Safety and First Aid' },
        { SubjectTitle: 'Risk Management and Legal Responsibilities' },
        { SubjectTitle: 'Industry-Specific Safety Protocols' }
      ],
      description: `Learn about workplace safety standards, hazard management, and first aid response skills.`
    },
    {
      id:  '17',
      Title: 'Amanat Training',
      path: 'amanat-training',
      Subject: [
        { SubjectTitle: 'Trust and Accountability Skills' },
        { SubjectTitle: 'Ethical Handling of Responsibilities' },
        { SubjectTitle: 'Professional Conduct and Integrity' },
        { SubjectTitle: 'Communication and Leadership' }
      ],
      description: `Focus on personal development, integrity, leadership, and responsibility skills.`
    },
    {
      id:  '18',
      Title: 'Plumbing Work',
      path: 'plumbing-work',
      Subject: [
        { SubjectTitle: 'Pipefitting and Leak Detection' },
        { SubjectTitle: 'Water Supply and Drainage Systems' },
        { SubjectTitle: 'Plumbing Tools and Troubleshooting' },
        { SubjectTitle: 'Building Codes and Installation Safety' }
      ],
      description: `Teaches plumbing basics, water system installations, and maintenance troubleshooting techniques.`
    },
    {
      id:  '19',
      Title: 'Civil Training Work',
      path: 'civil-training-work',
      Subject: [
        { SubjectTitle: 'Construction Management and Surveying' },
        { SubjectTitle: 'Structural Analysis and Design' },
        { SubjectTitle: 'Material Testing and Environmental Concerns' },
        { SubjectTitle: 'Field Visits and Practical Construction Work' }
      ],
      description: `Learn surveying, structural design, construction site management, and materials testing.`
    },
    {
      id:  '20',
      Title: 'HVAC (Heating, Ventilation, and Air Conditioning)',
      path: 'hvac',
      Subject: [
        { SubjectTitle: 'Heating and Cooling Principles' },
        { SubjectTitle: 'Ventilation and Refrigeration Systems' },
        { SubjectTitle: 'Ductwork and Equipment Installation' },
        { SubjectTitle: 'Energy Efficiency and Troubleshooting' }
      ],
      description: `Train in installing, repairing, and optimizing heating, cooling, and ventilation systems.`
    },
    {
      id:  '21',
      Title: 'Mechanical',
      path: 'mechanical',
      Subject: [
        { SubjectTitle: 'Mechanics and Thermodynamics' },
        { SubjectTitle: 'Material Science and CAD' },
        { SubjectTitle: 'Fluid Mechanics and Manufacturing Processes' },
        { SubjectTitle: 'Robotics and Industrial Maintenance' }
      ],
      description: `Covers mechanical engineering concepts, material testing, CAD drawing, and robotics systems.`
    },
    {
      id:  '22',
      Title: 'Beauty Parlor',
      path: 'beauty-parlor',
      Subject: [
        { SubjectTitle: 'Skincare and Hair Styling' },
        { SubjectTitle: 'Makeup and Salon Management' },
        { SubjectTitle: 'Hygiene and Customer Service' },
        { SubjectTitle: 'Beauty Tools and Trends' }
      ],
      description: `Comprehensive beauty training in skincare, hairstyling, salon management, and new beauty trends.`
    },
    {
      id:  '23',
      Title: 'Tally',
      path: 'tally',
      Subject: [
        { SubjectTitle: 'Ledger and Voucher Management' },
        { SubjectTitle: 'Inventory and Payroll in Tally' },
        { SubjectTitle: 'GST and Tax Filing' },
        { SubjectTitle: 'Report Generation and Financial Analysis' }
      ],
      description: `Learn Tally accounting software, tax handling, inventory management, and financial reporting.`
    },
    {
      id:  '24',
      Title: 'Carpentry',
      path: 'carpentry',
      Subject: [
        { SubjectTitle: 'Woodworking Techniques and Tools' },
        { SubjectTitle: 'Furniture and Cabinet Making' },
        { SubjectTitle: 'Measurement and Finishing' },
        { SubjectTitle: 'Safety Protocols and Construction Basics' }
      ],
      description: `Train in woodworking, carpentry skills, cabinet making, and safety in construction.`
    },
    {
      id:  '25',
      Title: 'Painter',
      path: 'painter',
      Subject: [
        { SubjectTitle: 'Surface Preparation and Paint Mixing' },
        { SubjectTitle: 'Application Methods and Finishing' },
        { SubjectTitle: 'Decorative Techniques and Color Theory' },
        { SubjectTitle: 'Workplace Safety and Tool Handling' }
      ],
      description: `Master painting techniques, surface preparation, decorative designs, and safety in workspaces.`
    },
    {
      id:  '26',
      Title: 'Tiles Work Training',
      path: 'tiles-work-training',
      Subject: [
        { SubjectTitle: 'Surface Preparation and Tile Cutting' },
        { SubjectTitle: 'Grouting and Tile Layouts' },
        { SubjectTitle: 'Tools, Patterns, and Safety' },
        { SubjectTitle: 'Hands-on Tiling Projects' }
      ],
      description: `Learn tiling, floor preparation, cutting tiles, and hands-on installation with modern patterns.`
    },
    {
      id:  '27',
      Title: 'Aluminium Training and Glass Work',
      path: 'aluminium-training-glass-work',
      Subject: [
        { SubjectTitle: 'Aluminum Structure Fabrication and Design' },
        { SubjectTitle: 'Window, Door, and Frame Installation' },
        { SubjectTitle: 'Glass Pane Cutting and Handling' },
        { SubjectTitle: 'Safety Measures and Project Precision' }
      ],
      description: `Expert training in aluminum fabrications, glass cutting, and precise installation projects.`
    }
  ];
  

  return (
    <GlobalContext.Provider value={{ subTitle, getSubTitle,courseData,getFinder, setGetFinder}}>
      {children}
    </GlobalContext.Provider>
  );
};
