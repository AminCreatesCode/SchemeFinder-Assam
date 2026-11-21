import { evaluateScheme } from "./engine.js";

const schemes = [
  {
    id:"ppp", slug:"post-matric-scholarship", name:"Post Matric Scholarship for ST Students",
    jurisdiction:"Central", department:"Tribal Affairs", category:"Scholarship", tags:["ST","Student"],
    summary:"This Central Government scholarship supports students who belong to a Scheduled Tribe and are studying in an eligible post-matric course. It can help with continuing education through assistance for covered fees and living support. Final course, income and benefit limits are confirmed by the National Scholarship Portal and competent state authorities.",
    benefits:["Maintenance Allowance: Provides living support to eligible students according to the current official rules.","Fee Support: Covers eligible compulsory, non-refundable fee components as notified for the student's course.","Academic Continuity: Helps reduce selected education-related costs while the student remains eligible and verified."],
    eligibilityRules:[
      {ruleTitle:"Scheduled Tribe Category",field:"socialCategory",operator:"equals",value:"ST",explanation:"The applicant belongs to a Scheduled Tribe.",manualReview:true},
      {ruleTitle:"Post-Matric Enrollment",field:"education",operator:"in",value:["Undergraduate","Postgraduate","Diploma"],explanation:"The applicant is enrolled in a post-matric course."},
      {ruleTitle:"Family Income Band",field:"incomeBand",operator:"in",value:["Below ₹2.5 lakh","₹2.5–₹5 lakh"],explanation:"Family income falls within the scheme's official band; confirm current limits."}
    ],
    documents:[{name:"Caste certificate",required:true,note:"Issued by a competent authority"},{name:"Income certificate",required:true},{name:"Bonafide certificate",required:true},{name:"Bank account details",required:true,note:"Do not enter these details here"}],
    applicationSteps:["Gather a valid caste certificate, income certificate, course bonafide certificate and bank details.","Register or sign in through the National Scholarship Portal using the official identity process.","Complete the student profile, select the post-matric scheme and upload clear requested documents.","Submit for institute and state or nodal verification, then track the application in NSP."],
    officialSourceUrl:"https://scholarships.gov.in/",
    applicationUrl:"https://scholarships.gov.in/",
    lastVerifiedAt:"2026-02-12", status:"unknown", verificationNote:"Review official portal for current academic-year notice and limits."
  },
  {
    id:"nmms", slug:"national-means-cum-merit-scholarship", name:"National Means-cum-Merit Scholarship",
    jurisdiction:"Central", department:"School Education & Literacy", category:"Scholarship", tags:["Student","Income"],
    summary:"The National Means-cum-Merit Scholarship supports meritorious students from households with limited income while they continue in covered secondary levels. Selection and renewal depend on the current annual notice and examination requirements. Students and parents should confirm the latest class coverage, award terms and application window in the official portal.",
    benefits:["Scholarship Award: Provides financial support to eligible selected students according to the current approved award terms.","Study Continuity: Helps students continue in an eligible secondary or senior-secondary course while meeting renewal conditions.","Selection Support: Gives participating students a structured route through school, state and national application stages."],
    eligibilityRules:[
      {ruleTitle:"Secondary Education Level",field:"education",operator:"in",value:["Secondary school","Senior secondary"],explanation:"The applicant is in a covered secondary level."},
      {ruleTitle:"Family Income Band",field:"incomeBand",operator:"in",value:["Below ₹2.5 lakh","₹2.5–₹5 lakh"],explanation:"Family income meets the commonly notified band; verify current notice."},
      {ruleTitle:"Active Student Status",field:"employment",operator:"equals",value:"Student",explanation:"The applicant is enrolled as a student."}
    ],
    documents:[{name:"Income certificate",required:true},{name:"School bonafide certificate",required:true},{name:"Identity proof",required:true},{name:"Bank account details",required:true,note:"Do not enter these details here"}],
    applicationSteps:["Collect the income certificate, school bonafide certificate, identity proof and bank account details.","Check the current National Scholarship Portal notice for class, merit and application requirements.","Register or sign in, complete the application and upload documents through the official process.","Submit for school and state verification and track the result or payment status on NSP."],
    officialSourceUrl:"https://scholarships.gov.in/",
    applicationUrl:"https://scholarships.gov.in/",
    lastVerifiedAt:"2026-02-12", status:"unknown", verificationNote:"Status and application cycle change; verify the current notice."
  },
  {
    id:"pmkvy", slug:"pm-kaushal-vikas-yojana", name:"PM Kaushal Vikas Yojana",
    jurisdiction:"Central", department:"Ministry of Skill Development", category:"Skill development", tags:["Employment","Youth"],
    summary:"PM Kaushal Vikas Yojana offers short-term, industry-oriented skill training through participating centres. It is intended to help eligible candidates build job-ready skills and receive an assessment-based certificate. Course content, local capacity and placement support vary, so applicants should verify the specific course before registering.",
    benefits:["Skill Training: Provides practical instruction for a selected occupational course through an approved training network.","Assessment & Certificate: Enables participating learners to take the recognised course assessment and receive certification where successful.","Placement Facilitation: May offer interview or placement support through the training centre, without guaranteeing employment."],
    eligibilityRules:[
      {ruleTitle:"Training Age Range",field:"age",operator:"between",value:[18,45],explanation:"Applicant age is within the general training range; course rules may differ."},
      {ruleTitle:"Training Status",field:"employment",operator:"in",value:["Student","Seeking work","Employed"],explanation:"The applicant is eligible for an available training category."},
      {ruleTitle:"Available Location",field:"state",operator:"in",value:["Assam","Any state"],explanation:"Assam residents may find an available training centre."}
    ],
    documents:[{name:"Identity proof",required:true},{name:"Address proof",required:true},{name:"Education certificate",required:false,note:"Required only if requested by the centre"}],
    applicationSteps:["Search the official Skill India Digital portal for an authorised centre and an available course.","Review the course description, age criteria, duration, location and document requirements.","Register through the official portal and submit identity or address details requested by the centre.","Complete verification and training, then attend the scheduled assessment if eligible."],
    officialSourceUrl:"https://www.skillindia.digital/",
    applicationUrl:"https://www.skillindia.digital/",
    lastVerifiedAt:"2026-01-30", status:"active", verificationNote:"Portal availability is active; individual course capacity and windows vary."
  },
  {
    id:"pms-matric-minority", slug:"pre-matric-minority-scholarship", name:"Pre-Matric Scholarship for Minorities",
    jurisdiction:"Central", department:"Minority Affairs", category:"Scholarship", tags:["Minority","Student"],
    summary:"This scheme provides school-level scholarship support to students from notified minority communities who meet the current academic and income conditions. It can assist with selected admission or educational costs and regular study support. The National Scholarship Portal and current annual notice remain the final source for class coverage and award terms.",
    benefits:["Admission & Tuition Support: Assists with covered admission or compulsory education costs where included in the official rules.","Maintenance Assistance: Provides study support to eligible students under the current approved amount and renewal terms.","School Continuity: Helps qualifying students remain enrolled and complete verification through their institution."],
    eligibilityRules:[
      {ruleTitle:"Notified Minority Community",field:"community",operator:"in",value:["Muslim","Christian","Sikh","Buddhist","Jain","Parsi"],explanation:"The applicant belongs to a notified minority community.",manualReview:true},
      {ruleTitle:"School Education Level",field:"education",operator:"in",value:["Secondary school","Senior secondary"],explanation:"The applicant is enrolled in an eligible school level."},
      {ruleTitle:"Family Income Band",field:"incomeBand",operator:"in",value:["Below ₹2.5 lakh","₹2.5–₹5 lakh"],explanation:"The family income band must meet the current official limit."}
    ],
    documents:[{name:"Community certificate",required:true},{name:"Income certificate",required:true},{name:"School bonafide certificate",required:true},{name:"Bank account details",required:true,note:"Do not enter these details here"}],
    applicationSteps:["Gather community, income, school bonafide and identity documents required for the current cycle.","Read the Pre-Matric notice on the National Scholarship Portal and confirm class and income coverage.","Register, complete the student profile and submit the application through NSP.","Complete school and state verification, then track renewal and status in the official portal."],
    officialSourceUrl:"https://scholarships.gov.in/",
    applicationUrl:"https://scholarships.gov.in/",
    lastVerifiedAt:"2026-02-12", status:"unknown", verificationNote:"Verify current year, income threshold and class coverage."
  },
  {
    id:"nsp-post-sc", slug:"post-matric-scholarship-sc", name:"Post-Matric Scholarship for SC Students",
    jurisdiction:"Central", department:"Social Justice & Empowerment", category:"Scholarship", tags:["SC","Student"],
    summary:"The Post-Matric Scholarship for SC Students supports students belonging to Scheduled Castes in eligible higher or post-matric education. It may assist with covered compulsory fees and maintenance under the current scheme rules. Course eligibility, family income and verification requirements must be confirmed on NSP and by the responsible authority.",
    benefits:["Maintenance Support: Provides living-support assistance to eligible students as specified in the current official norm.","Compulsory Fee Support: Covers qualifying compulsory non-refundable education components when included in the approved course rules.","Application Progress: Offers a traceable process through NSP, institution and state or nodal verification."],
    eligibilityRules:[
      {ruleTitle:"Scheduled Caste Category",field:"socialCategory",operator:"equals",value:"SC",explanation:"The applicant belongs to a Scheduled Caste.",manualReview:true},
      {ruleTitle:"Post-Matric Education",field:"education",operator:"in",value:["Undergraduate","Postgraduate","Diploma"],explanation:"The applicant is in post-matric education."},
      {ruleTitle:"Family Income Band",field:"incomeBand",operator:"in",value:["Below ₹2.5 lakh","₹2.5–₹5 lakh"],explanation:"Family income is within the currently notified band."}
    ],
    documents:[{name:"Caste certificate",required:true},{name:"Income certificate",required:true},{name:"Bonafide certificate",required:true},{name:"Bank account details",required:true,note:"Do not enter these details here"}],
    applicationSteps:["Collect a competent-authority caste certificate, income certificate, bonafide certificate and bank information.","Review the current NSP notice and confirm the course, institution and income rules.","Register, complete the application and upload clear copies through the National Scholarship Portal.","Submit for institution and state or nodal verification and track the application in NSP."],
    officialSourceUrl:"https://scholarships.gov.in/",
    applicationUrl:"https://scholarships.gov.in/",
    lastVerifiedAt:"2026-02-12", status:"unknown", verificationNote:"Course and income limits should be confirmed on the current notice."
  },
  {
    id:"stand-up", slug:"stand-up-india", name:"Stand-Up India",
    jurisdiction:"Central", department:"Department of Financial Services", category:"Entrepreneurship", tags:["Women","SC","ST","Business"],
    summary:"Stand-Up India connects eligible entrepreneurs with participating banks for composite loans to establish a greenfield enterprise. The programme specifically recognises eligible women and Scheduled Caste or Scheduled Tribe applicants, subject to the bank's credit appraisal. Approval, terms and disbursement remain decisions of the lending bank.",
    benefits:["Composite Bank Loan: A participating bank may assess support for term and working-capital needs of an eligible new enterprise.","Greenfield Enterprise Support: The programme is designed for qualifying new business activity rather than an already running enterprise.","Project Guidance: Official programme channels can help applicants understand participating-bank and project-document requirements."],
    eligibilityRules:[
      {ruleTitle:"Enterprise Applicant",field:"employment",operator:"equals",value:"Entrepreneur",explanation:"The applicant intends to start or operate an eligible enterprise."},
      {ruleTitle:"Minimum Adult Age",field:"age",operator:"gte",value:18,explanation:"The applicant is at least 18 years old."},
      {ruleTitle:"Applicant Category",field:"socialCategory",operator:"in",value:["SC","ST","General"],explanation:"Scheme has separate eligibility for specified women and SC/ST beneficiaries.",manualReview:true}
    ],
    documents:[{name:"Identity and address proof",required:true},{name:"Business proposal",required:true},{name:"Caste certificate",required:false,note:"If applying under SC/ST eligibility"},{name:"Enterprise and bank records",required:true,note:"Requirements are set by the lending bank"}],
    applicationSteps:["Prepare identity proof, address proof, a project proposal and basic enterprise records.","Review eligible enterprise categories and participating-bank information on the Stand-Up Mitra portal.","Apply through an eligible bank branch or the official SIDBI application process.","Complete bank credit appraisal, due diligence and any required enterprise registration steps."],
    officialSourceUrl:"https://standupmitra.in/",
    applicationUrl:"https://standupmitra.in/",
    lastVerifiedAt:"2026-01-22", status:"active", verificationNote:"Scheme is active; lending terms and bank appraisal remain separate."
  },
  {
    id:"pm-vishwakarma", slug:"pm-vishwakarma", name:"PM Vishwakarma",
    jurisdiction:"Central", department:"Ministry of MSME", category:"Entrepreneurship", tags:["Artisan","Skilled worker"],
    summary:"PM Vishwakarma supports eligible traditional artisans and craftspeople working in covered trades. Participating beneficiaries may receive structured skill development, toolkit assistance and access to enterprise loan stages after verification. Trade eligibility and each stage's conditions are confirmed through the official registration and verification process.",
    benefits:["Skill Development: Offers basic and advanced training opportunities to eligible traditional artisans in covered trades.","Toolkit Assistance: Provides an approved toolkit benefit at the stage and terms specified by the current scheme notice.","Enterprise Loan Support: Enables eligible participants to progress through credit support stages after bank and programme verification."],
    eligibilityRules:[
      {ruleTitle:"Traditional Trade Work",field:"employment",operator:"in",value:["Self-employed","Seeking work","Employed"],explanation:"The applicant works or seeks work in a covered traditional trade.",manualReview:true},
      {ruleTitle:"Minimum Adult Age",field:"age",operator:"gte",value:18,explanation:"The applicant is at least 18 years old."},
      {ruleTitle:"Eligible State or UT",field:"state",operator:"in",value:["Assam","Any state"],explanation:"The applicant is from an eligible state or Union Territory."}
    ],
    documents:[{name:"Identity proof",required:true},{name:"Age proof",required:true},{name:"Trade evidence",required:false,note:"If requested during verification"}],
    applicationSteps:["Confirm that your occupation appears in the covered trade list and gather identity, age and trade information.","Register only through the official PM Vishwakarma portal and complete Aadhaar-linked identity steps.","Attend verification through the Gram Panchayat or Urban Local Body and District Industry Centre process.","Complete training and move to toolkit or credit stages only after the programme confirms eligibility."],
    officialSourceUrl:"https://pmvishwakarma.gov.in/",
    applicationUrl:"https://pmvishwakarma.gov.in/",
    lastVerifiedAt:"2026-02-01", status:"active", verificationNote:"Active portal; confirm trade and stage-specific requirements."
  },
  {
    id:"skill-youth-assam", slug:"assam-skill-development-youth", name:"Assam Skill Development Mission training",
    jurisdiction:"Assam", department:"Assam Skill Employment & Entrepreneurship Department", category:"Skill development", tags:["Youth","Assam","Employment"],
    summary:"Assam Skill Development Mission programmes connect Assam residents with approved training opportunities and employment-support activities. Available courses and providers change over time, so applicants should use current ASDM or district notices. Training, placement and documentation features vary by the selected course.",
    benefits:["Approved Skill Courses: Gives Assam youth access to listed training programmes that match available sectors and providers.","Career Guidance: May offer counselling or employment-support activities through a participating provider.","Placement Facilitation: Eligible graduates may receive interview or placement support where the provider offers it."],
    eligibilityRules:[
      {ruleTitle:"Assam Residence",field:"state",operator:"equals",value:"Assam",explanation:"The applicant is a resident of Assam."},
      {ruleTitle:"Course Age Range",field:"age",operator:"between",value:[18,45],explanation:"The applicant falls within the general youth age range."},
      {ruleTitle:"Training Eligibility",field:"employment",operator:"in",value:["Student","Seeking work","Employed"],explanation:"The applicant is available for training or seeking work."}
    ],
    documents:[{name:"Identity proof",required:true},{name:"Address proof",required:true},{name:"Education certificate",required:false,note:"Course-dependent"}],
    applicationSteps:["Collect identity proof, Assam address proof and any education certificate requested by the course.","Visit the official Assam Skill Development Mission or ASDM-linked portal for current courses.","Compare provider, location, age criteria and course requirements before registering.","Submit the official application and complete provider or district verification for the selected course."],
    officialSourceUrl:"https://asdm.assam.gov.in/",
    applicationUrl:"https://asdm.assam.gov.in/",
    lastVerifiedAt:"2026-01-18", status:"unknown", verificationNote:"No universal application window was inferred; check current ASDM notices."
  },
  {
    id:"anundoram", slug:"anundoram-borooah-award", name:"Anundoram Borooah Award",
    jurisdiction:"Assam", department:"Secondary Education Department", category:"Scholarship", tags:["Assam","Student","HSLC"],
    summary:"The Anundoram Borooah Award recognises Assam students who meet the merit conditions for the relevant HSLC examination cycle. The form of award, result threshold and application process can change with each official notification. Students should verify current eligibility and instructions through SEBA or the Assam education department.",
    benefits:["Merit Recognition: Recognises qualifying Assam students for achievement in the HSLC examination under a current notification.","Learning Incentive: Provides the award or incentive described in the applicable official scheme communication.","Official Verification: Uses the student's examination record and designated education process for eligibility confirmation."],
    eligibilityRules:[
      {ruleTitle:"Assam Student Residence",field:"state",operator:"equals",value:"Assam",explanation:"The applicant is an Assam resident or covered student."},
      {ruleTitle:"HSLC Secondary Qualification",field:"education",operator:"equals",value:"Secondary school",explanation:"The applicant has completed or is completing secondary school."}
    ],
    documents:[{name:"HSLC marksheet",required:true},{name:"Residence proof",required:false},{name:"Identity proof",required:true}],
    applicationSteps:["Collect the student's HSLC marksheet, identity proof and residence proof if requested.","Review the current Assam Secondary Education or SEBA award notification for merit and cycle rules.","Register or submit through the designated official district or education process.","Track the award status using the official channel and keep the submission reference for follow-up."],
    officialSourceUrl:"https://sebaonline.org/",
    applicationUrl:"https://sebaonline.org/",
    lastVerifiedAt:"2026-01-15", status:"unknown", verificationNote:"Merit threshold and current award process require verification."
  },
  {
    id:"poshan", slug:"poshan-abhiyaan-support", name:"Poshan Abhiyaan Maternal & Child Support",
    jurisdiction:"Central", department:"Women & Child Development", category:"Health & nutrition", tags:["Women","Child","Health"],
    summary:"Poshan Abhiyaan brings nutrition, maternal and child-health support activities to participating communities through Anganwadi and related services. It can help eligible pregnant or breastfeeding women, caregivers and children access counselling and local programmes. Available services and registration steps differ by locality and should be confirmed with the local centre.",
    benefits:["Nutrition Counselling: Offers guidance on age-appropriate nutrition and healthy practices through participating community programmes.","Health Referral Support: Helps link beneficiaries to eligible local health or nutrition services when a need is identified.","Community Programme Access: Provides access to awareness and support activities delivered through Anganwadi or related centres."],
    eligibilityRules:[
      {ruleTitle:"Maternal or Child-Care Role",field:"communityRole",operator:"in",value:["Pregnant or breastfeeding","Parent or guardian","Anganwadi worker"],explanation:"The applicant belongs to a covered maternal or child care role.",manualReview:true},
      {ruleTitle:"Participating Area",field:"state",operator:"in",value:["Assam","Any state"],explanation:"The service is available across participating areas."}
    ],
    documents:[{name:"Identity proof",required:false,note:"May be requested by the local programme office"},{name:"Health or child record",required:false,note:"Only if required by the local centre"}],
    applicationSteps:["Locate an official Anganwadi or Poshan programme office serving the family or area.","Ask the local worker which maternal, child or caregiver services are currently available.","Bring identity or health records only if the local programme requests them.","Register through the local process and attend counselling or health sessions that apply to the beneficiary."],
    officialSourceUrl:"https://www.poshan.gov.in/",
    lastVerifiedAt:"2026-01-20", status:"active", verificationNote:"Programme is active; local service and registration procedures vary."
  }
];

const translations = {
  as: {
    "Home":"গৃহ", "Explore Schemes":"আঁচনি অন্বেষণ", "How It Works":"ই কেনেকৈ কাম কৰে",
    "About":"বিষয়ে", "Sign In":"দাখিল/ডেশব’ৰ্ড", "User Dashboard":"ব্যৱহাৰকাৰী ডেশব’ৰ্ড",
    "Find Schemes for Me":"মোৰ বাবে আঁচনি বিচাৰক", "Menu":"মেনু", "Close":"বন্ধ",
    "ASSAM-FIRST / PUBLIC BENEFITS DISCOVERY":"অসম-মুখী / ৰাজহুৱা সুবিধা সন্ধান",
    "Find the support you may qualify for.":"আপুনি যোগ্য হ'ব পৰা সহায় বিচাৰি পাওক।",
    "Compare your profile against clear eligibility rules, prepare the right documents, and continue to official government sources.":"স্পষ্ট যোগ্যতাৰ নিয়মৰ সৈতে নিজৰ পৰিচয় মিলাওক, দৰকাৰী নথিপত্ৰ সাজু কৰক আৰু চৰকাৰী উৎসলৈ আগবাঢ়ক।",
    "Search by scheme name, category or keyword":"আঁচনিৰ নাম, শ্ৰেণী বা শব্দৰ দ্বাৰা সন্ধান কৰক",
    "Search scheme name, category or keyword":"আঁচনিৰ নাম, শ্ৰেণী বা শব্দ লিখক",
    "Search":"সন্ধান", "Search schemes":"আঁচনিসমূহ সন্ধান কৰক",
    "Try Sample Profile":"নমুনা পৰিচয় চেষ্টা কৰক", "Example profile":"নমুনা পৰিচয়",
    "Residence":"বাসস্থান", "Age":"বয়স", "Education":"শিক্ষা", "Income band":"আয় স্তৰ",
    "Assam":"অসম", "Undergraduate":"স্নাতক", "Below ₹2.5 lakh":"₹2.5 লাখতকৈ কম",
    "Rule-based evaluation":"নিয়ম-ভিত্তিক মূল্যায়ন", "3 of 3 recorded conditions checked":"৩টাৰ ৩টাকৈ নিয়ম পৰীক্ষা কৰা হৈছে",
    "Illustrative data only. Official departments make final decisions.":"এই তথ্য কেৱল উদাহৰণ। চূড়ান্ত সিদ্ধান্ত দায়িত্বশীল বিভাগে কৰিব।",
    "Local":"স্থানীয়",
    "Curated records":"নিৰ্বাচিত তথ্য", "Clear match states":"স্পষ্ট মিলৰ অৱস্থা",
    "First in every result":"প্ৰতিটো ফলাফলত প্ৰথম", "Profile & checklist storage":"পৰিচয় আৰু তালিকা সংৰক্ষণ",
    "EXPLORE THE DIRECTORY":"ডাইৰেক্টৰি চাওক", "Browse by category":"শ্ৰেণী অনুসৰি চাওক",
    "View all schemes →":"সকলো আঁচনি চাওক →", "Scholarship":"বৃত্তি",
    "Skill development":"দক্ষতা উন্নয়ন", "Entrepreneurship":"উদ্যোগ",
    "Health & nutrition":"স্বাস্থ্য আৰু পুষ্টি", "Women & children":"মহিলা আৰু শিশু",
    "Agriculture":"কৃষি", "Housing":"গৃহবাস", "Disability":"প্ৰতিবন্ধী",
    "Education costs and student support":"শিক্ষাৰ খৰচ আৰু শিক্ষার্থী সহায়",
    "Training and employability":"প্ৰশিক্ষণ আৰু কৰ্মযোগ্যতা",
    "Enterprise and artisan support":"ব্যৱসায় আৰু কাৰিগৰ সহায়",
    "Maternal, child and community care":"মাতৃ, শিশু আৰু সমাজিক সেৱা",
    "Family and caregiver programmes":"পৰিয়াল আৰু যত্নকাৰীৰ কাৰ্যসূচী",
    "Farming and rural livelihoods":"কৃষি আৰু গ্ৰামীণ জীৱিকা",
    "Shelter and household support":"আবাস আৰু ঘৰৰ সহায়",
    "Accessibility and assistance":"সুলভতা আৰু সহায়",
    "HOW IT WORKS":"ই কেনেকৈ কাম কৰে", "Three clear steps":"তিনিটা সহজ পদক্ষেপ",
    "01":"০১", "02":"০২", "03":"০৩",
    "Share your profile":"নিজৰ পৰিচয় দিয়ক",
    "Answer only the questions needed for scheme discovery. Data stays in this browser.":"আঁচনি সন্ধানৰ বাবে দৰকাৰী প্ৰশ্নহে উত্তৰ দিয়ক। তথ্য এই ব্ৰাউজৰতে থাকিব।",
    "Review rule matches":"নিয়ম মিলন চাওক",
    "See which conditions meet, need confirmation, or conflict with your profile.":"কোন নিয়ম মিলি আছে, নিশ্চিতকৰণ দৰকাৰ বা পৰিচয়ৰ বিপৰীতে আছে চাওক।",
    "Prepare and apply":"সাজু হওক আৰু আবেদন কৰক",
    "Use a persistent checklist, then open the official programme or application source.":"সংৰক্ষিত তালিকা ব্যৱহাৰ কৰক, তাৰপিছত চৰকাৰী আবেদন উৎস খোলক।",
    "BUILT FOR CLARITY":"স্পষ্টতাৰ বাবে সৃষ্টি",
    "Transparent by design.":"ডিজাইনৰ মাজেৰে স্বচ্ছ।",
    "SchemeFinder does not approve applications or predict benefit amounts. It turns curated scheme records into readable, condition-by-condition explanations.":"SchemeFinder আবেদন অনুমোদন নকৰে বা সুবিধাৰ পৰিমাণ অনুমান নকৰে। ই নিৰ্বাচিত তথ্যক সহজ নিয়মসমূহত ব্যাখ্যা কৰে।",
    "Structured":"গঠিত", "Rules, not AI decisions":"AI সিদ্ধান্ত নহয়, নিয়ম",
    "Source-linked":"উৎস সংযোগিত", "Official departments":"চৰকাৰী বিভাগ",
    "Local-first":"স্থানীয়-পূৰ্ব", "No profile upload":"পৰিচয় আপলোড নাই",
    "Scheme directory":"আঁচনি ডাইৰেক্টৰি", "Browse schemes":"আঁচনি চাওক",
    "Search curated Assam-first records with official source links.":"চৰকাৰী উৎসসহ নিৰ্বাচিত অসম-মুখী তথ্য সন্ধান কৰক।",
    "Search name, category or benefit…":"নাম, শ্ৰেণী বা সুবিধা সন্ধান কৰক…",
    "All categories":"সকলো শ্ৰেণী", "All jurisdictions":"সকলো এলেকা",
    "Central":"কেন্দ্ৰীয়", "10 schemes":"১০টা আঁচনি",
    "View details →":"বিৱৰণ চাওক →", "View details":"বিৱৰণ চাওক",
    "Save":"সংৰক্ষণ", "Remove":"আঁতৰাওক",
    "Official national discovery":"চৰকাৰী ৰাষ্ট্ৰীয় সন্ধান",
    "Looking for more schemes?":"অধিক আঁচনি বিচাৰিছে?",
    "SchemeFinder gives you fast, explainable Assam-first matches. Continue to myScheme for a broader Central and State government scheme catalogue.":"SchemeFinder দ্ৰুত আৰু বুজাব পৰা অসম-মুখী মিল দেখুৱায়। Central আৰু State আঁচনিত myScheme লৈ যাওক।",
    "Explore more Central & State schemes on myScheme.gov.in":"myScheme.gov.inত অধিক কেন্দ্ৰীয় আৰু ৰাজ্য আঁচনি চাওক",
    "Benefits & Assistance Provided":"সুবিধা আৰু সহায়",
    "Eligibility Analysis":"যোগ্যতা বিশ্লেষণ", "Document Checklist":"নথিপত্ৰ তালিকা",
    "Application Process & Sources":"আবেদন প্ৰক্ৰিয়া আৰু উৎস",
    "Profile not created":"পৰিচয় সৃষ্টি কৰা হোৱা নাই",
    "Complete your profile to see condition-by-condition results.":"নিয়মভিত্তিক ফলাফল চাবলৈ পৰিচয় পূৰ্ণ কৰক।",
    "Create profile →":"পৰিচয় সৃষ্টি কৰক →", "Create profile":"পৰিচয় সৃষ্টি কৰক",
    "Go to Official Portal":"চৰকাৰী পোৰ্টাললৈ যাওক", "Prepare Documents":"নথিপত্ৰ সাজু কৰক",
    "Ask Assistant About This Scheme":"এই আঁচনিৰ বিষয়ে সহায়কক সোধক",
    "Verified":"সত্যাপন কৰা",
    "Eligible":"যোগ্য", "Potentially Eligible":"সাম্ভাব্য যোগ্য",
    "Not Eligible":"যোগ্য নহয়", "Meets":"মিলিছে", "Not Met":"মিল নাই",
    "Verify / Unknown":"যাচাই কৰক / অজানা", "Required":"আৱশ্যক", "Optional":"বৈকল্পিক",
    "Back to Catalogue":"ডাইৰেক্টৰিলৈ উভতি যাওক", "Back to Results":"ফলাফললৈ উভতি যাওক",
    "Source Reference:":"উৎস:",
    "Last verified:":"শেষবাৰ সত্যাপন:",
    "Verification note":"সত্যাপন টোকা",
    "Ask AI":"AIক সোধক", "Scheme assistant":"আঁচনি সহায়ক",
    "Free demo assistant":"বিনামূলীয়া ডেমো সহায়ক",
    "Browser-only demo: no API key or account needed. It does not decide eligibility.":"ব্ৰাউজাৰ-ভিত্তিক ডেমো: API চাবি বা একাউণ্ট দৰকাৰ নাই। ই যোগ্যতা সিদ্ধান্ত নকৰে।",
    "Student schemes":"শিক্ষার্থী আঁচনি", "Required documents":"আৱশ্যক নথিপত্ৰ",
    "Explain eligibility":"যোগ্যতা ব্যাখ্যা কৰক"
  },
  hi: {
    "Home":"मुखपृष्ठ", "Explore Schemes":"योजनाएँ देखें", "How It Works":"यह कैसे काम करता है",
    "About":"परिचय", "Sign In":"साइन इन / डैशबोर्ड", "User Dashboard":"उपयोगकर्ता डैशबोर्ड",
    "Find Schemes for Me":"मेरे लिए योजनाएँ खोजें", "Menu":"मेन्यू", "Close":"बंद करें",
    "ASSAM-FIRST / PUBLIC BENEFITS DISCOVERY":"असम-पहले / सार्वजनिक लाभ खोज",
    "Find the support you may qualify for.":"आप जिन सहायता योजनाओं के लिए पात्र हो सकते हैं, उन्हें खोजें।",
    "Compare your profile against clear eligibility rules, prepare the right documents, and continue to official government sources.":"अपनी प्रोफ़ाइल को स्पष्ट पात्रता नियमों से मिलाएँ, सही दस्तावेज़ तैयार करें और आधिकारिक सरकारी स्रोतों पर जाएँ।",
    "Search by scheme name, category or keyword":"योजना का नाम, श्रेणी या शब्द से खोजें",
    "Search scheme name, category or keyword":"योजना का नाम, श्रेणी या शब्द लिखें",
    "Search":"खोजें", "Search schemes":"योजनाएँ खोजें",
    "Try Sample Profile":"नमूना प्रोफ़ाइल आज़माएँ", "Example profile":"नमूना प्रोफ़ाइल",
    "Residence":"निवास", "Age":"उम्र", "Education":"शिक्षा", "Income band":"आय वर्ग",
    "Assam":"असम", "Undergraduate":"स्नातक", "Below ₹2.5 lakh":"₹2.5 लाख से कम",
    "Rule-based evaluation":"नियम-आधारित मूल्यांकन", "3 of 3 recorded conditions checked":"लिखित 3 में से 3 सभी शर्तें जाँची गईं",
    "Illustrative data only. Official departments make final decisions.":"केवल उदाहरण डेटा। अंतिम निर्णय अधिकारी विभाग करता है।",
    "Local":"स्थानीय",
    "Curated records":"चयनित रिकॉर्ड", "Clear match states":"स्पष्ट मिलान स्थिति",
    "First in every result":"हर परिणाम में पहले", "Profile & checklist storage":"प्रोफ़ाइल और चेकलिस्ट संग्रह",
    "EXPLORE THE DIRECTORY":"डायरेक्टरी देखें", "Browse by category":"श्रेणी के अनुसार देखें",
    "View all schemes →":"सभी योजनाएँ देखें →", "Scholarship":"छात्रवृत्ति",
    "Skill development":"कौशल विकास", "Entrepreneurship":"उद्यमिता",
    "Health & nutrition":"स्वास्थ्य और पोषण", "Women & children":"महिला और बच्चे",
    "Agriculture":"कृषि", "Housing":" आवास", "Disability":"दिव्यांगता",
    "Education costs and student support":"शिक्षा लागत और छात्र सहायता",
    "Training and employability":"प्रशिक्षण और रोज़गार योग्यता",
    "Enterprise and artisan support":"उद्यम और कारीगर सहायता",
    "Maternal, child and community care":"मातृ, बाल और सामुदायिक देखभाल",
    "Family and caregiver programmes":"परिवार और देखभालकर्ता कार्यक्रम",
    "Farming and rural livelihoods":"खेती और ग्रामीण आजीविका",
    "Shelter and household support":"आवास और घरेलू सहायता",
    "Accessibility and assistance":"सुलभता और सहायता",
    "HOW IT WORKS":"यह कैसे काम करता है", "Three clear steps":"तीन स्पष्ट चरण",
    "01":"०१", "02":"०२", "03":"०३",
    "Share your profile":"अपनी प्रोफ़ाइल साझा करें",
    "Answer only the questions needed for scheme discovery. Data stays in this browser.":"केवल योजना खोज के आवश्यक प्रश्नों के उत्तर दें। डेटा इसी ब्राउज़र में रहता है।",
    "Review rule matches":"नियमों का मिलान देखें",
    "See which conditions meet, need confirmation, or conflict with your profile.":"देखें कौन-सी शर्तें पूरी होती हैं, पुष्टि चाहिए या आपकी प्रोफ़ाइल से मेल नहीं खाती।",
    "Prepare and apply":"तैयारी करें और आवेदन करें",
    "Use a persistent checklist, then open the official programme or application source.":"स्थायी चेकलिस्ट देखें, फिर आधिकारिक कार्यक्रम या आवेदन स्रोत खोलें।",
    "BUILT FOR CLARITY":"स्पष्टता के लिए बनाया गया",
    "Transparent by design.":"डिज़ाइन से पारदर्शी।",
    "SchemeFinder does not approve applications or predict benefit amounts. It turns curated scheme records into readable, condition-by-condition explanations.":"SchemeFinder आवेदन को मंज़ूरी नहीं देता या लाभ की राशि का अनुमान नहीं लगाता। यह चयनित रिकॉर्ड को स्पष्ट नियमों में समझाता है।",
    "Structured":"संरचित", "Rules, not AI decisions":"नियम, AI निर्णय नहीं",
    "Source-linked":"स्रोत-संबद्ध", "Official departments":"आधिकारिक विभाग",
    "Local-first":"स्थानीय-पहले", "No profile upload":"कोई प्रोफ़ाइल अपलोड नहीं",
    "Scheme directory":"योजना निर्देशिका", "Browse schemes":"योजनाएँ देखें",
    "Search curated Assam-first records with official source links.":"आधिकारिक स्रोतों सहित चुनी हुई असम-पहले योजनाएँ खोजें।",
    "Search name, category or benefit…":"नाम, श्रेणी या लाभ खोजें…",
    "All categories":"सभी श्रेणियाँ", "All jurisdictions":"सभी क्षेत्र",
    "Central":"केंद्रीय", "10 schemes":"१० योजनाएँ",
    "View details →":"विवरण देखें →", "View details":"विवरण देखें",
    "Save":"सहेजें", "Remove":"हटाएँ",
    "Official national discovery":"आधिकारिक राष्ट्रीय खोज",
    "Looking for more schemes?":"और योजनाएँ खोज रहे हैं?",
    "SchemeFinder gives you fast, explainable Assam-first matches. Continue to myScheme for a broader Central and State government scheme catalogue.":"SchemeFinder तेज़ और स्पष्ट असम-पहले मिलान देता है। अधिक केंद्र और राज्य योजनाओं के लिए myScheme देखें।",
    "Explore more Central & State schemes on myScheme.gov.in":"myScheme.gov.in पर अधिक केंद्र और राज्य योजनाएँ देखें",
    "Benefits & Assistance Provided":"लाभ और सहायता",
    "Eligibility Analysis":"पात्रता विश्लेषण", "Document Checklist":"दस्तावेज़ चेकलिस्ट",
    "Application Process & Sources":"आवेदन प्रक्रिया और स्रोत",
    "Profile not created":"प्रोफ़ाइल नहीं बनी",
    "Complete your profile to see condition-by-condition results.":"शर्त-वार परिणाम देखने के लिए प्रोफ़ाइल पूरी करें।",
    "Create profile →":"प्रोफ़ाइल बनाएँ →", "Create profile":"प्रोफ़ाइल बनाएँ",
    "Go to Official Portal":"आधिकारिक पोर्टल जाएँ", "Prepare Documents":"दस्तावेज़ तैयार करें",
    "Ask Assistant About This Scheme":"इस योजना के बारे में सहायक से पूछें",
    "Verified":"सत्यापित",
    "Eligible":"पात्र", "Potentially Eligible":"संभावित रूप से पात्र",
    "Not Eligible":"पात्र नहीं", "Meets":"पूरा होता है", "Not Met":"पूरा नहीं होता",
    "Verify / Unknown":"जाँचें / अज्ञात", "Required":"आवश्यक", "Optional":"वैकल्पिक",
    "Back to Catalogue":"निर्देशिका पर वापस जाएँ", "Back to Results":"परिणाम पर वापस जाएँ",
    "Source Reference:":"स्रोत:",
    "Last verified:":"अंतिम सत्यापन:",
    "Verification note":"सत्यापन टिप्पणी",
    "Ask AI":"AI से पूछें", "Scheme assistant":"योजना सहायक",
    "Free demo assistant":"नि:शुल्क डेमो सहायक",
    "Browser-only demo: no API key or account needed. It does not decide eligibility.":"केवल ब्राउज़र डेमो: API कुंजी या खाते की आवश्यकता नहीं। यह पात्रता नहीं तय करता।",
    "Student schemes":"छात्र योजनाएँ", "Required documents":"आवश्यक दस्तावेज़",
    "Explain eligibility":"पात्रता बताएँ"
  }
};

const contentTranslations = {
  as: {
    "Post Matric Scholarship for ST Students":"ST শিক্ষাৰ্থীৰ বাবে পোস্ট-মেট্ৰিক বৃত্তি",
    "National Means-cum-Merit Scholarship":"ৰাষ্ট্ৰীয় অৰ্থ-মেধা বৃত্তি",
    "PM Kaushal Vikas Yojana":"প্ৰধানমন্ত্ৰী कौशल विकास যোজনা",
    "Pre-Matric Scholarship for Minorities":"সংখ্যালঘু ছাত্র-ছাত্ৰীৰ বাবে প্ৰি-মেট্ৰিক বৃত্তি",
    "Post-Matric Scholarship for SC Students":"SC শিক্ষাৰ্থীৰ বাবে পোস্ট-মেট্ৰিক বৃত্তি",
    "Stand-Up India":"ষ্টেণ্ড-আপ ইণ্ডিয়া",
    "PM Vishwakarma":"প্ৰধানমন্ত্ৰী বিশ্বকর্মা",
    "Assam Skill Development Mission training":"অসম দক্ষতা উন্নয়ন মিছনৰ প্ৰশিক্ষণ",
    "Anundoram Borooah Award":"অনুদৰম বৰুৱা বঁটা",
    "Poshan Abhiyaan Maternal & Child Support":"পোষণ অভিযান মাতৃ আৰু শিশু সহায়",
    "This Central Government scholarship supports students who belong to a Scheduled Tribe and are studying in an eligible post-matric course. It can help with continuing education through assistance for covered fees and living support. Final course, income and benefit limits are confirmed by the National Scholarship Portal and competent state authorities.":"এই কেন্দ্ৰীয় চৰকাৰী বৃত্তিয়ে Scheduled Tribe সম্প্ৰদায়ৰ যোগ্য পোস্ট-মেট্ৰিক শিক্ষাৰ্থীক সহায় কৰে। ইয়াৰে কিছুমান নথিভুক্ত মাচুল আৰু জীৱনভাৰ সহায় পাব পাৰে। চূড়ান্ত পাঠ্যক্ৰম, আয় আৰু সুবিধাৰ সীমা National Scholarship Portal আৰু দায়িত্বশীল ৰাজ্যিক কৰ্তৃপক্ষই নিশ্চিত কৰে।",
    "The National Means-cum-Merit Scholarship supports meritorious students from households with limited income while they continue in covered secondary levels. Selection and renewal depend on the current annual notice and examination requirements. Students and parents should confirm the latest class coverage, award terms and application window in the official portal.":"ৰাষ্ট্ৰীয় অৰ্থ-মেধা বৃত্তিয়ে সীমিত আয়যুক্ত পৰিয়ালৰ মেধাবী মাধ্যমিক শিক্ষাৰ্থীক সহায় কৰে। নিৰ্বাচন আৰু নবীকৰণ চলিত বাৰ্ষিক জাননী আৰু পৰীক্ষাৰ নিয়মৰ ওপৰত নিৰ্ভৰ কৰে। শিক্ষার্থী আৰু অভিভাৱকসকলে চৰকাৰী পোৰ্টালত শ্ৰেণীসমূহ, সুবিধা আৰু আবেদন সময়সীমা নিশ্চিত কৰিব।",
    "PM Kaushal Vikas Yojana offers short-term, industry-oriented skill training through participating centres. It is intended to help eligible candidates build job-ready skills and receive an assessment-based certificate. Course content, local capacity and placement support vary, so applicants should verify the specific course before registering.":"PM Kaushal Vikas Yojana অংশগ্ৰহণকাৰী প্ৰশিক্ষণ কেন্দ্ৰসমূহৰ মাধ্যমেৰে চমু আৰু উদ্দ্যোগমুখী দক্ষতা প্ৰশিক্ষণ দিয়ে। যোগ্য প্ৰাৰ্থীয়ে চাকৰিৰ বাবে প্ৰয়োজনীয় দক্ষতা আৰু মূল্যায়নভিত্তিক প্ৰমাণপত্ৰ পাব পাৰে। পাঠ্যক্ৰম, স্থানীয় গণ্ডি আৰু নিয়োগ সহায় বেলেগ হ'ব পাৰে; নামভৰ্তিৰ পূৰ্বে পাঠ্যক্ৰম নিশ্চিত কৰক।",
    "This scheme provides school-level scholarship support to students from notified minority communities who meet the current academic and income conditions. It can assist with selected admission or educational costs and regular study support. The National Scholarship Portal and current annual notice remain the final source for class coverage and award terms.":"এই আঁচনিয়ে সূচীত সংখ্যালঘু সম্প্ৰদায়ৰ যোগ্য বিদ্যালয় শিক্ষাৰ্থীক বৃত্তি সহায় দিয়ে। কিছুমান ভর্তি বা শিক্ষামূলক খৰচ আৰু নিয়মীয়া অধ্যয়ন সহায় মিলিব পাৰে। শ্ৰেণী সীমা আৰু সুবিধা National Scholarship Portal আৰু চলিত বাৰ্ষিক জাননীৰ দ্বাৰা নিশ্চিত কৰক।",
    "The Post-Matric Scholarship for SC Students supports students belonging to Scheduled Castes in eligible higher or post-matric education. It may assist with covered compulsory fees and maintenance under the current scheme rules. Course eligibility, family income and verification requirements must be confirmed on NSP and by the responsible authority.":"Scheduled Casteৰ যোগ্য উচ্চতৰ বা পোস্ট-মেট্ৰিক শিক্ষাৰ্থীক এই বৃত্তিয়ে সহায় কৰে। চলিত নিয়মমতে আনিব্য় মাচুল আৰু নিৰ্দিষ্ট ভৰিৰ সহায় মিলিব পাৰে। পাঠ্যক্ৰম, পৰিয়ালৰ আয় আৰু সত্যাপনৰ প্ৰয়োজন NSP আৰু দায়িত্বশীল কৰ্তৃপক্ষই নিশ্চিত কৰিব।",
    "Stand-Up India connects eligible entrepreneurs with participating banks for composite loans to establish a greenfield enterprise. The programme specifically recognises eligible women and Scheduled Caste or Scheduled Tribe applicants, subject to the bank's credit appraisal. Approval, terms and disbursement remain decisions of the lending bank.":"Stand-Up India যোগ্য উদ্যোক্তাক অংশগ্ৰহণকাৰী বেঙ্কৰ সৈতে সংযোগ কৰি নতুন উদ্যোগ গঢ়াৰ বাবে যৌথ ঋণৰ সুবিধা উপলব্ধ কৰে। যোগ্য মহিলা আৰু Scheduled Caste বা Scheduled Tribe প্ৰাৰ্থীক বিশেষভাৱে মান্যতা দিয়ে। বাঙ্কৰ মূল্যায়নৰ অন্তত অনুমোদন আৰু বিতৰণ সিদ্ধান্ত হয়।",
    "PM Vishwakarma supports eligible traditional artisans and craftspeople working in covered trades. Participating beneficiaries may receive structured skill development, toolkit assistance and access to enterprise loan stages after verification. Trade eligibility and each stage's conditions are confirmed through the official registration and verification process.":"PM Vishwakarma সূচীত পৰম্পৰাগত কাৰিগৰ আৰু শিল্পীক সহায় কৰে। সত্যাপনৰ পিছত যোগ্য সুবিধাভোগীক দক্ষতা প্ৰশিক্ষণ, সঁজুলি সহায় আৰু ব্যৱসায়িক ঋণৰ পৰ্যায় মিলিব পাৰে। কৰ্মৰ যোগ্যতা আৰু প্ৰতিটো পৰ্যায়ৰ নিয়ম চৰকাৰী পঞ্জীয়ন আৰু সত্যাপন প্ৰক্ৰিয়াৰে নিশ্চিত কৰক।",
    "Assam Skill Development Mission programmes connect Assam residents with approved training opportunities and employment-support activities. Available courses and providers change over time, so applicants should use current ASDM or district notices. Training, placement and documentation features vary by the selected course.":"Assam Skill Development Mission কাৰ্যসূচীসমূহে অসমবাসীক অনুমোদিত প্ৰশিক্ষণ আৰু ৰোজগাৰ সহায়ৰ সুযোগৰ সৈতে সংযোগ কৰে। পাঠ্যক্ৰম আৰু সংগঠনসমূহ সলনি হ’ব পাৰে; চলিত ASDM বা জিলাৰ জাননী চাওক। প্ৰশিক্ষণ, নিয়োগ আৰু নথিপত্ৰৰ সুবিধা বাছনি কৰা পাঠ্যক্ৰম অনুসৰি সলনি হ’ব পাৰে।",
    "The Anundoram Borooah Award recognises Assam students who meet the merit conditions for the relevant HSLC examination cycle. The form of award, result threshold and application process can change with each official notification. Students should verify current eligibility and instructions through SEBA or the Assam education department.":"Anundoram Borooah Award সংশ্লিষ্ট HSLC পৰীক্ষা চক্রত মেধাৰ নিয়ম পূৰ্ণ কৰা অসমৰ শিক্ষাৰ্থীক সম্মান দিয়ে। বঁটাৰ ৰূপ, ফলৰ সীমা আৰু আবেদন প্ৰক্ৰিয়া প্ৰতিটো চৰকাৰী জাননীতে সলনি হ'ব পাৰে। SEBA বা Assam শিক্ষা বিভাগৰ পৰা চলিত যোগ্যতা আৰু নিৰ্দেশনা নিশ্চিত কৰক।",
    "Poshan Abhiyaan brings nutrition, maternal and child-health support activities to participating communities through Anganwadi and related services. It can help eligible pregnant or breastfeeding women, caregivers and children access counselling and local programmes. Available services and registration steps differ by locality and should be confirmed with the local centre.":"Poshan Abhiyaan Anganwadi আৰু সংশ্লিষ্ট সেৱাৰ মাধ্যমেৰে অংশগ্ৰহণকাৰী সমাজলৈ পুষ্টি, মাতৃ আৰু শিশু স্বাস্থ্য সহায় নিয়ে। যোগ্য গৰ্ভৱতী বা স্তন্যদান কৰা মহিলা, যত্নকাৰী আৰু শিশুৱে পৰামৰ্শ আৰু স্থানীয় কাৰ্যসূচী পাব পাৰে। সেৱা আৰু পঞ্জীয়ন স্থান অনুসৰি সলনি হ’ব পাৰে; স্থানীয় কেন্দ্ৰত নিশ্চিত কৰক।",
    "Tribal Affairs":"আদিবাসী বিষয়ক",
    "School Education & Literacy":"স্কুল শিক্ষা আৰু সাক্ষৰতা",
    "Ministry of Skill Development":"দক্ষতা উন্নয়ন মন্ত্ৰালয়",
    "Minority Affairs":"সংখ্যালঘু বিষয়ক",
    "Social Justice & Empowerment":"সামাজিক ন্যায় আৰু ক্ষমতায়ন",
    "Department of Financial Services":"বিত্তীয় সেৱা বিভাগ",
    "Ministry of MSME":"MSME মন্ত্ৰালয়",
    "Assam Skill Employment & Entrepreneurship Department":"অসম দক্ষতা ৰোজগাৰ আৰু উদ্যোগ বিভাগ",
    "Secondary Education Department":"মাধ্যমিক শিক্ষা বিভাগ",
    "Women & Child Development":"মহিলা আৰু শিশু উন্নয়ন"
  },
  hi: {
    "Post Matric Scholarship for ST Students":"ST छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति",
    "National Means-cum-Merit Scholarship":"राष्ट्रीय आय-सह-मेरिट छात्रवृत्ति",
    "PM Kaushal Vikas Yojana":"प्रधानमंत्री कौशल विकास योजना",
    "Pre-Matric Scholarship for Minorities":"अल्पसंख्यक छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति",
    "Post-Matric Scholarship for SC Students":"SC छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति",
    "Stand-Up India":"स्टैंड-अप इंडिया",
    "PM Vishwakarma":"पीएम विश्वकर्मा",
    "Assam Skill Development Mission training":"असम कौशल विकास मिशन प्रशिक्षण",
    "Anundoram Borooah Award":"अनुद्रम बरुआ पुरस्कार",
    "Poshan Abhiyaan Maternal & Child Support":"पोषण अभियान मातृ एवं बाल सहायता",
    "This Central Government scholarship supports students who belong to a Scheduled Tribe and are studying in an eligible post-matric course. It can help with continuing education through assistance for covered fees and living support. Final course, income and benefit limits are confirmed by the National Scholarship Portal and competent state authorities.":"यह केंद्रीय छात्रवृत्ति Scheduled Tribe समुदाय से संबंधित और पात्र पोस्ट-मेट्रिक पाठ्यक्रम में पढ़ रहे छात्रों की सहायता करती है। इसमें निर्धारित शुल्क और रहने-संबंधी सहायता शामिल हो सकती है। पाठ्यक्रम, आय और लाभ की अंतिम सीमा National Scholarship Portal तथा राज्य अधिकारी पुष्टि करते हैं।",
    "The National Means-cum-Merit Scholarship supports meritorious students from households with limited income while they continue in covered secondary levels. Selection and renewal depend on the current annual notice and examination requirements. Students and parents should confirm the latest class coverage, award terms and application window in the official portal.":"राष्ट्रीय आय-सह-मेरिट छात्रवृत्ति सीमित आय वाले परिवारों के मेधावी माध्यमिक छात्रों को सहायता देती है। चयन और नवीनीकरण वर्तमान वार्षिक सूचना तथा परीक्षा नियमों पर निर्भर करता है। छात्र और अभिभावक आधिकारिक पोर्टल पर कक्षा सीमा, पुरस्कार और आवेदन अवधि सत्यापित करें।",
    "PM Kaushal Vikas Yojana offers short-term, industry-oriented skill training through participating centres. It is intended to help eligible candidates build job-ready skills and receive an assessment-based certificate. Course content, local capacity and placement support vary, so applicants should verify the specific course before registering.":"PM कौशल विकास योजना सहभागी केंद्रों के माध्यम से लघु, उद्योग-आधारित कौशल प्रशिक्षण देती है। यह योग्य उम्मीदवारों को रोजगार-संबंधी कौशल और मूल्यांकन-आधारित प्रमाणपत्र दिलाने में सहायक है। पाठ्यक्रम, स्थानीय क्षमता और प्लेसमेंट सहायता बदल सकती है; पंजीकरण से पहले पाठ्यक्रम सत्यापित करें।",
    "This scheme provides school-level scholarship support to students from notified minority communities who meet the current academic and income conditions. It can assist with selected admission or educational costs and regular study support. The National Scholarship Portal and current annual notice remain the final source for class coverage and award terms.":"यह योजना अधिसूचित अल्पसंख्यक समुदायों के योग्य स्कूल छात्रों को छात्रवृत्ति सहायता देती है। इसमें चयनित प्रवेश या शिक्षा लागत तथा नियमित अध्ययन सहायता शामिल हो सकती है। कक्षा सीमा और लाभ की अंतिम जानकारी National Scholarship Portal तथा वर्तमान वार्षिक सूचना पर मिलती है।",
    "The Post-Matric Scholarship for SC Students supports students belonging to Scheduled Castes in eligible higher or post-matric education. It may assist with covered compulsory fees and maintenance under the current scheme rules. Course eligibility, family income and verification requirements must be confirmed on NSP and by the responsible authority.":"SC छात्रों के लिए पोस्ट-मेट्रिक छात्रवृत्ति पात्र अनुसूचित जाति छात्रों की उच्च या पोस्ट-मेट्रिक शिक्षा में सहायता करती है। वर्तमान नियमों के अनुसार अनिवार्य शुल्क और निर्धारित भत्ता मिल सकता है। पाठ्यक्रम, परिवार आय और सत्यापन NSP तथा दायित्वपूर्ण अधिकारी से पुष्टि करें।",
    "Stand-Up India connects eligible entrepreneurs with participating banks for composite loans to establish a greenfield enterprise. The programme specifically recognises eligible women and Scheduled Caste or Scheduled Tribe applicants, subject to the bank's credit appraisal. Approval, terms and disbursement remain decisions of the lending bank.":"स्टैंड-अप इंडिया योग्य उद्यमियों को सहभागी बैंक से जोड़कर नया उद्यम स्थापित करने हेतु संयुक्त ऋण सुविधा दिलाती है। योजना योग्य महिलाओं तथा Scheduled Caste या Scheduled Tribe आवेदकों को मान्यता देती है। स्वीकृति और वितरण ऋणदाता बैंक के क्रेडिट मूल्यांकन पर निर्भर है।",
    "PM Vishwakarma supports eligible traditional artisans and craftspeople working in covered trades. Participating beneficiaries may receive structured skill development, toolkit assistance and access to enterprise loan stages after verification. Trade eligibility and each stage's conditions are confirmed through the official registration and verification process.":"पीएम विश्वकर्मा सूचीबद्ध परंपरागत व्यवसायों के योग्य कारीगरों को सहायता देती है। सत्यापन के बाद लाभार्थी को कौशल विकास, उपकरण सहायता और उद्यम ऋण चरण मिल सकते हैं। व्यापार पात्रता और प्रत्येक चरण की शर्तें आधिकारिक पंजीकरण और सत्यापन में पुष्टि होती हैं।",
    "Assam Skill Development Mission programmes connect Assam residents with approved training opportunities and employment-support activities. Available courses and providers change over time, so applicants should use current ASDM or district notices. Training, placement and documentation features vary by the selected course.":"असम कौशल विकास मिशन कार्यक्रम असम निवासियों को अनुमोदित प्रशिक्षण और रोजगार सहायता अवसरों से जोड़ते हैं। पाठ्यक्रम और प्रदाता बदल सकते हैं; आवेदक वर्तमान ASDM या जिला सूचना देखें। प्रशिक्षण, प्लेसमेंट और दस्तावेज़ सुविधाएँ चुने गए पाठ्यक्रम पर निर्भर करती हैं।",
    "The Anundoram Borooah Award recognises Assam students who meet the merit conditions for the relevant HSLC examination cycle. The form of award, result threshold and application process can change with each official notification. Students should verify current eligibility and instructions through SEBA or the Assam education department.":"अनुद्रम बरुआ पुरस्कार संबंधित HSLC परीक्षा चक्र में योग्यता शर्तें पूरी करने वाले असम छात्रों को मान्यता देता है। पुरस्कार का रूप, परिणाम सीमा और आवेदन प्रक्रिया प्रत्येक सूचना के साथ बदल सकती है। SEBA या असम शिक्षा विभाग से वर्तमान पात्रता और निर्देश सत्यापित करें।",
    "Poshan Abhiyaan brings nutrition, maternal and child-health support activities to participating communities through Anganwadi and related services. It can help eligible pregnant or breastfeeding women, caregivers and children access counselling and local programmes. Available services and registration steps differ by locality and should be confirmed with the local centre.":"पोषण अभियान आंगनवाड़ी और संबद्ध सेवाओं के माध्यम से सहभागी समुदायों को पोषण तथा मातृ-शिशु स्वास्थ्य सहायता देता है। पात्र गर्भवती या स्तनपान कराने वाली महिलाएँ, देखभालकर्ता और बच्चे परामर्श तथा स्थानीय कार्यक्रम पा सकते हैं। सेवाएँ और पंजीकरण स्थान के अनुसार बदलते हैं; स्थानीय केंद्र से पुष्टि करें।",
    "Tribal Affairs":"जनजातीय मामलों",
    "School Education & Literacy":"विद्यालय शिक्षा और साक्षरता",
    "Ministry of Skill Development":"कौशल विकास मंत्रालय",
    "Minority Affairs":"अल्पसंख्यक मामले",
    "Social Justice & Empowerment":"सामाजिक न्याय और अधिकारिता",
    "Department of Financial Services":"वित्तीय सेवाएँ विभाग",
    "Ministry of MSME":"एमएसएमई मंत्रालय",
    "Assam Skill Employment & Entrepreneurship Department":"असम कौशल रोजगार एवं उद्यमिता विभाग",
    "Secondary Education Department":"माध्यमिक शिक्षा विभाग",
    "Women & Child Development":"महिला एवं बाल विकास"
  }
};

function getLanguage() {
  try { return localStorage.getItem("sf-language") || "en"; } catch { return "en"; }
}

function syncNavigationLanguage(language) {
  const navText = language === "as"
    ? {home:"গৃহ", schemes:"আঁচনি অন্বেষণ", works:"ই কেনেকৈ কাম কৰে", about:"বিষয়ে", signIn:"ডেশব’ৰ্ড", dashboard:"ব্যৱহাৰকাৰী ডেশব’ৰ্ড", find:"মোৰ বাবে আঁচনি বিচাৰক", menu:"মেনু", close:"বন্ধ", state:"অসম"}
    : language === "hi"
      ? {home:"मुखपृष्ठ", schemes:"योजनाएँ देखें", works:"यह कैसे काम करता है", about:"परिचय", signIn:"डैशबोर्ड", dashboard:"उपयोगकर्ता डैशबोर्ड", find:"मेरे लिए योजनाएँ खोजें", menu:"मेन्यू", close:"बंद करें", state:"असम"}
      : {home:"Home", schemes:"Explore Schemes", works:"How It Works", about:"About", signIn:"Sign In", dashboard:"User Dashboard", find:"Find Schemes for Me", menu:"Menu", close:"Close", state:"Assam"};

  const desktop = $(".desktop-nav");
  if (desktop) {
    const links = desktop.querySelectorAll(":scope > a");
    if (links[0]) links[0].textContent = navText.home;
    if (links[1]) links[1].textContent = navText.schemes;
    if (links[2]) links[2].textContent = navText.works;
    if (links[3]) links[3].textContent = navText.about;
    if (links[4]) links[4].innerHTML = `${navText.find} <span aria-hidden="true">→</span>`;
  }
  const signInLabel = $("#saved-nav span:first-child");
  if (signInLabel) signInLabel.textContent = navText.signIn;
  const mobile = $("#mobile-menu");
  if (mobile) {
    const links = mobile.querySelectorAll(":scope > a");
    if (links[0]) links[0].textContent = navText.home;
    if (links[1]) links[1].textContent = navText.schemes;
    if (links[2]) links[2].textContent = navText.works;
    if (links[3]) links[3].textContent = navText.about;
    if (links[4]) links[4].textContent = navText.dashboard;
    if (links[5]) links[5].textContent = navText.find;
  }
  const brandState = $(".brand small");
  if (brandState) brandState.textContent = navText.state;
  const menuButton = $("#mobile-menu-button");
  if (menuButton) {
    const open = $("#mobile-menu")?.classList.contains("open");
    menuButton.textContent = open ? navText.close : navText.menu;
  }
  updateNavigationState();
}

function updateNavigationState() {
  const hash = location.hash.replace(/^#/, "") || "/";
  let activeRoute = "/";
  if (hash === "/schemes" || hash.startsWith("/schemes/") || hash === "/results") activeRoute = "/schemes";
  else if (hash === "/how-it-works") activeRoute = "/how-it-works";
  else if (hash === "/about") activeRoute = "/about";

  document.querySelectorAll(".desktop-nav a[href], .mobile-menu a[href]").forEach(link => {
    const route = link.getAttribute("href").replace(/^#/, "");
    const active = route !== "/find" && route === activeRoute;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function syncAssistantLanguage(language) {
  const labels = language === "as"
    ? {
        button:"AIক সোধক",
        title:"আঁচনি সহায়ক",
        demo:"বিনামূলীয়া ডেমো সহায়ক",
        disclaimer:"ব্ৰাউজাৰ-ভিত্তিক ডেমো: API চাবি বা একাউণ্ট দৰকাৰ নাই। ই যোগ্যতা সিদ্ধান্ত নকৰে।",
        student:"শিক্ষার্থী আঁচনি",
        documents:"আৱশ্যক নথিপত্ৰ",
        eligibility:"যোগ্যতা ব্যাখ্যা কৰক",
        placeholder:"আঁচনিৰ বিষয়ে সোধক…"
      }
    : language === "hi"
      ? {
          button:"AI से पूछें",
          title:"योजना सहायक",
          demo:"नि:शुल्क डेमो सहायक",
          disclaimer:"केवल ब्राउज़र डेमो: API कुंजी या खाते की आवश्यकता नहीं। यह पात्रता नहीं तय करता।",
          student:"छात्र योजनाएँ",
          documents:"आवश्यक दस्तावेज़",
          eligibility:"पात्रता बताएँ",
          placeholder:"योजना के बारे में पूछें…"
        }
      : {
          button:"Ask AI",
          title:"Scheme assistant",
          demo:"Free demo assistant",
          disclaimer:"Browser-only demo: no API key or account needed. It does not decide eligibility.",
          student:"Student schemes",
          documents:"Required documents",
          eligibility:"Explain eligibility",
          placeholder:"Ask about a scheme…"
        };

  const buttonLabel = $(".assistant-fab-label");
  if (buttonLabel) buttonLabel.textContent = labels.button;
  const title = $(".assistant-head h2");
  if (title) title.textContent = labels.title;
  const demo = $(".assistant-kicker");
  if (demo) demo.textContent = labels.demo;
  const disclaimer = $(".assistant-disclaimer");
  if (disclaimer) disclaimer.textContent = labels.disclaimer;
  const prompts = document.querySelectorAll("[data-question]");
  if (prompts[0]) prompts[0].textContent = labels.student;
  if (prompts[1]) prompts[1].textContent = labels.documents;
  if (prompts[2]) prompts[2].textContent = labels.eligibility;
  const input = $("#chat-input");
  if (input) input.placeholder = labels.placeholder;
}

function applyLanguage() {
  const language = getLanguage();
  const languageMap = {...(translations[language] || {}), ...(contentTranslations[language] || {})};
  document.documentElement.lang = language === "অসমীয়া" ? "as" : language === "हिंदी" ? "hi" : language;
  const languageSelect = $("#language-select");
  if (languageSelect) languageSelect.value = language === "as" ? "অসমীয়া" : language === "hi" ? "हिंदी" : "English";

  if (language !== "en") {
    const entries = Object.entries(languageMap).sort((a,b)=>b[0].length-a[0].length);
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node=walk.nextNode())) nodes.push(node);
    nodes.forEach(textNode=>{
      let text=textNode.nodeValue;
      entries.forEach(([source,target])=>{ if (text.includes(source)) text=text.split(source).join(target); });
      textNode.nodeValue=text;
    });
    document.querySelectorAll("input[placeholder], [aria-label]").forEach(el=>{
      if (el.placeholder) entries.forEach(([source,target])=>{ el.placeholder=el.placeholder.split(source).join(target); });
      if (el.getAttribute("aria-label")) {
        let label=el.getAttribute("aria-label");
        entries.forEach(([source,target])=>{ label=label.split(source).join(target); });
        el.setAttribute("aria-label",label);
      }
    });
  }
  syncNavigationLanguage(language);
  syncAssistantLanguage(language);
}

const $ = (selector, scope=document) => scope.querySelector(selector);
const main = $("#main-content");
const storage = {
  get: (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set: (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { toast("Browser storage is unavailable"); } }
};
let profile = storage.get("sf-profile", null);
let saved = storage.get("sf-saved", []);
let progress = storage.get("sf-progress", {});

const progressStatuses = ["Preparing Documents", "Ready to Apply", "Submitted on Official Portal"];

function getTheme() {
  try { return localStorage.getItem("sf-theme") === "dark" ? "dark" : "light"; } catch { return "light"; }
}

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  const toggle = $("#theme-toggle");
  if (toggle) {
    toggle.classList.toggle("is-dark", dark);
    toggle.setAttribute("aria-label", dark ? "Switch to day mode" : "Switch to night mode");
    toggle.title = dark ? "Day mode" : "Night mode";
  }
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute("content", dark ? "#0d1b25" : "#12344d");
}

$("#theme-toggle").addEventListener("click", () => {
  const next = getTheme() === "dark" ? "light" : "dark";
  try { localStorage.setItem("sf-theme", next); } catch {}
  applyTheme(next);
  toast(next === "dark" ? "Night mode enabled" : "Day mode enabled");
});

function icon(name) {
  const icons = {
    check:"✓", unknown:"?", cross:"×", bookmark:"♧", arrow:"→"
  };
  return icons[name] || "";
}

function escapeHtml(value="") {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}

function statusBadge(status) {
  if (status === "likely_match") return '<span class="status-pill eligible">Eligible</span>';
  if (status === "needs_more_information") return '<span class="status-pill potential">Potentially Eligible</span>';
  return '<span class="status-pill not-eligible">Not Eligible</span>';
}

function saveCount() {
  $("#saved-count").textContent = saved.length;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function toggleSaved(slug) {
  saved = saved.includes(slug) ? saved.filter(item => item !== slug) : [...saved, slug];
  storage.set("sf-saved", saved);
  if (saved.includes(slug) && !progress[slug]) {
    progress[slug] = "Preparing Documents";
    storage.set("sf-progress", progress);
  } else if (!saved.includes(slug)) {
    delete progress[slug];
    storage.set("sf-progress", progress);
  }
  saveCount();
  toast(saved.includes(slug) ? "Scheme saved" : "Scheme removed");
  render();
}

function card(scheme) {
  const isSaved = saved.includes(scheme.slug);
  return `<article class="scheme-card">
    <div class="card-top">
      <span class="badge ${scheme.jurisdiction==="Assam"?"badge-teal":"badge-blue"}">${escapeHtml(scheme.jurisdiction)}</span>
      <span class="badge badge-gold">${escapeHtml(scheme.category)}</span>
    </div>
    <h3>${escapeHtml(scheme.name)}</h3>
    <p>${escapeHtml(scheme.summary)}</p>
    <div class="card-meta"><span>${escapeHtml(scheme.department)}</span><span>Verified ${escapeHtml(scheme.lastVerifiedAt)}</span></div>
    <div class="card-actions">
      <a class="text-link" href="#/schemes/${scheme.slug}">View details →</a>
      <button class="save-button ${isSaved?"saved":""}" type="button" data-save="${scheme.slug}" aria-label="${isSaved?"Remove":"Save"} ${escapeHtml(scheme.name)}">${isSaved?"✓":"＋"}</button>
    </div>
  </article>`;
}

function home() {
  main.innerHTML = `<section class="hero">
    <div class="shell hero-inner">
      <div class="hero-copy-column">
        <p class="mono-kicker">ASSAM-FIRST / PUBLIC BENEFITS DISCOVERY</p>
        <h1>Find the support you may qualify for.</h1>
        <p class="hero-lede">Compare your profile against clear eligibility rules, prepare the right documents, and continue to official government sources.</p>
        <form class="hero-search" id="hero-search" role="search">
          <label class="sr-only" for="hero-search-input">Search by scheme name, category or keyword</label>
          <input id="hero-search-input" type="search" placeholder="Search scheme name, category or keyword" autocomplete="off">
          <button type="submit" aria-label="Search schemes">Search</button>
        </form>
        <div class="hero-actions">
          <a class="button button-primary" href="#/find">Find Schemes for Me <span aria-hidden="true">→</span></a>
          <button class="button button-secondary" id="sample-profile" type="button">Try Sample Profile</button>
        </div>
      </div>
      <aside class="eligibility-ledger" aria-label="Example eligibility summary">
        <div class="ledger-heading"><span>Example profile</span><span class="mono">SF / 01</span></div>
        <dl>
          <div><dt>Residence</dt><dd>Assam</dd></div>
          <div><dt>Age</dt><dd>22</dd></div>
          <div><dt>Education</dt><dd>Undergraduate</dd></div>
          <div><dt>Income band</dt><dd>Below ₹2.5 lakh</dd></div>
        </dl>
        <div class="ledger-status"><span class="status-dot"></span><div><strong>Rule-based evaluation</strong><small>3 of 3 recorded conditions checked</small></div></div>
        <p class="ledger-disclaimer">Illustrative data only. Official departments make final decisions.</p>
      </aside>
    </div>
  </section>
  <section class="stats-strip" aria-label="SchemeFinder overview">
    <div class="shell stats-grid">
      <div><strong class="mono">10</strong><span>Curated records</span></div>
      <div><strong class="mono">3</strong><span>Clear match states</span></div>
      <div><strong class="mono">Assam</strong><span>First in every result</span></div>
      <div><strong class="mono">Local</strong><span>Profile &amp; checklist storage</span></div>
    </div>
  </section>
  <section class="editorial-section"><div class="shell">
    <div class="section-heading-row"><div><p class="mono-kicker">EXPLORE THE DIRECTORY</p><h2>Browse by category</h2></div><a class="text-link" href="#/schemes">View all schemes →</a></div>
    <div class="category-editorial">
      ${[
        ["Scholarship","Education costs and student support"],
        ["Skill development","Training and employability"],
        ["Entrepreneurship","Enterprise and artisan support"],
        ["Health & nutrition","Maternal, child and community care"],
        ["Women & children","Family and caregiver programmes"],
        ["Agriculture","Farming and rural livelihoods"],
        ["Housing","Shelter and household support"],
        ["Disability","Accessibility and assistance"]
      ].map((item,index)=>`<button type="button" class="category-row" data-category="${escapeHtml(item[0])}">
        <span class="mono category-index">${String(index+1).padStart(2,"0")}</span><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span><span aria-hidden="true">→</span>
      </button>`).join("")}
    </div>
  </div></section>
  <section class="how-section" id="how-it-works"><div class="shell">
    <div class="section-heading-row"><div><p class="mono-kicker">HOW IT WORKS</p><h2>Three clear steps</h2></div></div>
    <div class="how-grid">
      <article><span class="mono">01</span><h3>Share your profile</h3><p>Answer only the questions needed for scheme discovery. Data stays in this browser.</p></article>
      <article><span class="mono">02</span><h3>Review rule matches</h3><p>See which conditions meet, need confirmation, or conflict with your profile.</p></article>
      <article><span class="mono">03</span><h3>Prepare and apply</h3><p>Use a persistent checklist, then open the official programme or application source.</p></article>
    </div>
  </div></section>
  <section class="clarity-section"><div class="shell clarity-grid">
    <div><p class="mono-kicker">BUILT FOR CLARITY</p><h2>Transparent by design.</h2></div>
    <div><p>SchemeFinder does not approve applications or predict benefit amounts. It turns curated scheme records into readable, condition-by-condition explanations.</p><div class="clarity-meta"><span><strong>Structured</strong><small>Rules, not AI decisions</small></span><span><strong>Source-linked</strong><small>Official departments</small></span><span><strong>Local-first</strong><small>No profile upload</small></span></div></div>
  </div></section>`;
  $("#hero-search").addEventListener("submit", event => {
    event.preventDefault();
    sessionStorage.setItem("sf-search", $("#hero-search-input").value);
    location.hash = "#/schemes";
  });
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    sessionStorage.setItem("sf-category", button.dataset.category);
    location.hash = "#/schemes";
  }));
  document.querySelectorAll("[data-jurisdiction]").forEach(button => button.addEventListener("click", () => {
    sessionStorage.setItem("sf-jurisdiction", button.dataset.jurisdiction);
    location.hash = "#/schemes";
  }));
  $("#sample-profile").addEventListener("click", () => {
    profile = {state:"Assam", age:22, education:"Undergraduate", employment:"Student", incomeBand:"Below ₹2.5 lakh", socialCategory:"ST", community:"None", communityRole:"Not applicable"};
    storage.set("sf-profile", profile);
    location.hash = "#/results";
  });
}

function find() {
  const p = profile || {};
  main.innerHTML = `<div class="page-head"><div class="shell"><span class="eyebrow">Personalised matching</span><h1>Tell us a little about you</h1><p>Only the details needed for scheme discovery. Stored on this device.</p></div></div>
  <div class="shell content"><div class="stepper" aria-label="Profile progress"><span class="step active"></span><span class="step active"></span><span class="step"></span></div>
  <div class="form-layout"><form class="form-card" id="profile-form" novalidate>
    <h2>Your profile</h2><p class="profile-summary">Use approximate answers if you are not sure; “Check a few details” will keep uncertain conditions visible.</p>
    <div class="form-grid">
      ${stateField(p.state||"Assam")}
      ${numberField("age","Age","age",p.age||"",16,100)}
      ${selectField("education","Education level","education",["Secondary school","Senior secondary","Diploma","Undergraduate","Postgraduate","Other"],p.education||"")}
      ${selectField("employment","Current situation","employment",["Student","Seeking work","Employed","Entrepreneur","Self-employed","Not working"],p.employment||"")}
      ${selectField("incomeBand","Annual family income","incomeBand",["Below ₹2.5 lakh","₹2.5–₹5 lakh","Above ₹5 lakh","Prefer not to say"],p.incomeBand||"")}
      ${selectField("socialCategory","Social category","socialCategory",["General","SC","ST","OBC","Prefer not to say"],p.socialCategory||"")}
      ${selectField("community","Community, if applicable","community",["None","Muslim","Christian","Sikh","Buddhist","Jain","Parsi","Prefer not to say"],p.community||"None")}
      ${selectField("communityRole","Maternal or child role","communityRole",["Not applicable","Pregnant or breastfeeding","Parent or guardian","Anganwadi worker"],p.communityRole||"Not applicable")}
    </div>
    <div class="state-coverage-banner" id="state-coverage-banner" role="note" ${p.state && p.state !== "Assam" ? "" : "hidden"}>Showing nationwide Central Government schemes. State-specific rules are currently verified for Assam (pilot region).</div>
    <p class="form-error" id="form-error" role="alert"></p>
    <div class="hero-actions"><button class="button button-primary" type="submit">Find my schemes →</button><button class="button button-secondary" type="button" id="clear-profile">Clear my profile</button></div>
  </form><aside class="side-card"><span class="mini-label">Why this helps</span><p class="profile-summary">A small profile produces a clearer match. Rules are deterministic; the assistant cannot change eligibility.</p><div class="privacy-note"><strong>Privacy by design</strong><br>Location is only requested when you tap “Detect my state” and is not stored. Do not enter Aadhaar, bank, OTP or document details.</div></aside></div></div>`;
  $("#profile-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    profile = Object.fromEntries(data.entries());
    profile.age = profile.age ? Number(profile.age) : undefined;
    if (!profile.age || profile.age < 16 || profile.age > 100) {
      $("#form-error").textContent = "Enter a valid age between 16 and 100.";
      $("#age").focus();
      return;
    }
    storage.set("sf-profile", profile);
    location.hash = "#/results";
  });
  $("#clear-profile").addEventListener("click", () => {
    localStorage.removeItem("sf-profile");
    profile = null;
    eventTargetReset();
    toast("Profile cleared");
  });
  $("#detect-state").addEventListener("click", detectState);
  $("#state").addEventListener("change", () => updateStateCoverageBanner());
}

function detectState() {
  const button = $("#detect-state");
  const status = $("#detect-state-status");
  if (!navigator.geolocation) {
    status.textContent = "Location detection is not supported by this browser.";
    return;
  }

  button.disabled = true;
  button.textContent = "Detecting…";
  status.textContent = "Waiting for location permission.";

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const likelyAssam = latitude >= 24.0 && latitude <= 28.2 && longitude >= 89.7 && longitude <= 96.0;
    $("#state").value = likelyAssam ? "Assam" : "Other";
    updateStateCoverageBanner();
    status.textContent = likelyAssam
      ? "Location is within the approximate Assam area. Please confirm."
      : "Location is outside the approximate Assam area. Please confirm your state.";
    button.disabled = false;
    button.textContent = "Detect my state";
  }, error => {
    button.disabled = false;
    button.textContent = "Detect my state";
    status.textContent = error.code === error.PERMISSION_DENIED
      ? "Location permission was declined. Please choose your state manually."
      : "Location is unavailable. Please choose your state manually.";
  }, { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 });
}

function eventTargetReset() {
  $("#profile-form").reset();
  $("#form-error").textContent = "";
  updateStateCoverageBanner();
}

function numberField(id,label,name,value,min,max) {
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" name="${name}" type="number" min="${min}" max="${max}" value="${value}" placeholder="Enter age" required></div>`;
}
function selectField(id,label,name,options,value) {
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}" name="${name}">${options.map(option=>`<option${option===value?" selected":""}>${escapeHtml(option)}</option>`).join("")}</select></div>`;
}

function stateField(value) {
  return `<div class="field"><div class="field-label-row"><label for="state">State</label><button class="detect-state-button" id="detect-state" type="button">Detect my state</button></div><select id="state" name="state"><option${value==="Assam"?" selected":""} value="Assam">Assam</option><option${value==="Other"?" selected":""} value="Other">Other State / UT (Central Schemes)</option></select><span class="detect-state-status" id="detect-state-status" role="status"></span></div>`;
}

function updateStateCoverageBanner() {
  const banner = $("#state-coverage-banner");
  if (banner) banner.hidden = $("#state").value === "Assam";
}

function stateCoverageBanner(profileValue) {
  return profileValue && profileValue !== "Assam"
    ? `<div class="state-coverage-banner" role="note">Showing nationwide Central Government schemes. State-specific rules are currently verified for Assam (pilot region).</div>`
    : "";
}

function results() {
  if (!profile) {
    main.innerHTML = `<div class="page-head"><div class="shell"><h1>Your matched schemes</h1></div></div><div class="shell content"><div class="empty-state"><h2>Create a profile to begin</h2><p>We use simple rules to show why a scheme may or may not fit.</p><a class="button button-primary" href="#/find">Create profile</a></div>${myschemeHandoff()}</div>`;
    return;
  }
  const evaluated = schemes.map(scheme => ({scheme, match:evaluateScheme(profile,scheme)}));
  const matches = evaluated.sort((a, b) => {
    const statusRank = {
      likely_match: 0,
      needs_more_information: 1,
      unlikely_match: 2
    };
    const statusDifference = statusRank[a.match.status] - statusRank[b.match.status];
    if (statusDifference !== 0) return statusDifference;

    const jurisdictionRank = jurisdiction => jurisdiction === "Assam" ? 0 : 1;
    const jurisdictionDifference = jurisdictionRank(a.scheme.jurisdiction) - jurisdictionRank(b.scheme.jurisdiction);
    if (jurisdictionDifference !== 0) return jurisdictionDifference;

    return a.scheme.name.localeCompare(b.scheme.name);
  });
  main.innerHTML = `<div class="page-head"><div class="shell"><span class="eyebrow">Your results</span><h1>We found ${matches.filter(x=>x.match.status!=="unlikely_match").length} possible matches</h1><p>Based on the profile saved on this device. Final eligibility is decided by the competent department.</p></div></div>
  <div class="shell content">${stateCoverageBanner(profile.state)}<div class="results-layout"><aside class="filter-card"><h3>Match status</h3>
    <label class="filter-option"><input type="checkbox" checked data-status="likely_match"> Likely match</label>
    <label class="filter-option"><input type="checkbox" checked data-status="needs_more_information"> Check a few details</label>
    <label class="filter-option"><input type="checkbox" checked data-status="unlikely_match"> Does not appear to match</label>
  </aside><div><p class="result-count">${matches.length} schemes evaluated</p><div class="result-list" id="result-list">${matches.map((item,index)=>resultCard(item,index)).join("")}</div>${myschemeHandoff()}</div></div></div>`;
  document.queryAll = document.querySelectorAll;
  $("#result-list").addEventListener("change", () => {
    const active = [...document.querySelectorAll("[data-status]:checked")].map(el=>el.dataset.status);
    [...$(".result-list").children].forEach(card => card.hidden = !active.includes(card.dataset.status));
  });
}

function myschemeHandoff() {
  return `<aside class="myscheme-handoff" aria-label="Explore more government schemes">
    <div>
      <span class="badge badge-blue">Official national discovery</span>
      <h2>Looking for more schemes?</h2>
      <p>SchemeFinder gives you fast, explainable Assam-first matches. Continue to myScheme for a broader Central and State government scheme catalogue.</p>
    </div>
    <a class="button button-primary" href="https://www.myscheme.gov.in/find-scheme" target="_blank" rel="noopener noreferrer">
      Explore more Central &amp; State schemes on myScheme.gov.in <span aria-hidden="true">↗</span>
    </a>
  </aside>`;
}

function stateMatchedBadge(scheme) {
  if (profile?.state && profile.state !== "Other" && scheme.jurisdiction === profile.state) {
    return `<span class="badge badge-your-state">For Your State · ${escapeHtml(scheme.jurisdiction)}</span>`;
  }
  return "";
}

function resultCard({scheme,match}, index) {
  const met = match.results.filter(r=>r.status==="met").length;
  const unknown = match.results.filter(r=>r.status==="unknown").length;
  const highlightTopStateMatch = index === 0 && match.status === "likely_match"
    && profile?.state && profile.state !== "Other" && scheme.jurisdiction === profile.state;
  return `<article class="result-card${highlightTopStateMatch?" top-state-match":""}" data-status="${match.status}">
    <div><div class="result-badges">${statusBadge(match.status)}${stateMatchedBadge(scheme)}</div><h3>${escapeHtml(scheme.name)}</h3><p>${escapeHtml(scheme.summary)}</p><div class="status-line"><strong>${met}/${match.results.length}</strong> conditions met ${unknown ? ` · ${unknown} need confirmation`: ""}</div></div>
    <a class="button button-secondary button-small" href="#/schemes/${scheme.slug}">View details</a>
  </article>`;
}

function catalogue() {
  main.innerHTML = `<div class="page-head"><div class="shell"><span class="eyebrow">Scheme directory</span><h1>Browse schemes</h1><p>Search curated Assam-first records with official source links.</p></div></div>
  <div class="shell content"><div class="catalogue-toolbar"><input id="scheme-search" type="search" placeholder="Search name, category or benefit…" aria-label="Search schemes"><select id="category-filter" aria-label="Filter by category"><option value="">All categories</option>${[...new Set(schemes.map(s=>s.category))].sort().map(v=>`<option>${escapeHtml(v)}</option>`).join("")}</select><select id="jurisdiction-filter" aria-label="Filter by jurisdiction"><option value="">All jurisdictions</option><option>Assam</option><option>Central</option></select></div><p class="result-count" id="catalogue-count"></p><div class="scheme-grid" id="scheme-grid"></div>${myschemeHandoff()}</div>`;
  const initialSearch = sessionStorage.getItem("sf-search") || "";
  const initialCategory = sessionStorage.getItem("sf-category") || "";
  const initialJurisdiction = sessionStorage.getItem("sf-jurisdiction") || "";
  $("#scheme-search").value = initialSearch;
  $("#category-filter").value = initialCategory;
  $("#jurisdiction-filter").value = initialJurisdiction;
  sessionStorage.removeItem("sf-search");
  sessionStorage.removeItem("sf-category");
  sessionStorage.removeItem("sf-jurisdiction");
  const apply = () => {
    const query = $("#scheme-search").value.trim().toLowerCase();
    const category = $("#category-filter").value;
    const jurisdiction = $("#jurisdiction-filter").value;
    const terms = query.split(/\s+/).filter(Boolean);
    const filtered = schemes.filter(s => {
      const searchable = [s.name, s.summary, s.category, s.department, ...s.tags].join(" ").toLowerCase();
      return (!query || terms.every(term => searchable.includes(term)))
        && (!category || s.category===category)
        && (!jurisdiction || s.jurisdiction===jurisdiction);
    });
    $("#catalogue-count").textContent = `${filtered.length} schemes`;
    $("#scheme-grid").innerHTML = filtered.length ? filtered.map(card).join("") : `<div class="empty-state" style="grid-column:1/-1"><h2>No matching schemes</h2><p>Try a broader search or clear a filter.</p></div>`;
  };
  ["scheme-search","category-filter","jurisdiction-filter"].forEach(id=>$("#"+id).addEventListener(id==="scheme-search"?"input":"change",apply));
  apply();
}

function profileValueForRule(rule) {
  if (rule.manualReview) return "Verified during official application";
  if (!profile) return "Not provided";
  const value = profile[rule.field];
  return value === undefined || value === null || value === "" ? "Not provided" : String(value);
}

function detailStatusBadge(status) {
  if (status === "likely_match") return '<span class="status-pill eligible detail-status-badge">Eligible</span>';
  if (status === "needs_more_information") return '<span class="status-pill potential detail-status-badge">Potentially Eligible</span>';
  if (status === "unlikely_match") return '<span class="status-pill not-eligible detail-status-badge">Not Eligible</span>';
  return '<span class="status-pill potential detail-status-badge">Potentially Eligible</span>';
}

function benefitMarkup(benefit) {
  const parts = String(benefit).split(":");
  if (parts.length < 2) return `<strong>${escapeHtml(benefit)}</strong>`;
  return `<strong>${escapeHtml(parts.shift())}:</strong> ${escapeHtml(parts.join(":").trim())}`;
}

function detail(slug) {
  const scheme = schemes.find(s=>s.slug===slug);
  if (!scheme) { main.innerHTML = `<div class="shell content"><div class="empty-state"><h1>Scheme not found</h1><a class="button button-primary" href="#/schemes">Browse schemes</a></div></div>`; return; }
  const evaluation = profile ? evaluateScheme(profile,scheme) : null;
  const checklistKey = `sf-checklist-${scheme.slug}`;
  let checklist = storage.get(checklistKey, {});
  const completed = scheme.documents.filter((d,i)=>checklist[i]).length;
  const metCount = evaluation ? evaluation.results.filter(r=>r.status==="met").length : 0;
  const ruleCount = scheme.eligibilityRules.length;
  const officialUrl = scheme.applicationUrl || scheme.officialSourceUrl;
  const evaluationDate = new Intl.DateTimeFormat("en-IN", { day:"numeric", month:"long", year:"numeric" }).format(new Date());
  const backHref = profile ? "#/results" : "#/schemes";
  const backLabel = profile ? "Back to Results" : "Back to Catalogue";
  main.innerHTML = `<nav class="detail-breadcrumb shell" aria-label="Breadcrumb"><a class="text-link" href="${backHref}">← ${backLabel}</a><span aria-hidden="true">/</span><span>${escapeHtml(scheme.name)}</span></nav>
  <div class="shell detail-content"><div class="detail-layout"><div class="detail-main">
    <section class="detail-hero">
      <div class="detail-badges"><span class="badge badge-blue">${escapeHtml(scheme.jurisdiction)}</span><span class="badge badge-gold">${escapeHtml(scheme.category)}</span>${stateMatchedBadge(scheme)}</div>
      <h1>${escapeHtml(scheme.name)}</h1>
      <p class="detail-department">${escapeHtml(scheme.department)}</p>
      <p class="detail-summary">${escapeHtml(scheme.summary)}</p>
    </section>
    <section class="detail-section benefits-section">
      <h2>Benefits &amp; Assistance Provided</h2>
      <div class="benefit-list">${scheme.benefits.map(benefit=>`<div class="benefit-row"><span class="benefit-check" aria-hidden="true">✓</span><p>${benefitMarkup(benefit)}</p></div>`).join("")}</div>
    </section>
    <section class="detail-section eligibility-section">
      <div class="detail-section-head"><h2>Eligibility Analysis</h2><span class="evaluation-date">Evaluated ${evaluationDate}</span></div>
      ${evaluation ? `<div class="rule-analysis">${evaluation.results.map((result,index)=>{
        const rule=scheme.eligibilityRules[index];
        const statusClass=result.status==="met"?"rule-met":result.status==="not_met"?"rule-not-met":"rule-unknown";
        const statusIcon=result.status==="met"?"✓":result.status==="not_met"?"×":"?";
        const statusLabel=result.status==="met"?"Meets":result.status==="not_met"?"Not Met":"Verify / Unknown";
        return `<article class="rule-card ${statusClass}">
          <div class="rule-main"><span class="rule-status-icon" aria-hidden="true">${statusIcon}</span><div><strong>${escapeHtml(rule.ruleTitle || rule.explanation)}</strong><span class="rule-profile-value">Your profile: ${escapeHtml(profileValueForRule(rule))}</span></div></div>
          <span class="rule-status-pill ${statusClass}">${statusLabel}</span>
        </article>`;
      }).join("")}</div>` : `<div class="rule-analysis-empty"><p><strong>Profile not created</strong><br><span>Complete your profile to see condition-by-condition results.</span></p><a class="text-link" href="#/find">Create profile →</a></div>`}
    </section>
    <section class="detail-section" id="document-checklist">
      <div class="detail-section-head"><h2>Document Checklist</h2><span class="evaluation-date">${completed}/${scheme.documents.length} Ready</span></div>
      <div class="checklist-progress" role="progressbar" aria-label="Document readiness" aria-valuemin="0" aria-valuemax="${scheme.documents.length}" aria-valuenow="${completed}">
        <span class="checklist-progress-fill" style="width:${scheme.documents.length ? (completed/scheme.documents.length)*100 : 0}%"></span>
      </div>
      <div class="checklist">${scheme.documents.map((d,i)=>`<label><input type="checkbox" data-document="${i}" ${checklist[i]?"checked":""}><span><strong>${escapeHtml(d.name)}</strong>${d.required?" · Required": " · Optional"}${d.note?`<br><small>${escapeHtml(d.note)}</small>`:""}</span></label>`).join("")}</div>
    </section>
    <section class="detail-section application-process">
      <h2>Application Process &amp; Sources</h2>
      <ol class="steps-list">${scheme.applicationSteps.map(s=>`<li>${escapeHtml(s)}</li>`).join("")}</ol>
      <div class="detail-source-meta"><span><strong>Source Reference:</strong> ${escapeHtml(scheme.department)}</span><span><strong>Last verified:</strong> ${escapeHtml(scheme.lastVerifiedAt)}</span></div>
    </section>
  </div>
  <aside class="detail-side"><div class="detail-summary-card">
    ${detailStatusBadge(evaluation?.status)}
    <p class="rule-confirmation-count"><strong>${metCount} of ${ruleCount} rules confirmed</strong></p>
    <div class="detail-side-actions">
      <a class="button button-primary" href="${escapeHtml(officialUrl)}" target="_blank" rel="noopener noreferrer">Go to Official Portal <span aria-hidden="true">↗</span></a>
      <button class="button button-secondary" id="prepare-documents" type="button">Prepare Documents (${completed}/${scheme.documents.length} Ready)</button>
      <button class="assistant-text-button" id="ask-scheme-assistant" type="button">Ask Assistant About This Scheme</button>
    </div>
    <div class="detail-verification-note"><strong>Verification note</strong><p>${escapeHtml(scheme.verificationNote)}</p><span>Last verified: ${escapeHtml(scheme.lastVerifiedAt)}</span></div>
  </div></aside></div></div>`;
  $(".checklist").addEventListener("change", event => {
    if (!event.target.matches("[data-document]")) return;
    event.target.classList.remove("is-toggled");
    void event.target.offsetWidth;
    event.target.classList.add("is-toggled");
    event.target.addEventListener("animationend", () => event.target.classList.remove("is-toggled"), { once:true });
    checklist[event.target.dataset.document] = event.target.checked;
    storage.set(checklistKey, checklist);
    const count = scheme.documents.filter((d,i)=>checklist[i]).length;
    $("#prepare-documents").textContent=`Prepare Documents (${count}/${scheme.documents.length} Ready)`;
    const readyCount=$("#document-checklist .evaluation-date");
    if (readyCount) readyCount.textContent=`${count}/${scheme.documents.length} Ready`;
    const progressBar=$("#document-checklist .checklist-progress");
    const progressFill=$("#document-checklist .checklist-progress-fill");
    if (progressBar) progressBar.setAttribute("aria-valuenow",String(count));
    if (progressFill) progressFill.style.width=`${scheme.documents.length ? (count/scheme.documents.length)*100 : 0}%`;
  });
  $("#prepare-documents").addEventListener("click", () => {
    $("#document-checklist").scrollIntoView({behavior:"smooth",block:"start"});
  });
  $("#ask-scheme-assistant").addEventListener("click", () => {
    $("#assistant-panel").classList.add("open");
    $("#assistant-panel").setAttribute("aria-hidden","false");
    $("#chat-input").value=`Please explain my eligibility and next steps for ${scheme.name}.`;
    $("#chat-input").focus();
  });
}

function savedPage() {
  const items = schemes.filter(s=>saved.includes(s.slug));
  const counts = progressStatuses.map(status => items.filter(scheme => progress[scheme.slug] === status).length);
  main.innerHTML = `<div class="page-head"><div class="shell"><span class="eyebrow">Your personal tracker</span><h1>Saved schemes</h1><p>Personal progress only—not an official application status.</p></div></div>
  <div class="shell content"><div class="progress-dashboard" aria-label="Personal application progress">
    ${progressStatuses.map((status,index)=>`<div><strong>${counts[index]}</strong><span>${escapeHtml(status)}</span></div>`).join("")}
  </div>
  ${items.length?`<div class="saved-progress-grid">${items.map(savedProgressCard).join("")}</div>`:`<div class="empty-state"><h2>No saved schemes yet</h2><p>Browse the directory and use the bookmark button to save one.</p><a class="button button-primary" href="#/schemes">Browse schemes</a></div>`}</div>`;
  document.querySelectorAll("[data-progress]").forEach(select => select.addEventListener("change", event => {
    const slug = event.target.dataset.progress;
    progress[slug] = event.target.value;
    storage.set("sf-progress", progress);
    toast("Personal progress updated");
    savedPage();
  }));
  document.querySelectorAll("[data-save]").forEach(button => button.addEventListener("click", () => toggleSaved(button.dataset.save)));
}

function savedProgressCard(scheme) {
  const currentStatus = progress[scheme.slug] || "Preparing Documents";
  return `<article class="saved-progress-card">
    <div class="card-top">
      <span class="badge ${scheme.jurisdiction==="Assam"?"badge-teal":"badge-blue"}">${escapeHtml(scheme.jurisdiction)}</span>
      <button class="save-button saved" type="button" data-save="${scheme.slug}" aria-label="Remove ${escapeHtml(scheme.name)}">✓</button>
    </div>
    <h3>${escapeHtml(scheme.name)}</h3>
    <p>${escapeHtml(scheme.summary)}</p>
    <label class="progress-select-label" for="progress-${scheme.slug}">My progress</label>
    <select class="progress-select" id="progress-${scheme.slug}" data-progress="${scheme.slug}" aria-label="Personal progress for ${escapeHtml(scheme.name)}">
      ${progressStatuses.map(status=>`<option${status===currentStatus?" selected":""}>${escapeHtml(status)}</option>`).join("")}
    </select>
    <a class="text-link" href="#/schemes/${scheme.slug}">View official details →</a>
  </article>`;
}

function about() {
  main.innerHTML = `<div class="page-head"><div class="shell"><p class="mono-kicker">ABOUT SCHEMEFINDER</p><h1>Public information, made easier to review.</h1><p>SchemeFinder is a browser-only demo for transparent government scheme discovery.</p></div></div>
  <div class="shell content"><section class="editorial-about"><div><h2>What this service does</h2><p>It compares a small profile against curated, human-readable scheme records and shows why a condition matches, needs confirmation, or conflicts.</p></div><div><h2>What it does not do</h2><p>It does not guarantee eligibility, application approval, benefit amounts, deadlines or current application status. The competent department makes final decisions.</p></div><div><h2>Sample data disclosure</h2><p>Records are curated demonstration data. Always verify criteria and application windows on the linked official source before taking action.</p></div></section></div>`;
}

function render() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  if (parts[0]==="schemes" && parts[1]) detail(parts[1]);
  else if (parts[0]==="schemes") catalogue();
  else if (parts[0]==="find") find();
  else if (parts[0]==="results") results();
  else if (parts[0]==="saved") savedPage();
  else if (parts[0]==="about") about();
  else if (parts[0]==="how-it-works") {
    home();
    requestAnimationFrame(()=>document.querySelector("#how-it-works")?.scrollIntoView({behavior:"smooth"}));
  }
  else home();
  saveCount();
  applyLanguage();
  window.scrollTo({top:0,behavior:"instant"});
  main.focus({preventScroll:true});
  document.querySelectorAll("[data-save]").forEach(button=>button.addEventListener("click",()=>toggleSaved(button.dataset.save)));
}

function openAssistant() {
  $("#assistant-panel").classList.add("open");
  $("#assistant-panel").setAttribute("aria-hidden","false");
  $("#chat-input").focus();
  if (!$("#chat-messages").children.length) {
    const language = getLanguage();
    const welcome = language === "as"
      ? "নমস্কাৰ! কোনো আঁচনি কেনেকৈ মিলিছে, কি নথিপত্ৰ সাজু কৰিব বা চৰকাৰী উৎসৰ বিষয়ে সোধক। মই কেৱল ডেমো আঁচনি তথ্য ব্যৱহাৰ কৰোঁ।"
      : language === "hi"
        ? "नमस्ते! पूछें कि कौन-सी योजना क्यों मिली, कौन-से दस्तावेज़ तैयार करें या आधिकारिक स्रोतों के बारे में जानें। मैं केवल डेमो योजना डेटा का उपयोग करता हूँ।"
        : "Hello! Ask why a scheme matched, what documents to prepare, or about official sources. I use the demo scheme records only.";
    addBotMessage(welcome);
  }
}
function addBotMessage(html) {
  const el = document.createElement("div");
  el.className="chat-message bot";
  el.innerHTML=html;
  $("#chat-messages").appendChild(el);
  $("#chat-messages").scrollTop=$("#chat-messages").scrollHeight;
}

function assistantAnswer(question) {
  const lower = question.toLowerCase();
  let matches = schemes.filter(s => lower.includes(s.name.toLowerCase()) || s.tags.some(t=>lower.includes(t.toLowerCase())));
  if (!matches.length) matches = schemes.filter(s => lower.split(/\s+/).some(word=>word.length>4 && [s.name,s.summary,s.category,s.department].join(" ").toLowerCase().includes(word)));
  if (/document|prepare|checklist/.test(lower)) {
    const scheme = matches[0] || schemes[0];
    return `For <strong>${escapeHtml(scheme.name)}</strong>, start with: ${scheme.documents.map(d=>escapeHtml(d.name)).join(", ")}. Required items are marked in the detail checklist. <a href="#/schemes/${scheme.slug}" target="_self">View the checklist</a>. This is a demo summary, not a guarantee of required documents.`;
  }
  if (/why|match|eligible/.test(lower)) {
    if (!profile) return `Create a profile first so I can explain condition-by-condition matches. <a href="#/find">Create a profile</a>. Eligibility is never decided by this assistant.`;
    const scheme = matches[0] || schemes.find(s=>s.slug==="post-matric-scholarship");
    const result = evaluateScheme(profile,scheme);
    const count = result.results.filter(r=>r.status==="met").length;
    return `For <strong>${escapeHtml(scheme.name)}</strong>, ${count} of ${result.results.length} recorded conditions are met based on your profile. Open <a href="#/schemes/${scheme.slug}">scheme details</a> for the full met, not-met and unknown breakdown. The competent department makes the final decision.`;
  }
  if (matches.length) {
    const scheme = matches[0];
    return `The demo record for <strong>${escapeHtml(scheme.name)}</strong> says: ${escapeHtml(scheme.summary)} Benefits and rules are available in <a href="#/schemes/${scheme.slug}">the scheme details</a>. Official source: <a href="${scheme.officialSourceUrl}" target="_blank" rel="noopener noreferrer">open source ↗</a>.`;
  }
  return `I could not find that in the curated demo records. Try asking about “scholarships”, “skill training”, “documents”, or a scheme name. For the latest answer, use <a href="https://www.myscheme.gov.in/" target="_blank" rel="noopener noreferrer">myScheme official portal ↗</a>.`;
}

$("#assistant-fab").addEventListener("click",openAssistant);
$("#assistant-close").addEventListener("click",()=>{$("#assistant-panel").classList.remove("open");$("#assistant-panel").setAttribute("aria-hidden","true");});
document.querySelectorAll("[data-question]").forEach(button => button.addEventListener("click", () => {
  $("#chat-input").value = button.dataset.question;
  $("#chat-form").requestSubmit();
}));
$("#chat-form").addEventListener("submit",event=>{
  event.preventDefault();
  const input=$("#chat-input");
  const question=input.value.trim();
  if(!question)return;
  const user=document.createElement("div");user.className="chat-message user";user.textContent=question;$("#chat-messages").appendChild(user);
  input.value="";
  setTimeout(()=>addBotMessage(assistantAnswer(question)),220);
});
$("#saved-nav").addEventListener("click",()=>location.hash="#/saved");
$("#mobile-menu-button").addEventListener("click",()=>{
  const menu=$("#mobile-menu");
  const open=menu.classList.toggle("open");
  $("#mobile-menu-button").setAttribute("aria-expanded",String(open));
  $("#mobile-menu-button").textContent=open?"Close":"Menu";
});
$("#language-select").addEventListener("change",event=>{
  const languageCode=event.target.value==="অসমীয়া"?"as":event.target.value==="हिंदी"?"hi":"en";
  try { localStorage.setItem("sf-language", languageCode); } catch {}
  render();
  toast(languageCode==="as"?"অসমীয়া ভাষা নির্বাচিত":languageCode==="hi"?"हिंदी चुनी गई":"English selected");
});
const updateScrolledHeader = () => {
  $("#topbar")?.classList.toggle("is-scrolled", window.scrollY > 20);
};
window.addEventListener("scroll", updateScrolledHeader, { passive:true });
updateScrolledHeader();
window.addEventListener("hashchange",render);
window.addEventListener("hashchange",updateNavigationState);
applyTheme(getTheme());
render();
