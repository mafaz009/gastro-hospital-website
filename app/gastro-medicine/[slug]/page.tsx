import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gastroMedicineServices } from "@/app/data/gastroMedicine";
import { hospital, siteUrl } from "@/app/data/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const endoscopySlug = "endoscopy-in-lucknow";
const colonoscopySlug = "colonoscopy-in-lucknow";
const fattyLiverSlug = "fatty-liver-treatment-lucknow";
const acidRefluxSlug = "acid-reflux-treatment-lucknow";
const ercpSlug = "ercp-in-lucknow";
const upperEndoscopySlug = "upper-endoscopy-lucknow";
const capsuleEndoscopySlug = "capsule-endoscopy-lucknow";
const eusSlug = "eus-lucknow";
const giBiopsySlug = "gi-biopsy-lucknow";
const motilityStudiesSlug = "motility-studies-lucknow";

const endoscopyFaqs = [
  {
    question: "Is endoscopy painful?",
    answer:
      "No. Endoscopy is usually done under sedation or comfort-focused medical care, so most patients feel little to no discomfort during the procedure.",
  },
  {
    question: "How long does an endoscopy take?",
    answer:
      "Most upper GI endoscopy procedures take around 15-30 minutes, though total visit time may be longer because of preparation and observation after sedation.",
  },
  {
    question: "Do I need to stay in hospital after endoscopy?",
    answer:
      "Most patients are discharged the same day after a short observation period, unless the doctor advises additional monitoring.",
  },
  {
    question: "Is fasting required before endoscopy?",
    answer:
      "Yes. Fasting for 6-8 hours is usually required before upper GI endoscopy. Your doctor will guide you based on your condition and medicines.",
  },
  {
    question: "Can endoscopy detect cancer?",
    answer:
      "Yes. Endoscopy can help detect suspicious areas early and allows biopsy sampling for laboratory confirmation when needed.",
  },
];

const colonoscopyFaqs = [
  {
    question: "How long does colonoscopy take?",
    answer:
      "A colonoscopy usually takes around 20-40 minutes, though preparation and recovery time make the full hospital visit longer.",
  },
  {
    question: "Do I need sedation for colonoscopy?",
    answer:
      "Yes, sedation is commonly used for comfort. Most patients feel little to no pain during the procedure.",
  },
  {
    question: "Can colonoscopy detect cancer?",
    answer:
      "Yes. Colonoscopy is one of the best tests for detecting colon cancer early and can also identify and remove precancerous polyps.",
  },
  {
    question: "When should I get a colonoscopy?",
    answer:
      "Screening is generally recommended after age 45, or earlier if you have symptoms, family history of colon cancer, bleeding, anemia, or bowel habit changes.",
  },
  {
    question: "Is colonoscopy safe?",
    answer:
      "Yes. Colonoscopy is considered safe when performed by experienced doctors with proper monitoring, sterilization, and safety protocols.",
  },
];

const fattyLiverFaqs = [
  {
    question: "Is fatty liver serious?",
    answer:
      "Fatty liver can become serious if ignored. Early-stage fatty liver is often reversible, but untreated disease can progress to NASH, fibrosis, cirrhosis, and liver failure.",
  },
  {
    question: "Can fatty liver be cured?",
    answer:
      "Yes. Fatty liver can often be reversed in early stages with weight loss, healthy diet, regular exercise, alcohol avoidance, and medical supervision.",
  },
  {
    question: "Is fatty liver caused by alcohol only?",
    answer:
      "No. Non-alcoholic fatty liver disease is very common and is linked to obesity, diabetes, insulin resistance, high cholesterol, poor diet, and sedentary lifestyle.",
  },
  {
    question: "How long does fatty liver recovery take?",
    answer:
      "Improvement may be seen within a few months with consistent lifestyle correction and medical care, but recovery time depends on stage, weight, diabetes control, and liver test results.",
  },
  {
    question: "Do I need medication for fatty liver?",
    answer:
      "Medication depends on severity and associated conditions. Your liver specialist may focus on metabolic control, liver monitoring, nutrition, and medicines when clinically needed.",
  },
];

const acidRefluxFaqs = [
  {
    question: "What is the difference between acidity and GERD?",
    answer:
      "Acidity may happen occasionally, while GERD is a chronic reflux condition where acid frequently flows back into the esophagus and causes irritation.",
  },
  {
    question: "When should I see a doctor for acid reflux?",
    answer:
      "You should consult a gastroenterologist if symptoms occur more than twice a week, disturb sleep, cause swallowing difficulty, chest discomfort, vomiting, weight loss, or do not improve with basic care.",
  },
  {
    question: "Can GERD cause chest pain?",
    answer:
      "Yes. GERD can cause burning chest discomfort and may mimic heart-related pain. New, severe, or unexplained chest pain should be evaluated urgently.",
  },
  {
    question: "Is endoscopy required for GERD?",
    answer:
      "Endoscopy may be advised for persistent, severe, recurrent, or complicated GERD symptoms, especially when there is difficulty swallowing, bleeding, weight loss, or long-term reflux.",
  },
  {
    question: "Can GERD be cured permanently?",
    answer:
      "GERD can be controlled effectively with lifestyle changes, medicines, medical supervision, and selected advanced treatments. Many patients get complete symptom relief.",
  },
];

const ercpFaqs = [
  {
    question: "Is ERCP painful?",
    answer:
      "No. ERCP is usually performed under sedation, so most patients feel little to no pain during the procedure.",
  },
  {
    question: "How long does ERCP take?",
    answer:
      "ERCP usually takes around 30-60 minutes, depending on whether stone removal, stent placement, dilation, or drainage is required.",
  },
  {
    question: "Do I need hospital stay after ERCP?",
    answer:
      "Some patients can go home the same day, while others may need short observation or next-day discharge depending on the condition and treatment performed.",
  },
  {
    question: "Can ERCP remove bile duct stones permanently?",
    answer:
      "Yes. ERCP can effectively remove bile duct stones. Your doctor may also evaluate the gallbladder to reduce the risk of future stone-related problems.",
  },
  {
    question: "Is ERCP better than surgery?",
    answer:
      "For many bile duct and pancreatic duct problems, ERCP is preferred because it is minimally invasive and can treat the issue without open surgery.",
  },
];

const upperEndoscopyFaqs = [
  {
    question: "Is upper endoscopy painful?",
    answer:
      "No. Upper endoscopy is usually performed under sedation or comfort-focused care, so most patients feel little to no discomfort.",
  },
  {
    question: "How long does upper endoscopy take?",
    answer:
      "The procedure usually takes around 15-20 minutes, though preparation and observation after sedation can make the hospital visit longer.",
  },
  {
    question: "Do I need hospital admission for upper endoscopy?",
    answer:
      "No. Most patients are discharged the same day after a short observation period, unless the doctor advises additional monitoring.",
  },
  {
    question: "Can upper endoscopy detect cancer?",
    answer:
      "Yes. Upper endoscopy can help detect suspicious areas in the esophagus or stomach early and allows biopsy sampling when needed.",
  },
  {
    question: "Is fasting required before upper endoscopy?",
    answer:
      "Yes. Fasting for 6-8 hours is usually required. Your doctor will also advise if any medicine adjustments are needed.",
  },
];

const capsuleEndoscopyFaqs = [
  {
    question: "Is capsule endoscopy painful?",
    answer:
      "No. Capsule endoscopy is painless. You swallow a pill-sized camera capsule, and no tube or sedation is required.",
  },
  {
    question: "Do I need sedation for capsule endoscopy?",
    answer:
      "No. Sedation is not required because the test is non-invasive and does not involve inserting an endoscope.",
  },
  {
    question: "How long does capsule endoscopy take?",
    answer:
      "The recording usually lasts 6-8 hours while the capsule naturally travels through the digestive system.",
  },
  {
    question: "Can the capsule get stuck?",
    answer:
      "Capsule retention is rare and usually occurs only in selected conditions such as strictures. Patients are evaluated carefully before testing.",
  },
  {
    question: "When will I get capsule endoscopy results?",
    answer:
      "Results are usually available within 1-2 days after the recorded images are reviewed by the gastroenterologist.",
  },
];

const eusFaqs = [
  {
    question: "Is EUS painful?",
    answer:
      "No. EUS is usually performed under sedation, so most patients feel little to no discomfort during the procedure.",
  },
  {
    question: "How long does EUS take?",
    answer:
      "EUS usually takes around 30-60 minutes, depending on whether diagnostic imaging alone or EUS-guided biopsy is required.",
  },
  {
    question: "Can EUS detect cancer?",
    answer:
      "Yes. EUS is one of the most accurate tools for evaluating and staging selected gastrointestinal, pancreatic, and bile duct cancers.",
  },
  {
    question: "Is biopsy possible during EUS?",
    answer:
      "Yes. EUS-guided fine needle aspiration or biopsy can be performed when tissue sampling is clinically required.",
  },
  {
    question: "Do I need hospital stay after EUS?",
    answer:
      "Most patients are discharged the same day after a short recovery period, unless the doctor advises additional observation.",
  },
];

const giBiopsyFaqs = [
  {
    question: "Is GI biopsy painful?",
    answer:
      "No. GI biopsy is usually painless when performed during sedated endoscopy, colonoscopy, or EUS-guided procedures.",
  },
  {
    question: "How long does a GI biopsy take?",
    answer:
      "The biopsy itself usually takes only a few minutes, while the complete endoscopy, colonoscopy, or EUS procedure may take longer.",
  },
  {
    question: "When will I get biopsy results?",
    answer:
      "Reports are typically available within a few days, depending on the pathology testing required.",
  },
  {
    question: "Is biopsy necessary?",
    answer:
      "Biopsy is necessary when tissue confirmation is needed to diagnose infection, inflammation, celiac disease, liver disease, or cancer.",
  },
  {
    question: "Can biopsy detect cancer?",
    answer:
      "Yes. Biopsy is one of the most reliable ways to confirm cancer and guide treatment decisions.",
  },
];

const motilityStudiesFaqs = [
  {
    question: "Is motility testing painful?",
    answer:
      "No. Motility testing may cause mild temporary throat or nasal discomfort, but it is not usually painful.",
  },
  {
    question: "How long does motility testing take?",
    answer:
      "Esophageal manometry usually takes 20-30 minutes, while pH monitoring records reflux activity over 24 hours.",
  },
  {
    question: "Is sedation required for motility studies?",
    answer:
      "No. Sedation is not required because sedation can affect muscle function and test accuracy.",
  },
  {
    question: "Can motility studies diagnose GERD?",
    answer:
      "Yes. pH monitoring and impedance-pH monitoring are among the most accurate tests for evaluating acid and non-acid reflux.",
  },
  {
    question: "Do I need hospital admission?",
    answer:
      "No. Motility studies are usually outpatient tests, and most patients return to normal activities soon after testing.",
  },
];

const endoscopyTypes = [
  {
    title: "Upper GI Endoscopy (EGD)",
    description:
      "Examines the esophagus, stomach, and upper small intestine to evaluate GERD, gastritis, ulcers, swallowing difficulty, upper GI bleeding, and early cancer changes.",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    title: "Colonoscopy",
    description:
      "Evaluates the large intestine and rectum to detect colon polyps, colorectal cancer, inflammatory bowel disease, chronic diarrhea, and bleeding.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    title: "Capsule Endoscopy",
    description:
      "Uses a pill-sized camera to capture small intestine images and investigate hidden bleeding, small bowel tumors, and Crohn's disease.",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    title: "Endoscopic Ultrasound (EUS)",
    description:
      "Combines endoscopy and ultrasound imaging for detailed evaluation of the pancreas, liver, bile ducts, lymph nodes, and nearby structures.",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    title: "ERCP",
    description:
      "A specialized endoscopic procedure used for bile duct stones, blocked bile ducts, pancreatic duct problems, stenting, and infection control.",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
];

const treatmentProcedures = [
  "Polypectomy for removal of colon polyps to reduce cancer risk",
  "GI bleeding control with banding, clipping, or injection therapy",
  "Stricture dilation to open narrowed areas of the digestive tract",
  "Stent placement to keep blocked ducts or narrowed passages open",
  "Feeding tube placement (PEG) for patients unable to eat normally",
];

const symptoms = [
  "Persistent acidity or heartburn",
  "Abdominal pain or bloating",
  "Difficulty swallowing",
  "Blood in vomit or stool",
  "Unexplained weight loss",
  "Chronic diarrhea or constipation",
  "Liver-related symptoms such as jaundice",
];

const whyChoose = [
  "Experienced gastroenterologist - Dr. Juned Ahmad Khan",
  "Advanced HD endoscopy and imaging systems",
  "Safe, hygienic, and patient-friendly environment",
  "Diagnostic and therapeutic procedures under one roof",
  "Sedation options for minimal discomfort",
  "Quick recovery and same-day discharge for most patients",
];

const doctorExpertise = [
  "Upper GI endoscopy and colonoscopy",
  "Liver diseases and hepatology",
  "GI bleeding management",
  "ERCP and advanced procedures",
  "Functional GI disorders such as IBS and GERD",
];

const relatedLinks = [
  {
    label: "Motility Studies in Lucknow",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Capsule Endoscopy in Lucknow",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Acid Reflux Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Gastritis Treatment in Lucknow",
    href: "/gastro-medicine/gastritis-treatment-lucknow",
  },
  {
    label: "Liver Disease Treatment in Lucknow",
    href: "/gastro-medicine/liver-disease-treatment-lucknow",
  },
  {
    label: "Gallbladder Disease Treatment in Lucknow",
    href: "/gastro-medicine/gallbladder-disease-treatment-lucknow",
  },
  {
    label: "Gastro Surgery in Lucknow",
    href: "/gastro-surgery",
  },
];

const colonoscopyWhoNeeds = [
  "Blood in stool or rectal bleeding",
  "Chronic diarrhea or constipation",
  "Persistent abdominal pain",
  "Unexplained weight loss",
  "Iron deficiency anemia",
  "Family history of colon cancer",
  "Age above 45 for routine screening",
];

const colonoscopyConditions = [
  "Colon polyps and precancerous growths",
  "Colorectal cancer",
  "Inflammatory bowel disease (IBD)",
  "Ulcerative colitis and Crohn's disease",
  "Diverticulosis",
  "Causes of GI bleeding",
];

const colonoscopyTypes = [
  {
    title: "Diagnostic Colonoscopy",
    description:
      "Used to identify the cause of symptoms such as rectal bleeding, abdominal pain, anemia, diarrhea, constipation, or bowel habit changes.",
  },
  {
    title: "Screening Colonoscopy",
    description:
      "Performed in healthy individuals, especially after age 45 or earlier in high-risk patients, to detect early signs of colon cancer.",
  },
  {
    title: "Therapeutic Colonoscopy",
    description:
      "Allows treatment during the same procedure, including polyp removal, bleeding control, and biopsy collection.",
  },
];

const colonoscopyRelatedLinks = [
  {
    label: "Motility Studies in Lucknow",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Capsule Endoscopy in Lucknow",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Gallbladder Surgery in Lucknow",
    href: "/gastro-surgery/gallbladder-surgery-lucknow",
  },
  {
    label: "IBS Treatment in Lucknow",
    href: "/gastro-medicine/ibs-treatment-lucknow",
  },
  {
    label: "Gastro Medicine Services",
    href: "/gastro-medicine",
  },
];

const fattyLiverCauses = [
  "Obesity and overweight",
  "Diabetes and insulin resistance",
  "High cholesterol or triglycerides",
  "Sedentary lifestyle",
  "Poor diet with high sugar and fat intake",
  "Alcohol consumption",
];

const fattyLiverSymptoms = [
  "Fatigue",
  "Mild pain in the upper right abdomen",
  "Weakness",
  "Unexplained weight changes",
  "Jaundice in advanced stages",
  "Often no symptoms in early stages",
];

const fattyLiverDiagnostics = [
  "Liver Function Tests (LFTs)",
  "Ultrasound abdomen",
  "FibroScan or liver stiffness testing",
  "CT scan or MRI when needed",
  "Liver biopsy in selected cases",
];

const fattyLiverStages = [
  {
    title: "Simple Fatty Liver",
    description:
      "Fat accumulation in liver cells without significant inflammation. This is the most reversible stage.",
  },
  {
    title: "NASH",
    description:
      "Non-alcoholic steatohepatitis, where fat is associated with liver inflammation and higher risk of progression.",
  },
  {
    title: "Fibrosis",
    description:
      "Scarring begins in the liver. Treatment focuses on stopping progression and protecting remaining liver function.",
  },
  {
    title: "Cirrhosis",
    description:
      "Severe liver scarring that can lead to complications and needs close specialist monitoring.",
  },
];

const fattyLiverTreatments = [
  {
    title: "Lifestyle Modification",
    description:
      "The primary treatment includes 5-10% weight loss, regular exercise, healthy diet, alcohol avoidance, and control of diabetes and cholesterol.",
  },
  {
    title: "Medical Management",
    description:
      "Medicines may be used to improve metabolic health, control diabetes or cholesterol, reduce inflammation, and manage associated conditions.",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Customized diet guidance supports fat reduction, weight management, liver health, and long-term lifestyle correction.",
  },
  {
    title: "Advanced Liver Care",
    description:
      "Severe cases may require cirrhosis management, treatment of complications, or liver transplant evaluation when clinically indicated.",
  },
];

const fattyLiverRelatedLinks = [
  {
    label: "Motility Studies in Lucknow",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Capsule Endoscopy in Lucknow",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Gallbladder Surgery in Lucknow",
    href: "/gastro-surgery/gallbladder-surgery-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Liver Disease Treatment in Lucknow",
    href: "/gastro-medicine/liver-disease-treatment-lucknow",
  },
  {
    label: "Gastro Medicine Services",
    href: "/gastro-medicine",
  },
];

const acidRefluxSymptoms = [
  "Burning sensation in chest or heartburn",
  "Acid taste in the mouth",
  "Regurgitation of food or liquid",
  "Difficulty swallowing",
  "Chronic cough",
  "Sore throat or hoarseness",
  "Bloating and burping",
];

const acidRefluxCauses = [
  "Overeating",
  "Obesity",
  "Spicy or fatty foods",
  "Smoking and alcohol",
  "Stress",
  "Pregnancy",
  "Hiatal hernia",
];

const acidRefluxDiagnostics = [
  "Upper GI endoscopy",
  "pH monitoring or acid level testing",
  "Esophageal manometry",
  "Imaging and lab tests when needed",
];

const acidRefluxTreatments = [
  {
    title: "Lifestyle Changes",
    description:
      "Smaller meals, avoiding late-night eating, maintaining healthy weight, avoiding trigger foods, and elevating the head while sleeping can reduce reflux.",
  },
  {
    title: "Medications",
    description:
      "Antacids, proton pump inhibitors (PPIs), and H2 blockers may be used to reduce acid production and relieve symptoms.",
  },
  {
    title: "Advanced Treatment",
    description:
      "Severe or resistant GERD may require endoscopic therapy or surgical treatment such as fundoplication after specialist evaluation.",
  },
];

const acidRefluxRelatedLinks = [
  {
    label: "Motility Studies in Lucknow",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Capsule Endoscopy in Lucknow",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "Gallbladder Surgery in Lucknow",
    href: "/gastro-surgery/gallbladder-surgery-lucknow",
  },
  {
    label: "Gastritis Treatment in Lucknow",
    href: "/gastro-medicine/gastritis-treatment-lucknow",
  },
  {
    label: "Gastro Medicine Services",
    href: "/gastro-medicine",
  },
];

const ercpConditions = [
  "Bile duct stones (choledocholithiasis)",
  "Blocked bile ducts",
  "Jaundice caused by obstruction",
  "Acute and chronic pancreatitis",
  "Bile duct strictures",
  "Pancreatic duct disorders",
  "Tumors in the bile duct or pancreas",
];

const ercpSymptoms = [
  "Yellowing of skin or eyes",
  "Severe abdominal pain",
  "Fever with jaundice",
  "Persistent vomiting",
  "Dark urine or pale stools",
  "Recurrent pancreatitis",
];

const ercpProcedureSteps = [
  {
    title: "Before ERCP",
    description:
      "Fasting for 6-8 hours, blood tests, imaging review, consent, and specialist evaluation are completed before the procedure.",
  },
  {
    title: "During ERCP",
    description:
      "Under sedation, an endoscope is passed through the mouth to the duodenum. Dye and X-ray imaging help guide stone removal, stenting, dilation, or drainage when needed.",
  },
  {
    title: "After ERCP",
    description:
      "Patients are observed for a few hours. Same-day or next-day discharge is possible depending on the diagnosis, treatment performed, and overall health.",
  },
];

const ercpTreatmentOptions = [
  "Bile duct stone removal",
  "Stent placement for blocked ducts",
  "Duct dilation for strictures",
  "Drainage of infected bile ducts",
  "Pancreatic duct evaluation and treatment",
  "Biopsy or sampling when clinically needed",
];

const ercpRelatedLinks = [
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Gallbladder Surgery in Lucknow",
    href: "/gastro-surgery/gallbladder-surgery-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Gallbladder Disease Treatment",
    href: "/gastro-medicine/gallbladder-disease-treatment-lucknow",
  },
];

const upperEndoscopyConditions = [
  {
    title: "Acid Reflux (GERD)",
    description:
      "Persistent reflux can damage the esophagus and may require upper endoscopy to assess inflammation, ulcers, or complications.",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    title: "Gastritis",
    description:
      "Upper endoscopy helps identify stomach lining inflammation caused by infection, stress, medicines, or other triggers.",
    href: "/gastro-medicine/gastritis-treatment-lucknow",
  },
  {
    title: "Peptic Ulcers",
    description:
      "EGD can detect ulcers in the stomach or duodenum and help evaluate pain, bleeding, and infection-related causes.",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    title: "Difficulty Swallowing",
    description:
      "Upper endoscopy can identify narrowing, inflammation, structural issues, tumors, or other causes of dysphagia.",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    title: "Upper GI Bleeding",
    description:
      "Endoscopy can detect bleeding sources such as ulcers, varices, inflammation, or tumors and may help control bleeding.",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    title: "Cancer Detection",
    description:
      "Biopsy during upper endoscopy supports early detection of esophageal or stomach cancer when suspicious areas are seen.",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
];

const upperEndoscopySymptoms = [
  "Persistent acidity or heartburn",
  "Upper abdominal pain",
  "Difficulty swallowing",
  "Nausea or vomiting",
  "Blood in vomit",
  "Black stools",
  "Unexplained weight loss",
];

const upperEndoscopyProcedureSteps = [
  {
    title: "Before the Procedure",
    description:
      "Fasting for 6-8 hours, medicine review if needed, brief consultation, and consent are completed before EGD.",
  },
  {
    title: "During the Procedure",
    description:
      "Under sedation, a thin flexible endoscope is passed through the mouth to examine the esophagus, stomach, and duodenum.",
  },
  {
    title: "After the Procedure",
    description:
      "Patients are observed briefly. Mild throat discomfort can occur, and most patients go home the same day.",
  },
];

const upperEndoscopyRelatedLinks = [
  {
    label: "Capsule Endoscopy in Lucknow",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "Gastritis Treatment in Lucknow",
    href: "/gastro-medicine/gastritis-treatment-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
];

const capsuleEndoscopyConditions = [
  {
    title: "Obscure Gastrointestinal Bleeding",
    description:
      "Capsule endoscopy can find hidden bleeding sources when upper endoscopy and colonoscopy do not identify the cause.",
  },
  {
    title: "Crohn Disease",
    description:
      "It helps detect inflammation, ulcers, or small intestine changes that may be missed by standard tests.",
  },
  {
    title: "Small Intestine Tumors",
    description:
      "Capsule imaging can support early detection of rare but serious small bowel growths or masses.",
  },
  {
    title: "Celiac Disease",
    description:
      "It may help evaluate small intestine lining damage in selected patients with suspected malabsorption.",
  },
  {
    title: "Chronic Anemia",
    description:
      "Hidden blood loss from the small intestine can contribute to low hemoglobin and unexplained anemia.",
  },
];

const capsuleEndoscopySymptoms = [
  "Unexplained anemia",
  "Chronic abdominal pain",
  "Hidden blood in stool",
  "Persistent diarrhea",
  "Unexplained weight loss",
  "Suspected Crohn disease",
];

const capsuleEndoscopySteps = [
  {
    title: "Before the Procedure",
    description:
      "Fasting for 8-12 hours, medicine review if needed, and doctor consultation are completed before the test.",
  },
  {
    title: "During the Procedure",
    description:
      "You swallow the capsule with water, wear a data recorder device, and continue normal daily activities during recording.",
  },
  {
    title: "After the Procedure",
    description:
      "The capsule passes naturally in stool within 24-48 hours. The doctor reviews the recorded images and explains the findings.",
  },
];

const capsuleEndoscopyRelatedLinks = [
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "IBS Treatment in Lucknow",
    href: "/gastro-medicine/ibs-treatment-lucknow",
  },
];

const eusOrgans = [
  "Pancreas",
  "Liver",
  "Bile ducts",
  "Gallbladder",
  "Esophagus",
  "Stomach",
  "Lymph nodes",
];

const eusConditions = [
  {
    title: "Pancreatic Disorders",
    items: ["Pancreatic tumors", "Chronic pancreatitis", "Pancreatic cysts"],
  },
  {
    title: "Liver Diseases",
    items: ["Liver lesions", "Tumors", "Cirrhosis evaluation"],
  },
  {
    title: "Bile Duct Problems",
    items: ["Blockage or strictures", "Stones or tumors"],
  },
  {
    title: "Gastrointestinal Cancers",
    items: ["Esophageal cancer staging", "Gastric cancer staging", "Pancreatic cancer staging"],
  },
  {
    title: "Lymph Node Evaluation",
    items: ["Cancer spread assessment", "Infection evaluation"],
  },
];

const eusSymptoms = [
  "Unexplained abdominal pain",
  "Jaundice",
  "Suspected pancreatic disease",
  "Unexplained weight loss",
  "Abnormal imaging reports",
  "Persistent digestive symptoms",
];

const eusSteps = [
  {
    title: "Before the Procedure",
    description:
      "Fasting for 6-8 hours, medical evaluation, imaging review, and consent are completed before EUS.",
  },
  {
    title: "During the Procedure",
    description:
      "Under sedation, an endoscope with an ultrasound probe is passed through the mouth to capture detailed internal images.",
  },
  {
    title: "After the Procedure",
    description:
      "Patients recover briefly after sedation. Same-day discharge is common, and mild throat discomfort may occur.",
  },
];

const eusRelatedLinks = [
  {
    label: "Motility Studies in Lucknow",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
  {
    label: "GI Biopsy in Lucknow",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
];

const giBiopsyTypes = [
  {
    title: "Endoscopic Biopsy",
    description:
      "Collected during upper endoscopy from the esophagus, stomach, or duodenum for diagnosis of infection, inflammation, ulcers, or cancer changes.",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    title: "Colonoscopic Biopsy",
    description:
      "Collected during colonoscopy from the colon or rectum to evaluate bleeding, IBD, polyps, tumors, or chronic bowel symptoms.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    title: "EUS-Guided Biopsy (FNA/FNB)",
    description:
      "Used for deeper organs and structures such as the pancreas, liver, bile duct region, and lymph nodes.",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    title: "Liver Biopsy",
    description:
      "Used in selected liver conditions such as fatty liver disease, hepatitis, cirrhosis, or unclear liver abnormalities.",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
];

const giBiopsyConditions = [
  "Stomach, colon, and esophageal cancers",
  "H. pylori infection and selected GI infections",
  "Crohn disease and ulcerative colitis",
  "Fatty liver, hepatitis, and cirrhosis evaluation",
  "Celiac disease and small intestine lining damage",
  "Unexplained inflammation or abnormal endoscopy findings",
];

const giBiopsySymptoms = [
  "Persistent abdominal pain",
  "Unexplained weight loss",
  "Chronic diarrhea",
  "Blood in stool",
  "Difficulty swallowing",
  "Abnormal imaging or endoscopy findings",
];

const giBiopsySteps = [
  {
    title: "Before the Procedure",
    description:
      "Fasting for 6-8 hours may be needed for endoscopy-based biopsy. Blood tests and consultation are advised when clinically required.",
  },
  {
    title: "During the Procedure",
    description:
      "A small tissue sample is collected using specialized instruments during endoscopy, colonoscopy, EUS, or selected liver procedures.",
  },
  {
    title: "After the Procedure",
    description:
      "Patients are observed briefly. Mild discomfort can occur, and most patients resume normal activity soon after doctor advice.",
  },
];

const giBiopsyRelatedLinks = [
  {
    label: "Motility Studies in Lucknow",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
];

const motilityTestTypes = [
  {
    title: "Esophageal Manometry",
    measures: "Muscle contractions, swallowing coordination, and pressure inside the esophagus.",
    diagnoses: ["Achalasia", "Dysphagia", "Esophageal spasms"],
  },
  {
    title: "24-Hour pH Monitoring",
    measures: "Acid exposure in the esophagus over a full day.",
    diagnoses: ["GERD", "Chronic acidity", "Silent reflux"],
  },
  {
    title: "Impedance-pH Monitoring",
    measures: "Acid and non-acid reflux episodes with symptom correlation.",
    diagnoses: ["Refractory GERD", "Reflux-related cough", "Persistent throat symptoms"],
  },
];

const motilityConditions = [
  "GERD and chronic acid reflux disease",
  "Dysphagia or difficulty swallowing",
  "Achalasia",
  "Functional GI disorders",
  "Non-cardiac chest pain",
  "Chronic cough or throat symptoms linked to reflux",
];

const motilitySymptoms = [
  "Difficulty swallowing",
  "Food getting stuck",
  "Chronic acidity not improving with medication",
  "Chest pain not related to heart",
  "Persistent cough or throat irritation",
  "Regurgitation of food",
];

const motilitySteps = [
  {
    title: "Before the Test",
    description:
      "Fasting for 6-8 hours and temporary medicine changes may be advised after consultation with the doctor.",
  },
  {
    title: "During the Test",
    description:
      "A thin tube is inserted through the nose into the esophagus to measure pressure, movement, and swallowing coordination.",
  },
  {
    title: "After the Test",
    description:
      "Patients usually resume normal activities. Results are reviewed by the specialist to plan targeted treatment.",
  },
];

const motilityRelatedLinks = [
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Upper Endoscopy (EGD) in Lucknow",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    label: "EUS in Lucknow",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Gastro Medicine Services",
    href: "/gastro-medicine",
  },
];

export async function generateStaticParams() {
  return gastroMedicineServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = gastroMedicineServices.find((item) => item.slug === slug);

  if (!service) return {};

  if (slug === endoscopySlug) {
    return {
      title: "Endoscopy in Lucknow | Best Gastro Endoscopy | Myra City Hospital",
      description:
        "Looking for endoscopy in Lucknow? Myra City Hospital offers advanced endoscopy, colonoscopy, ERCP and GI care by expert Dr. Juned Ahmad Khan. Book now.",
      keywords: [
        "endoscopy in Lucknow",
        "best endoscopy in Lucknow",
        "upper GI endoscopy Lucknow",
        "gastro endoscopy Lucknow",
        "ERCP in Lucknow",
        "colonoscopy in Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${endoscopySlug}`,
      },
      openGraph: {
        title: "Endoscopy in Lucknow | Myra City Hospital",
        description:
          "Advanced upper GI endoscopy, colonoscopy, ERCP and therapeutic endoscopy care by Dr. Juned Ahmad Khan at Myra City Hospital.",
        url: `${siteUrl}/gastro-medicine/${endoscopySlug}`,
        type: "article",
      },
    };
  }

  if (slug === colonoscopySlug) {
    return {
      title: "Colonoscopy in Lucknow | Best Colonoscopy Test | Myra City Hospital",
      description:
        "Looking for colonoscopy in Lucknow? Myra City Hospital offers safe, painless colonoscopy by expert Dr. Juned Ahmad Khan. Book appointment today.",
      keywords: [
        "colonoscopy in Lucknow",
        "best colonoscopy in Lucknow",
        "colonoscopy test Lucknow",
        "painless colonoscopy Lucknow",
        "colon cancer screening Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${colonoscopySlug}`,
      },
      openGraph: {
        title: "Colonoscopy in Lucknow | Myra City Hospital",
        description:
          "Safe, sedation-assisted colonoscopy for colon cancer screening, polyps, bleeding, IBD, and bowel symptoms by Dr. Juned Ahmad Khan.",
        url: `${siteUrl}/gastro-medicine/${colonoscopySlug}`,
        type: "article",
      },
    };
  }

  if (slug === fattyLiverSlug) {
    return {
      title:
        "Fatty Liver Treatment in Lucknow | Best Liver Specialist | Myra City Hospital",
      description:
        "Looking for fatty liver treatment in Lucknow? Get expert liver care at Myra City Hospital by Dr. Juned Ahmad Khan. Book consultation today.",
      keywords: [
        "fatty liver treatment in Lucknow",
        "best liver specialist in Lucknow",
        "fatty liver doctor Lucknow",
        "NAFLD treatment Lucknow",
        "NASH treatment Lucknow",
        "liver specialist Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${fattyLiverSlug}`,
      },
      openGraph: {
        title: "Fatty Liver Treatment in Lucknow | Myra City Hospital",
        description:
          "Advanced diagnosis, lifestyle guidance, and long-term liver care for fatty liver disease by Dr. Juned Ahmad Khan.",
        url: `${siteUrl}/gastro-medicine/${fattyLiverSlug}`,
        type: "article",
      },
    };
  }

  if (slug === acidRefluxSlug) {
    return {
      title: "Acid Reflux Treatment in Lucknow | GERD Specialist | Myra City Hospital",
      description:
        "Looking for acid reflux or GERD treatment in Lucknow? Get expert care by Dr. Juned Ahmad Khan at Myra City Hospital. Book consultation today.",
      keywords: [
        "acid reflux treatment in Lucknow",
        "GERD treatment in Lucknow",
        "GERD specialist Lucknow",
        "acidity doctor in Lucknow",
        "best gastro doctor in Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${acidRefluxSlug}`,
      },
      openGraph: {
        title: "Acid Reflux Treatment in Lucknow | Myra City Hospital",
        description:
          "Advanced diagnosis and long-term treatment for acidity, GERD, heartburn, reflux, and digestive discomfort by Dr. Juned Ahmad Khan.",
        url: `${siteUrl}/gastro-medicine/${acidRefluxSlug}`,
        type: "article",
      },
    };
  }

  if (slug === ercpSlug) {
    return {
      title: "ERCP in Lucknow | Bile Duct Stone Removal | Myra City Hospital",
      description:
        "Looking for ERCP in Lucknow? Get advanced bile duct and pancreatic treatment by Dr. Juned Ahmad Khan at Myra City Hospital. Book now.",
      keywords: [
        "ERCP in Lucknow",
        "bile duct stone removal Lucknow",
        "pancreatic duct treatment Lucknow",
        "ERCP specialist Lucknow",
        "blocked bile duct treatment Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${ercpSlug}`,
      },
      openGraph: {
        title: "ERCP in Lucknow | Myra City Hospital",
        description:
          "Advanced diagnostic and therapeutic ERCP for bile duct stones, blocked ducts, jaundice, and pancreatic disorders by Dr. Juned Ahmad Khan.",
        url: `${siteUrl}/gastro-medicine/${ercpSlug}`,
        type: "article",
      },
    };
  }

  if (slug === upperEndoscopySlug) {
    return {
      title: "Upper Endoscopy in Lucknow | Best Endoscopy Test | Myra City Hospital",
      description:
        "Looking for upper endoscopy in Lucknow? Get safe and accurate EGD by Dr. Juned Ahmad Khan at Myra City Hospital. Book appointment today.",
      keywords: [
        "upper endoscopy in Lucknow",
        "EGD in Lucknow",
        "best endoscopy test Lucknow",
        "upper GI endoscopy Lucknow",
        "endoscopy for GERD Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${upperEndoscopySlug}`,
      },
      openGraph: {
        title: "Upper Endoscopy in Lucknow | Myra City Hospital",
        description:
          "Safe, sedation-assisted upper GI endoscopy for GERD, gastritis, ulcers, swallowing difficulty, bleeding, and cancer detection.",
        url: `${siteUrl}/gastro-medicine/${upperEndoscopySlug}`,
        type: "article",
      },
    };
  }

  if (slug === capsuleEndoscopySlug) {
    return {
      title: "Capsule Endoscopy in Lucknow | Small Intestine Test | Myra City Hospital",
      description:
        "Looking for capsule endoscopy in Lucknow? Get advanced small intestine diagnosis at Myra City Hospital by Dr. Juned Ahmad Khan. Book now.",
      keywords: [
        "capsule endoscopy in Lucknow",
        "small intestine test Lucknow",
        "pill camera test Lucknow",
        "small bowel endoscopy Lucknow",
        "hidden GI bleeding test Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${capsuleEndoscopySlug}`,
      },
      openGraph: {
        title: "Capsule Endoscopy in Lucknow | Myra City Hospital",
        description:
          "Advanced non-invasive small intestine evaluation for hidden bleeding, Crohn disease, anemia, chronic diarrhea, and unexplained symptoms.",
        url: `${siteUrl}/gastro-medicine/${capsuleEndoscopySlug}`,
        type: "article",
      },
    };
  }

  if (slug === eusSlug) {
    return {
      title: "EUS in Lucknow | Endoscopic Ultrasound Test | Myra City Hospital",
      description:
        "Looking for EUS in Lucknow? Get advanced pancreas, liver & GI diagnosis at Myra City Hospital by Dr. Juned Ahmad Khan. Book consultation today.",
      keywords: [
        "EUS in Lucknow",
        "endoscopic ultrasound Lucknow",
        "pancreas diagnosis Lucknow",
        "liver EUS Lucknow",
        "GI cancer diagnosis Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${eusSlug}`,
      },
      openGraph: {
        title: "EUS in Lucknow | Myra City Hospital",
        description:
          "Advanced Endoscopic Ultrasound for pancreas, liver, bile duct, lymph node, and GI cancer diagnosis by Dr. Juned Ahmad Khan.",
        url: `${siteUrl}/gastro-medicine/${eusSlug}`,
        type: "article",
      },
    };
  }

  if (slug === giBiopsySlug) {
    return {
      title: "GI Biopsy in Lucknow | Endoscopic Biopsy Test | Myra City Hospital",
      description:
        "Looking for GI biopsy in Lucknow? Get accurate diagnosis and early cancer detection at Myra City Hospital by Dr. Juned Ahmad Khan. Book now.",
      keywords: [
        "GI biopsy in Lucknow",
        "endoscopic biopsy test Lucknow",
        "biopsy for stomach cancer Lucknow",
        "colon biopsy Lucknow",
        "EUS guided biopsy Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${giBiopsySlug}`,
      },
      openGraph: {
        title: "GI Biopsy in Lucknow | Myra City Hospital",
        description:
          "Accurate endoscopic, colonoscopic, EUS-guided, and liver biopsy services for diagnosis, cancer detection, infection, and inflammation.",
        url: `${siteUrl}/gastro-medicine/${giBiopsySlug}`,
        type: "article",
      },
    };
  }

  if (slug === motilityStudiesSlug) {
    return {
      title: "Motility Studies in Lucknow | Manometry & pH Test | Myra City Hospital",
      description:
        "Looking for motility studies in Lucknow? Get advanced GERD and swallowing disorder diagnosis at Myra City Hospital by Dr. Juned Ahmad Khan. Book now.",
      keywords: [
        "motility studies in Lucknow",
        "esophageal manometry Lucknow",
        "pH monitoring Lucknow",
        "GERD test Lucknow",
        "swallowing disorder test Lucknow",
        "Dr. Juned Ahmad Khan",
      ],
      alternates: {
        canonical: `/gastro-medicine/${motilityStudiesSlug}`,
      },
      openGraph: {
        title: "Motility Studies in Lucknow | Myra City Hospital",
        description:
          "Advanced esophageal manometry, 24-hour pH monitoring, and impedance-pH testing for GERD, swallowing disorders, and functional GI disease.",
        url: `${siteUrl}/gastro-medicine/${motilityStudiesSlug}`,
        type: "article",
      },
    };
  }

  return {
    title: `${service.title} | Myra City Hospital`,
    description: service.description,
    alternates: {
      canonical: `/gastro-medicine/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Myra City Hospital`,
      description: service.description,
      url: `${siteUrl}/gastro-medicine/${service.slug}`,
      type: "article",
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function EndoscopyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Hepatology", "Endoscopy"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "Endoscopy in Lucknow",
        procedureType: "Diagnostic and therapeutic gastrointestinal endoscopy",
        bodyLocation: "Digestive tract",
        description:
          "Advanced upper GI endoscopy, colonoscopy, ERCP, capsule endoscopy, EUS, and therapeutic endoscopy at Myra City Hospital in Lucknow.",
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${endoscopySlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${endoscopySlug}`,
        name: "Endoscopy in Lucknow | Advanced GI Endoscopy at Myra City Hospital",
        about: {
          "@type": "MedicalProcedure",
          name: "Endoscopy",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Endoscopy in Lucknow",
            item: `${siteUrl}/gastro-medicine/${endoscopySlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: endoscopyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">
                Gastro Medicine
              </Link>
              <span className="mx-2">/</span>
              <span>Endoscopy in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Advanced GI endoscopy at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Endoscopy in Lucknow by Dr. Juned Ahmad Khan
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for endoscopy in Lucknow, Myra City Hospital
              offers safe, advanced, and accurate endoscopic procedures performed
              by experienced specialists using modern endoscopy technology.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Under the expert care of Dr. Juned Ahmad Khan, our gastroenterology
              team provides comprehensive endoscopy services for conditions
              affecting the esophagus, stomach, intestines, liver, and pancreas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950"
              >
                Book Your Endoscopy Appointment
              </Link>
              <Link
                href="/gastro-medicine/colonoscopy-in-lucknow"
                className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300"
              >
                View Colonoscopy Care
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=85"
                alt="Advanced endoscopy consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Open 24 hours for hospital care
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {hospital.address}
              </p>
              <a
                href={hospital.phoneHref}
                className="mt-3 inline-block text-sm font-semibold text-blue-800"
              >
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Advanced HD endoscopy",
            "Sedation options",
            "Diagnostic and therapeutic care",
            "Same-day discharge for most cases",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is endoscopy?"
            title="A minimally invasive way to see the digestive tract clearly"
            description="Endoscopy uses a thin, flexible tube with a camera to examine the inside of the digestive tract. It helps doctors detect abnormalities, take biopsies, and perform selected treatments without open surgery."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              At Myra City Hospital, high-definition endoscopy systems support
              accurate diagnosis, improved patient safety, and better planning
              for digestive symptoms such as acidity, abdominal pain, bleeding,
              swallowing difficulty, bowel changes, jaundice, and unexplained
              weight loss.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Types of endoscopy"
            title="Endoscopy services available at Myra City Hospital"
            description="Our gastroenterology team offers diagnostic and advanced endoscopic procedures based on symptoms, clinical findings, and treatment goals."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {endoscopyTypes.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:ring-blue-200"
              >
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {type.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-blue-800">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Therapeutic endoscopy"
              title="Endoscopy can diagnose and treat in the same pathway"
              description="Endoscopy is not only diagnostic. In many cases, treatment can be performed during the procedure, reducing delay and avoiding major surgery for selected problems."
            />
            <ul className="mt-8 grid gap-3">
              {treatmentProcedures.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="When should you consider endoscopy?"
              description="Early diagnosis through endoscopy can prevent serious complications and help your doctor choose the right treatment plan."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {symptoms.map((item) => (
                <li key={item} className="rounded-lg bg-blue-50 p-4 text-sm font-semibold text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Gastro Medicine Specialist | Endoscopy Expert
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan specializes in diagnostic and therapeutic
              endoscopy, liver diseases, GI bleeding management, and advanced
              gastroenterology care. Patients trust him for accurate diagnosis,
              ethical treatment, and patient-friendly communication.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {doctorExpertise.map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure journey"
            title="Endoscopy procedure: what to expect"
            description="The process is designed to be simple, supervised, and comfortable for patients."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Before the procedure",
                points: [
                  "Fasting for 6-8 hours",
                  "Medication adjustments if required",
                  "Brief consultation and consent",
                ],
              },
              {
                title: "During the procedure",
                points: [
                  "Performed under sedation for comfort",
                  "Usually takes 15-30 minutes",
                  "No pain and minimal discomfort for most patients",
                ],
              },
              {
                title: "After the procedure",
                points: [
                  "Short observation period",
                  "Same-day discharge in most cases",
                  "Temporary mild throat discomfort may occur",
                ],
              },
            ].map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
          {[
            {
              title: "Is endoscopy safe?",
              text: "Yes. Endoscopy is considered safe and routine when performed by experienced specialists with proper sterilization and monitoring protocols.",
            },
            {
              title: "Benefits",
              text: "Endoscopy supports early detection, high diagnostic accuracy, quick treatment planning, minimal recovery time, and biopsy when needed.",
            },
            {
              title: "Cost in Lucknow",
              text: "The cost depends on the type of procedure and complexity. Myra City Hospital focuses on transparent pricing and quality care.",
            },
            {
              title: "Why early endoscopy matters",
              text: "Delaying diagnosis may allow ulcers, internal bleeding, liver damage, or cancer progression to worsen before treatment begins.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <SectionIntro
              eyebrow="Patient testimonials"
              title="Trusted endoscopy care in Lucknow"
              description="Patients choose Myra City Hospital for careful evaluation, clear explanations, and specialist-led endoscopy procedures."
            />
          </div>
          <div className="grid gap-4">
            {[
              "Very smooth endoscopy procedure. Highly recommended doctor.",
              "Best hospital for gastro issues in Lucknow.",
              "Accurate diagnosis and excellent care.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-base italic leading-7 text-slate-700">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Endoscopy questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {endoscopyFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best endoscopy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for advanced GI endoscopy
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for endoscopy in Lucknow,
              offering advanced diagnostic and therapeutic procedures for
              digestive health. Whether you need upper GI endoscopy, colonoscopy,
              ERCP, capsule endoscopy, EUS, or therapeutic endoscopy, our hospital
              focuses on safe, effective, and accurate care.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              With experienced gastroenterologists, modern equipment, 24-hour
              hospital support, and patient-focused care, we provide reliable
              solutions for gastrointestinal symptoms and complex digestive
              conditions.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book endoscopy in Lucknow today
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not ignore digestive symptoms
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Get accurate diagnosis and treatment from experienced specialists
              at Myra City Hospital.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a
              href={hospital.phoneHref}
              className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900"
            >
              Call {hospital.phone}
            </a>
            <Link
              href="/gastro-medicine"
              className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              View Gastro Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ColonoscopyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Colorectal Screening", "Endoscopy"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "Colonoscopy in Lucknow",
        procedureType: "Diagnostic and Therapeutic Colonoscopy",
        bodyLocation: "Colon and Rectum",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${colonoscopySlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${colonoscopySlug}`,
        name: "Colonoscopy in Lucknow | Advanced Colonoscopy Test at Myra City Hospital",
        about: {
          "@type": "MedicalProcedure",
          name: "Colonoscopy",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Colonoscopy in Lucknow",
            item: `${siteUrl}/gastro-medicine/${colonoscopySlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: colonoscopyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>Colonoscopy in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Advanced colonoscopy test at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Colonoscopy in Lucknow by Expert Gastroenterologist
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are looking for a colonoscopy in Lucknow, Myra City Hospital
              offers safe, accurate, and advanced colonoscopy procedures for
              diagnosing and preventing serious gastrointestinal conditions.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Led by Dr. Juned Ahmad Khan, our colonoscopy services combine modern
              endoscopy technology, sedation-assisted comfort, and expert care for
              early detection of colon cancer, polyps, bleeding, and chronic bowel
              disorders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950"
              >
                Book Your Colonoscopy Appointment
              </Link>
              <Link
                href="/gastro-medicine/endoscopy-in-lucknow"
                className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300"
              >
                View Endoscopy Care
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=85"
                alt="Colonoscopy consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Colon cancer screening and bowel diagnosis
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {hospital.address}
              </p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Sedation-assisted comfort",
            "HD colonoscopy systems",
            "Polyp removal and biopsy",
            "Same-day discharge for most cases",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is colonoscopy?"
            title="A detailed examination of the colon and rectum"
            description="Colonoscopy is a minimally invasive procedure that lets doctors examine the entire large intestine and rectum using a flexible tube with a high-definition camera."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              Colonoscopy helps detect colon cancer at an early stage, identify
              polyps before they turn cancerous, diagnose chronic digestive
              conditions, and investigate symptoms such as bleeding, anemia,
              bowel habit changes, and abdominal pain.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Performed by experienced gastroenterologist",
                "Advanced HD colonoscopy systems",
                "Sedation-assisted painless procedure",
                "Diagnostic and therapeutic procedures available",
                "Hygienic, safety-focused protocols",
                "Same-day discharge in most cases",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Who needs colonoscopy?"
              title="Symptoms and screening reasons"
              description="Colonoscopy is recommended for both symptom evaluation and routine colorectal cancer screening."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {colonoscopyWhoNeeds.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Conditions diagnosed"
              title="Early detection can prevent serious disease"
              description="Colonoscopy is one of the most effective tools for detecting and preventing colorectal cancer progression."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {colonoscopyConditions.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Types of colonoscopy"
            title="Screening, diagnosis, and treatment in one care pathway"
            description="The right colonoscopy approach depends on age, symptoms, family history, risk factors, and findings during the procedure."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {colonoscopyTypes.map((type) => (
              <article key={type.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Gastro Medicine Specialist | Colonoscopy Expert
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan has extensive experience in colonoscopy,
              polypectomy, GI bleeding management, inflammatory bowel disease,
              liver and digestive disorders, and advanced diagnostic endoscopy.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Colonoscopy and polypectomy",
              "GI bleeding management",
              "Inflammatory bowel disease",
              "Liver and digestive disorders",
              "Advanced diagnostic endoscopy",
              "Ethical, patient-friendly care",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure journey"
            title="Colonoscopy procedure: step by step"
            description="Proper preparation and supervised sedation help make colonoscopy accurate, comfortable, and efficient."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Before the procedure",
                points: [
                  "Bowel cleansing with prescribed laxatives",
                  "Clear liquid diet before the test",
                  "Fasting for several hours",
                  "Medication adjustments if required",
                ],
              },
              {
                title: "During the procedure",
                points: [
                  "Performed under sedation for comfort",
                  "Flexible colonoscope inserted through the rectum",
                  "Entire colon examined carefully",
                  "Usually takes 20-40 minutes",
                ],
              },
              {
                title: "After the procedure",
                points: [
                  "Short recovery period of 30-60 minutes",
                  "Mild bloating may occur temporarily",
                  "Same-day discharge in most cases",
                ],
              },
            ].map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
          {[
            {
              title: "Is colonoscopy painful?",
              text: "No. Colonoscopy is typically painless because it is performed under sedation. Mild pressure or bloating may occur afterward.",
            },
            {
              title: "Benefits",
              text: "Colonoscopy supports early cancer detection, prevention through polyp removal, accurate diagnosis, and quick recovery.",
            },
            {
              title: "Cost in Lucknow",
              text: "The cost depends on diagnostic or therapeutic needs, sedation, biopsy, and additional procedures. Pricing is transparent.",
            },
            {
              title: "Risks and safety",
              text: "Rare risks include minor bleeding, sedation reaction, or perforation. Strict safety and sterilization standards minimize risk.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="Patient testimonials"
            title="Trusted colonoscopy care in Lucknow"
            description="Patients choose Myra City Hospital for careful preparation guidance, sedation-assisted comfort, and specialist-led diagnosis."
          />
          <div className="grid gap-4">
            {[
              "Smooth and painless colonoscopy experience.",
              "Best gastro hospital in Lucknow for diagnosis.",
              "Highly professional doctor and staff.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-base italic leading-7 text-slate-700">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Colonoscopy questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {colonoscopyFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best colonoscopy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for advanced colonoscopy testing
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a trusted destination for colonoscopy in
              Lucknow, offering advanced diagnostic and therapeutic endoscopy
              services. Whether for screening, diagnosis, or treatment, our
              colonoscopy services help detect conditions early and improve
              patient outcomes.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              With experienced gastroenterologists, modern equipment, and
              patient-focused care, we help patients evaluate bowel symptoms,
              prevent colon cancer progression, and receive timely treatment.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {colonoscopyRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book colonoscopy in Lucknow today
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Early detection can prevent serious disease
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Do not ignore bleeding, bowel changes, anemia, abdominal pain, or
              unexplained weight loss. Get evaluated by an experienced gastro team.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Endoscopy Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FattyLiverPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Hepatology", "Liver Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology and Hepatology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalCondition",
        name: "Fatty Liver Disease",
        associatedAnatomy: {
          "@type": "AnatomicalStructure",
          name: "Liver",
        },
        possibleTreatment: {
          "@type": "MedicalTherapy",
          name: "Fatty Liver Treatment",
        },
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${fattyLiverSlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${fattyLiverSlug}`,
        name: "Fatty Liver Treatment in Lucknow | Best Liver Specialist",
        about: {
          "@type": "MedicalCondition",
          name: "Fatty Liver Disease",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fatty Liver Treatment in Lucknow",
            item: `${siteUrl}/gastro-medicine/${fattyLiverSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: fattyLiverFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>Fatty Liver Treatment in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Advanced liver care at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Fatty Liver Treatment in Lucknow by Liver Specialist
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for fatty liver treatment in Lucknow, Myra City
              Hospital offers advanced diagnosis, personalized treatment plans,
              and long-term liver care to manage fatty liver disease effectively.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Led by Dr. Juned Ahmad Khan, our hepatology care focuses on early
              detection, lifestyle correction, metabolic control, and ongoing
              monitoring so fatty liver can be controlled and often reversed in
              early stages.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Consultation for Fatty Liver
              </Link>
              <Link href="/gastro-medicine/liver-disease-treatment-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View Liver Disease Care
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
                alt="Fatty liver consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Liver specialist care with 24-hour hospital support
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Advanced liver diagnostics",
            "Personalized treatment plans",
            "Lifestyle and nutrition guidance",
            "Long-term liver monitoring",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is fatty liver disease?"
            title="Excess fat in liver cells can silently affect liver health"
            description="Fatty liver disease occurs when excess fat accumulates in liver cells. It may be non-alcoholic fatty liver disease (NAFLD), often linked with obesity and diabetes, or alcoholic fatty liver disease caused by excessive alcohol intake."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              Fatty liver is one of the most common lifestyle-related liver
              conditions today. If untreated, it can progress to NASH, liver
              fibrosis, cirrhosis, liver failure, and in some cases liver cancer.
              Early diagnosis helps prevent progression and improve outcomes.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Expert liver specialist care",
                "Advanced liver diagnostics",
                "Personalized treatment plans",
                "Lifestyle and nutrition guidance",
                "Integrated gastro and liver care",
                "Long-term monitoring and prevention",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Causes"
              title="Lifestyle and metabolic factors often drive fatty liver"
              description="Identifying the cause helps build a treatment plan that protects long-term liver health."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {fattyLiverCauses.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Fatty liver can be silent in early stages"
              description="Regular check-ups are important because many patients have no symptoms until liver disease progresses."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {fattyLiverSymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <SectionIntro
            eyebrow="Diagnosis"
            title="Advanced testing for fatty liver and liver risk assessment"
            description="At Myra City Hospital, diagnosis is planned based on symptoms, liver function, metabolic risk, imaging findings, and disease stage."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {fattyLiverDiagnostics.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Disease stages"
            title="Timely treatment can stop progression at early stages"
            description="Fatty liver progresses gradually, and each stage needs a careful liver-focused treatment plan."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {fattyLiverStages.map((stage) => (
              <article key={stage.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Treatment options"
            title="Personalized fatty liver treatment for long-term liver health"
            description="The goal is to reverse early fatty liver where possible, slow progression in advanced stages, and reduce future liver complications."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {fattyLiverTreatments.map((treatment) => (
              <article key={treatment.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{treatment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{treatment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Liver Specialist | Hepatology Expert
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan is experienced in managing fatty liver, NASH,
              abnormal liver function tests, hepatitis, cirrhosis, and complex
              liver diseases with a focus on accurate diagnosis and long-term
              disease management.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Fatty liver and NASH management",
              "Liver function abnormalities",
              "Hepatitis treatment",
              "Cirrhosis care",
              "Preventive liver health",
              "Long-term follow-up planning",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Can fatty liver be reversed?"
              title="Early-stage fatty liver can often improve with the right plan"
              description="Weight loss, healthy diet, regular exercise, alcohol avoidance, diabetes control, cholesterol control, and medical guidance can help reverse fatty liver in many early-stage patients."
            />
          </div>
          <div className="grid gap-5">
            <article className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
              <h3 className="text-xl font-semibold">Recommended diet pattern</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Fruits and vegetables, whole grains, lean protein, and healthy
                fats such as nuts and olive oil support liver and metabolic health.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
              <h3 className="text-xl font-semibold">Foods to avoid</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Sugary foods and drinks, fried and processed foods, excess refined
                carbohydrates, and alcohol can worsen fatty liver risk.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Complications if untreated",
              text: "Untreated fatty liver can progress to NASH, fibrosis, cirrhosis, liver cancer, and liver failure.",
            },
            {
              title: "Treatment cost in Lucknow",
              text: "Cost depends on diagnostic tests, severity, treatment plan, and follow-up care. Myra City Hospital focuses on transparent pricing.",
            },
            {
              title: "Long-term monitoring",
              text: "Follow-up testing, lifestyle review, metabolic control, and liver assessment help prevent recurrence and progression.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="Patient testimonials"
            title="Trusted fatty liver care in Lucknow"
            description="Patients choose Myra City Hospital for clear guidance, long-term monitoring, and practical lifestyle plans."
          />
          <div className="grid gap-4">
            {[
              "Best doctor for fatty liver treatment in Lucknow.",
              "Helped me reverse fatty liver with proper guidance.",
              "Very supportive and knowledgeable doctor.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-base italic leading-7 text-slate-700">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Fatty liver questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {fattyLiverFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best fatty liver treatment in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for comprehensive liver care
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for fatty liver treatment in
              Lucknow, offering comprehensive liver care with expert doctors,
              advanced diagnostics, personalized treatment, lifestyle correction,
              and long-term liver health monitoring.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Our goal is to help patients reverse fatty liver where possible,
              prevent complications, and manage associated conditions such as
              diabetes, cholesterol, obesity, and abnormal liver function tests.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {fattyLiverRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book fatty liver treatment in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not ignore liver health
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Early liver care can prevent serious complications and support
              long-term wellness.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Endoscopy Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function AcidRefluxPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Endoscopy", "Digestive Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalCondition",
        name: "Gastroesophageal Reflux Disease (GERD)",
        associatedAnatomy: {
          "@type": "AnatomicalStructure",
          name: "Esophagus",
        },
        possibleTreatment: {
          "@type": "MedicalTherapy",
          name: "Acid Reflux Treatment",
        },
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${acidRefluxSlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${acidRefluxSlug}`,
        name: "Acid Reflux / GERD Treatment in Lucknow | Best Gastro Doctor",
        about: {
          "@type": "MedicalCondition",
          name: "Gastroesophageal Reflux Disease (GERD)",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Acid Reflux Treatment in Lucknow",
            item: `${siteUrl}/gastro-medicine/${acidRefluxSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: acidRefluxFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>Acid Reflux Treatment in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              GERD and chronic acidity care at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Acid Reflux and GERD Treatment in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for acid reflux treatment in Lucknow or a GERD
              specialist near you, Myra City Hospital provides advanced diagnosis,
              effective treatment, and long-term relief from chronic acidity and
              digestive discomfort.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Led by Dr. Juned Ahmad Khan, our gastro care focuses on accurate
              diagnosis, lifestyle correction, medical treatment, and long-term
              symptom control for acid reflux, GERD, and functional digestive
              disorders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Consultation for GERD Treatment
              </Link>
              <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View Endoscopy Care
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=85"
                alt="GERD and acid reflux consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Gastro specialist care with endoscopy support
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Advanced GERD diagnosis",
            "Endoscopy and pH monitoring",
            "Lifestyle and diet guidance",
            "Long-term symptom control",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is GERD?"
            title="Acid reflux becomes GERD when symptoms are frequent or chronic"
            description="GERD, or gastroesophageal reflux disease, occurs when stomach acid flows back into the esophagus and causes irritation, burning, regurgitation, cough, throat symptoms, or swallowing difficulty."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              This reflux often happens because of weakness of the lower
              esophageal sphincter, the valve that normally prevents stomach acid
              from moving upward. Frequent acidity should not be ignored because
              it may need proper medical evaluation and treatment.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced gastroenterologist",
                "Advanced endoscopy and pH testing",
                "Personalized treatment plans",
                "Lifestyle and dietary management",
                "Integrated gastro care",
                "Long-term symptom control approach",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Common symptoms of acid reflux and GERD"
              description="If these symptoms happen frequently, medical evaluation is important to prevent complications."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {acidRefluxSymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Causes"
              title="What triggers acid reflux?"
              description="GERD is often linked to food habits, body weight, lifestyle factors, stress, or anatomical issues such as hiatal hernia."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {acidRefluxCauses.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <SectionIntro
            eyebrow="Diagnosis"
            title="Finding the cause and severity of reflux"
            description="Testing is selected based on symptom pattern, duration, severity, response to medicines, and alarm signs such as swallowing difficulty or weight loss."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {acidRefluxDiagnostics.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Treatment options"
            title="GERD treatment designed for long-term relief"
            description="The best treatment plan depends on symptom frequency, lifestyle triggers, endoscopy findings, and whether reflux is mild, chronic, or complicated."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {acidRefluxTreatments.map((treatment) => (
              <article key={treatment.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{treatment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{treatment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              GERD Specialist | Gastroenterologist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan specializes in treating acid reflux, GERD,
              chronic acidity, and functional digestive disorders with accurate
              diagnosis, patient-friendly care, and long-term symptom control.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "GERD and acidity treatment",
              "Endoscopy and diagnosis",
              "Functional bowel disorders",
              "Liver and digestive diseases",
              "Diet and lifestyle planning",
              "Long-term reflux control",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Complications"
              title="Untreated GERD can damage the esophagus"
              description="Frequent reflux should be treated early because long-term acid exposure can cause inflammation, ulcers, Barrett's esophagus, and increased cancer risk."
            />
          </div>
          <div className="grid gap-5">
            <article className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
              <h3 className="text-xl font-semibold">Foods to eat</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Oatmeal, vegetables, bananas, lean protein, and balanced meals may
                support reflux control for many patients.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
              <h3 className="text-xl font-semibold">Foods to avoid</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Spicy foods, fried foods, coffee, carbonated drinks, chocolate,
                alcohol, and late-night meals can worsen reflux in many people.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is GERD curable?",
              text: "GERD can be effectively managed with proper treatment, lifestyle changes, and medical supervision. Many patients experience complete symptom relief.",
            },
            {
              title: "Treatment cost in Lucknow",
              text: "Cost depends on diagnostic tests, medication duration, endoscopy needs, and whether advanced treatment is required.",
            },
            {
              title: "Why early care matters",
              text: "Early care reduces irritation, prevents complications, and helps patients avoid repeated self-medication for chronic acidity.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="Patient testimonials"
            title="Trusted GERD and acidity care in Lucknow"
            description="Patients choose Myra City Hospital for careful evaluation, clear explanation, and long-term digestive symptom relief."
          />
          <div className="grid gap-4">
            {[
              "Best doctor for acidity treatment in Lucknow.",
              "Got relief from chronic GERD.",
              "Highly recommended gastro specialist.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-base italic leading-7 text-slate-700">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              GERD and acid reflux questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {acidRefluxFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best acid reflux treatment in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for GERD and chronic acidity care
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for GERD and acid reflux
              treatment in Lucknow, offering advanced diagnosis, personalized
              treatment, lifestyle correction, and long-term relief.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              This page also acts as a gastro care hub, connecting patients to
              endoscopy, colonoscopy, fatty liver treatment, and gallbladder
              surgery when symptoms or findings suggest related digestive issues.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {acidRefluxRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book GERD treatment in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not ignore frequent acidity
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Get expert evaluation and long-term reflux relief from a specialist
              gastroenterology team.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Endoscopy Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ErcpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Endoscopy", "Hepatobiliary Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "ERCP in Lucknow",
        procedureType: "Endoscopic Retrograde Cholangiopancreatography",
        bodyLocation: "Bile Duct and Pancreatic Duct",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${ercpSlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${ercpSlug}`,
        name: "ERCP in Lucknow | Bile Duct Stone Removal and Pancreatic Treatment",
        about: {
          "@type": "MedicalProcedure",
          name: "ERCP",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ERCP in Lucknow",
            item: `${siteUrl}/gastro-medicine/${ercpSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: ercpFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>ERCP in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Bile duct stone removal and pancreatic duct care
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              ERCP in Lucknow by Dr. Juned Ahmad Khan
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for ERCP in Lucknow, Myra City Hospital offers
              advanced diagnostic and therapeutic ERCP procedures for bile duct,
              gallbladder, and pancreatic conditions.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              ERCP is a highly specialized endoscopic procedure that can diagnose
              and treat serious digestive conditions, including bile duct stones
              and blocked ducts, without open surgery in many cases.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book ERCP Consultation
              </Link>
              <Link href="/gastro-surgery/gallbladder-surgery-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View Gallbladder Surgery
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=85"
                alt="ERCP consultation and advanced endoscopy care at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Advanced endoscopy suite with ICU backup
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Bile duct stone removal",
            "Blocked duct stenting",
            "Pancreatic duct care",
            "Minimally invasive treatment",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is ERCP?"
            title="An advanced endoscopic treatment for bile and pancreatic ducts"
            description="ERCP combines endoscopy and X-ray imaging to examine and treat problems in the bile ducts, gallbladder, and pancreatic ducts."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              ERCP allows the gastroenterologist to remove bile duct stones, open
              blocked ducts, place stents, treat infections, and manage strictures.
              At Myra City Hospital, ERCP is performed with modern equipment,
              specialist precision, and careful monitoring.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced ERCP specialist",
                "Advanced endoscopy suite",
                "High focus on bile duct stone removal",
                "No open surgery in many cases",
                "ICU backup for high-risk patients",
                "Complete hepatobiliary care",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Conditions treated"
              title="When ERCP may be recommended"
              description="ERCP is used when a duct problem needs precise diagnosis, drainage, stone removal, stenting, or other endoscopic treatment."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ercpConditions.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Symptoms that may need urgent ERCP evaluation"
              description="Symptoms such as jaundice with fever or severe abdominal pain should be assessed quickly because obstruction can become dangerous."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ercpSymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure"
            title="ERCP procedure: what patients can expect"
            description="The care team reviews imaging and risk factors before ERCP, performs the procedure under sedation, and monitors recovery closely afterward."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ercpProcedureSteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <SectionIntro
            eyebrow="Therapeutic ERCP"
            title="Treatment can often happen during the same procedure"
            description="ERCP is valuable because it can move from diagnosis to treatment immediately when clinically appropriate."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {ercpTreatmentOptions.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              ERCP Specialist | Gastroenterologist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan performs advanced ERCP procedures and manages
              complex hepatobiliary, pancreatic, liver, and bile duct conditions
              with a safety-focused approach.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "ERCP and bile duct stone removal",
              "Pancreatic disease management",
              "Liver and bile duct disorders",
              "Advanced endoscopy",
              "Blocked duct stenting",
              "Jaundice evaluation",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="ERCP vs surgery"
              title="Why ERCP is often preferred for bile duct problems"
              description="ERCP is minimally invasive, usually has faster recovery, and may reduce the need for major surgery in selected bile duct and pancreatic duct conditions."
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#fbfdff]">
            {[
              ["Invasiveness", "Minimally invasive", "Major surgery"],
              ["Recovery", "Fast", "Longer"],
              ["Hospital stay", "Short", "Longer"],
              ["Pain", "Minimal", "Moderate"],
            ].map(([feature, ercp, surgery]) => (
              <div key={feature} className="grid grid-cols-3 border-b border-slate-200 text-sm last:border-b-0">
                <div className="bg-slate-50 p-4 font-semibold text-slate-950">{feature}</div>
                <div className="p-4 font-semibold text-blue-800">{ercp}</div>
                <div className="p-4 text-slate-600">{surgery}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is ERCP safe?",
              text: "ERCP is safe and effective when performed by experienced specialists. Rare risks include pancreatitis, infection, or bleeding, so careful monitoring matters.",
            },
            {
              title: "Cost of ERCP in Lucknow",
              text: "Cost depends on complexity, stone removal, stenting, anesthesia, and hospital stay. Myra City Hospital focuses on transparent pricing.",
            },
            {
              title: "Why early treatment matters",
              text: "Delaying ERCP for obstruction may lead to cholangitis, liver damage, pancreatitis, or sepsis, so timely evaluation is critical.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="Patient testimonials"
            title="Trusted ERCP and bile duct care in Lucknow"
            description="Patients choose Myra City Hospital for specialist-led endoscopy, careful monitoring, and coordinated gastro care."
          />
          <div className="grid gap-4">
            {[
              "Successful ERCP with quick recovery.",
              "Best hospital for bile duct stone treatment.",
              "Highly experienced doctor.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-base italic leading-7 text-slate-700">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              ERCP questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {ercpFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best ERCP in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for bile duct and pancreatic treatment
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a trusted center for ERCP in Lucknow, offering
              advanced endoscopic treatment for bile duct stones, obstructive
              jaundice, blocked ducts, and pancreatic disorders.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              This ERCP page is linked with the wider gastro authority cluster,
              including endoscopy, gallbladder surgery, fatty liver care, GERD,
              and colonoscopy, so patients can navigate related digestive care
              naturally.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {ercpRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book ERCP in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not delay bile duct or pancreatic treatment
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Get specialist evaluation for jaundice, bile duct stones, blocked
              ducts, and recurrent pancreatitis.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Endoscopy Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function UpperEndoscopyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Endoscopy", "Digestive Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "Upper Endoscopy (EGD)",
        procedureType: "Esophagogastroduodenoscopy",
        bodyLocation: "Esophagus, Stomach, Duodenum",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${upperEndoscopySlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${upperEndoscopySlug}`,
        name: "Upper Endoscopy (EGD) in Lucknow | Best Endoscopy Test",
        about: {
          "@type": "MedicalProcedure",
          name: "Upper Endoscopy (EGD)",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Upper Endoscopy in Lucknow",
            item: `${siteUrl}/gastro-medicine/${upperEndoscopySlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: upperEndoscopyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>Upper Endoscopy in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best upper endoscopy test at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Upper Endoscopy (EGD) in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for upper endoscopy in Lucknow, Myra City
              Hospital offers advanced, safe, and accurate endoscopy services for
              diagnosing and treating digestive disorders.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Procedures are performed by Dr. Juned Ahmad Khan, an experienced
              gastroenterologist with expertise in upper GI endoscopy, GERD,
              acidity, ulcers, GI bleeding, and advanced diagnostic procedures.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Upper Endoscopy Appointment
              </Link>
              <Link href="/gastro-medicine/acid-reflux-treatment-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View GERD Treatment
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=85"
                alt="Upper endoscopy consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Sedation-assisted EGD with same-day discharge for most patients
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "HD upper GI endoscopy",
            "Sedation-assisted comfort",
            "Biopsy and bleeding support",
            "Same-day discharge for most cases",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is upper endoscopy?"
            title="A clear view of the esophagus, stomach, and duodenum"
            description="Upper GI Endoscopy, also known as EGD or esophagogastroduodenoscopy, is a minimally invasive procedure used to examine the food pipe, stomach, and upper small intestine in real time."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              A thin flexible tube with a camera is inserted through the mouth,
              helping the gastroenterologist diagnose reflux injury, gastritis,
              ulcers, swallowing problems, bleeding, and suspicious early cancer
              changes. Selected treatments can also be performed during the same
              procedure.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Esophagus evaluation",
                "Stomach evaluation",
                "Duodenum evaluation",
                "Biopsy when needed",
                "Bleeding source detection",
                "Therapeutic treatment options",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Conditions diagnosed"
            title="What upper endoscopy can detect"
            description="Upper endoscopy helps explain chronic symptoms and supports early diagnosis before complications become serious."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {upperEndoscopyConditions.map((condition) => (
              <article key={condition.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{condition.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{condition.description}</p>
                <Link href={condition.href} className="mt-4 inline-block text-sm font-semibold text-blue-800">
                  Related care
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Symptoms that may require upper endoscopy"
              description="Do not keep self-medicating if symptoms are persistent, recurrent, severe, or associated with warning signs."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {upperEndoscopySymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Therapeutic uses"
              title="Upper endoscopy can treat selected problems too"
              description="EGD is not only diagnostic. It may help avoid major surgery in selected digestive conditions."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Biopsy collection for lab analysis",
                "Bleeding control using advanced techniques",
                "Stricture dilation for narrowed areas",
                "Foreign body removal",
                "Ulcer assessment and follow-up",
                "Cancer evaluation support",
              ].map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure"
            title="Upper endoscopy procedure: step by step"
            description="The procedure is planned for comfort, accuracy, and safety with fasting instructions, sedation support, and post-procedure observation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {upperEndoscopyProcedureSteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Gastro Medicine Specialist | Endoscopy Expert
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan is trusted for upper GI endoscopy, GERD and
              acidity treatment, liver diseases, GI bleeding management, and
              functional digestive disorders.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Upper GI endoscopy",
              "GERD and acidity treatment",
              "Liver diseases",
              "GI bleeding management",
              "Functional digestive disorders",
              "Biopsy and diagnosis",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is upper endoscopy safe?",
              text: "Yes. It is a safe and commonly performed procedure when done by experienced specialists with infection control, monitoring, and trained staff.",
            },
            {
              title: "Upper endoscopy cost in Lucknow",
              text: "Cost depends on sedation, biopsy, therapeutic work, and clinical complexity. Myra City Hospital focuses on transparent pricing.",
            },
            {
              title: "Why early diagnosis matters",
              text: "Early EGD can help prevent delayed diagnosis of ulcers, chronic GERD injury, internal bleeding, and cancer progression.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-[#fbfdff] p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Upper endoscopy questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {upperEndoscopyFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best upper endoscopy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for accurate EGD and digestive diagnosis
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for upper endoscopy in
              Lucknow, offering safe diagnostic and therapeutic services for
              digestive health with expert doctors, modern equipment, and
              patient-focused care.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Upper endoscopy connects naturally with GERD treatment, gastritis,
              colonoscopy, fatty liver evaluation, ERCP, and the wider endoscopy
              care cluster.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {upperEndoscopyRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book upper endoscopy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not ignore persistent digestive symptoms
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Get safe, accurate upper GI endoscopy from an experienced
              gastroenterology team.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Endoscopy Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CapsuleEndoscopyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Endoscopy", "Digestive Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "Capsule Endoscopy",
        procedureType: "Non-invasive diagnostic imaging",
        bodyLocation: "Small Intestine",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${capsuleEndoscopySlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${capsuleEndoscopySlug}`,
        name: "Capsule Endoscopy in Lucknow | Small Intestine Test",
        about: {
          "@type": "MedicalProcedure",
          name: "Capsule Endoscopy",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Capsule Endoscopy in Lucknow",
            item: `${siteUrl}/gastro-medicine/${capsuleEndoscopySlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: capsuleEndoscopyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>Capsule Endoscopy in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Small intestine test at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Capsule Endoscopy in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for capsule endoscopy in Lucknow, Myra City
              Hospital offers a non-invasive, advanced diagnostic procedure to
              examine the small intestine, an area that traditional endoscopy and
              colonoscopy often cannot fully visualize.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Led by Dr. Juned Ahmad Khan, our capsule endoscopy service supports
              accurate diagnosis for hidden bleeding, chronic anemia, suspected
              Crohn disease, persistent diarrhea, and unexplained digestive
              symptoms.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Capsule Endoscopy Consultation
              </Link>
              <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View Endoscopy Care
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
                alt="Capsule endoscopy consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Non-invasive small intestine imaging with expert review
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Painless pill camera test",
            "No sedation required",
            "Small intestine visualization",
            "No admission for most patients",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is capsule endoscopy?"
            title="A pill-sized camera for small intestine diagnosis"
            description="Capsule endoscopy is a modern diagnostic test where the patient swallows a pill-sized camera capsule that travels through the digestive tract and captures thousands of images of the small intestine."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              The capsule transmits images to a recording device while you go
              about normal daily activities. Unlike traditional endoscopy, it does
              not require sedation, does not involve tubes, and is comfortable for
              most patients.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Non-invasive test",
                "No tube insertion",
                "No sedation",
                "Complete small bowel imaging",
                "Useful after inconclusive tests",
                "Expert image interpretation",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Conditions diagnosed"
            title="When capsule endoscopy is useful"
            description="The small intestine is difficult to examine fully with standard upper endoscopy or colonoscopy, so capsule endoscopy can reveal hidden findings."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capsuleEndoscopyConditions.map((condition) => (
              <article key={condition.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{condition.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{condition.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Symptoms that may require capsule endoscopy"
              description="Capsule endoscopy may be considered when symptoms remain unexplained after initial evaluation."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {capsuleEndoscopySymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Why it matters"
              title="Early small intestine diagnosis can change treatment"
              description="Finding the source of anemia, bleeding, inflammation, or chronic symptoms early helps prevent progression and delayed care."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Detect hidden bleeding when standard tests are negative",
                "Identify early small bowel inflammation",
                "Support diagnosis of Crohn disease and celiac-related damage",
                "Guide treatment planning with clearer findings",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure"
            title="Capsule endoscopy procedure: step by step"
            description="The test is designed around comfort and daily movement, with preparation, recording, and specialist review."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capsuleEndoscopySteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Advanced Gastro Diagnostics Specialist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan specializes in advanced diagnostic procedures,
              including capsule endoscopy, upper endoscopy, colonoscopy, liver
              disease evaluation, GI bleeding workup, and chronic digestive
              disorder management.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Capsule endoscopy",
              "Endoscopy and colonoscopy",
              "GI bleeding evaluation",
              "Chronic anemia workup",
              "Crohn disease evaluation",
              "Small intestine diagnosis",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is capsule endoscopy safe?",
              text: "Yes. Capsule endoscopy is extremely safe for most patients. Capsule retention is rare and risk is assessed before testing.",
            },
            {
              title: "Capsule endoscopy cost in Lucknow",
              text: "Cost depends on the capsule system, clinical complexity, and whether additional testing is needed. Pricing is explained transparently.",
            },
            {
              title: "Capsule vs traditional endoscopy",
              text: "Capsule endoscopy is non-invasive, does not need sedation, and visualizes the small intestine where standard scopes may not reach fully.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-[#fbfdff] p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Capsule endoscopy questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {capsuleEndoscopyFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best capsule endoscopy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for complete small intestine evaluation
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a trusted center for capsule endoscopy in
              Lucknow, offering advanced, non-invasive small intestine diagnosis
              with expert gastroenterologist review and patient-focused care.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Capsule endoscopy connects naturally with upper endoscopy,
              colonoscopy, GERD care, fatty liver evaluation, IBS, and the wider
              gastroenterology diagnostic cluster.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {capsuleEndoscopyRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book capsule endoscopy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not ignore unexplained digestive symptoms
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Get advanced small intestine diagnosis from an experienced
              gastroenterology team.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Endoscopy Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function EusPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Endoscopy", "Hepatobiliary Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "Endoscopic Ultrasound (EUS)",
        procedureType: "Endoscopic Ultrasound Imaging",
        bodyLocation: "Pancreas, Liver, Bile Duct",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${eusSlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${eusSlug}`,
        name: "Endoscopic Ultrasound (EUS) in Lucknow | Pancreas, Liver and GI Cancer Diagnosis",
        about: {
          "@type": "MedicalProcedure",
          name: "Endoscopic Ultrasound (EUS)",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "EUS in Lucknow",
            item: `${siteUrl}/gastro-medicine/${eusSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: eusFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>EUS in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Pancreas, liver, bile duct and GI cancer diagnosis
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Endoscopic Ultrasound (EUS) in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for Endoscopic Ultrasound in Lucknow, Myra City
              Hospital provides high-precision diagnostic imaging using advanced
              EUS technology for complex gastrointestinal, pancreatic, liver, and
              bile duct conditions.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              EUS procedures are performed by Dr. Juned Ahmad Khan, a specialist
              in advanced endoscopy and gastro diagnostics, helping patients get
              accurate diagnosis without major surgery in many cases.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book EUS Consultation
              </Link>
              <Link href="/gastro-medicine/ercp-in-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View ERCP Care
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
                alt="Endoscopic ultrasound EUS consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Advanced EUS imaging with biopsy support when needed
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "High-resolution internal imaging",
            "Pancreas and bile duct evaluation",
            "EUS-guided biopsy support",
            "Cancer staging capability",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is EUS?"
            title="Endoscopy and ultrasound combined for deep tissue imaging"
            description="Endoscopic Ultrasound combines camera-based endoscopy with ultrasound scanning to obtain detailed images of organs and tissues from inside the body."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              EUS provides high-resolution views of the pancreas, liver, bile
              ducts, gallbladder, stomach, esophagus, and lymph nodes. It is
              especially valuable for early tumor detection, cancer staging, and
              evaluating complex findings seen on CT, MRI, or ultrasound.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {eusOrgans.map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Conditions diagnosed"
            title="What EUS can evaluate"
            description="EUS is used for detailed assessment of pancreatic, liver, bile duct, gastrointestinal cancer, and lymph node conditions."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {eusConditions.map((condition) => (
              <article key={condition.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{condition.title}</h3>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
                  {condition.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Symptoms and reports that may require EUS"
              description="EUS may be advised when symptoms or imaging suggest a complex pancreatic, liver, bile duct, lymph node, or cancer-related concern."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {eusSymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="EUS-guided procedures"
              title="EUS can guide biopsy and drainage"
              description="Beyond imaging, EUS can guide selected interventions with high precision."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Fine Needle Aspiration (FNA) or biopsy for tissue diagnosis",
                "Fluid drainage from selected cysts or abscesses",
                "Targeted therapy planning for complex disease",
                "Cancer staging and assessment of tumor spread",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure"
            title="EUS procedure: step by step"
            description="EUS is planned with fasting, medical review, sedation support, imaging, and recovery observation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {eusSteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Advanced Endoscopy Specialist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan has experience in EUS, pancreatic disease
              diagnosis, liver and bile duct disorders, GI cancer evaluation, and
              advanced endoscopy-led treatment planning.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Endoscopic ultrasound (EUS)",
              "Pancreatic disease diagnosis",
              "Liver and bile duct disorders",
              "GI cancer evaluation",
              "EUS-guided biopsy",
              "Advanced endoscopy",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is EUS safe?",
              text: "Yes. EUS is safe and minimally invasive when performed by trained specialists with sedation monitoring and infection-control protocols.",
            },
            {
              title: "EUS cost in Lucknow",
              text: "Cost depends on diagnostic complexity, biopsy requirement, sedation, and procedure duration. Pricing is explained transparently.",
            },
            {
              title: "EUS vs CT or MRI",
              text: "EUS provides very high-detail imaging from inside the body and can allow tissue biopsy, which CT and MRI generally cannot do directly.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-[#fbfdff] p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              EUS questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {eusFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best Endoscopic Ultrasound in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for pancreas, liver and GI cancer diagnosis
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for EUS in Lucknow, offering
              advanced diagnostic imaging for pancreas, liver, bile duct,
              gallbladder, lymph node, and gastrointestinal cancer concerns.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              EUS connects strongly with ERCP, upper endoscopy, colonoscopy, fatty
              liver care, GERD evaluation, and the wider advanced endoscopy care
              cluster.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {eusRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book EUS in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Get accurate diagnosis for complex digestive conditions
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Speak with an advanced endoscopy team for pancreas, liver, bile
              duct, lymph node, or GI cancer evaluation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/ercp-in-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View ERCP Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function GiBiopsyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Endoscopy", "Digestive Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: "GI Biopsy",
        procedureType: "Endoscopic Tissue Sampling",
        bodyLocation: "Digestive System",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${giBiopsySlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${giBiopsySlug}`,
        name: "GI Biopsy in Lucknow | Endoscopic Biopsy Test",
        about: {
          "@type": "MedicalProcedure",
          name: "GI Biopsy",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "GI Biopsy in Lucknow",
            item: `${siteUrl}/gastro-medicine/${giBiopsySlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: giBiopsyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>GI Biopsy in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Endoscopic biopsy test and tissue diagnosis
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              GI Biopsy in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for a GI biopsy in Lucknow, Myra City Hospital
              offers accurate, safe, and advanced biopsy procedures for diagnosing
              gastrointestinal, liver, inflammatory, infectious, and cancer-related
              conditions.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Biopsy procedures are performed by Dr. Juned Ahmad Khan, an
              experienced specialist in endoscopy, gastroenterology, and digestive
              disease diagnosis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book GI Biopsy Consultation
              </Link>
              <Link href="/gastro-medicine/eus-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View EUS-Guided Biopsy
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
                alt="GI biopsy and endoscopic biopsy consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Endoscopy-guided biopsy with reliable pathology coordination
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Endoscopic tissue sampling",
            "Cancer confirmation support",
            "Infection and inflammation diagnosis",
            "Fast pathology coordination",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is GI biopsy?"
            title="A tissue test that confirms what imaging cannot"
            description="A gastrointestinal biopsy collects a small tissue sample from the digestive tract or related organs for laboratory examination under a microscope."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              Biopsies are commonly performed during upper endoscopy, colonoscopy,
              and EUS-guided procedures. The tissue sample helps identify
              infection, inflammation, celiac disease, liver disease, precancerous
              changes, or cancer.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Confirms diagnosis",
                "Detects early-stage cancer",
                "Identifies H. pylori infection",
                "Evaluates chronic inflammation",
                "Guides accurate treatment",
                "Supports reliable medical decisions",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Types of biopsy"
            title="GI biopsy procedures available at Myra City Hospital"
            description="The biopsy method depends on the suspected condition and the location of the abnormal tissue."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {giBiopsyTypes.map((type) => (
              <article key={type.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{type.description}</p>
                <Link href={type.href} className="mt-4 inline-block text-sm font-semibold text-blue-800">
                  Related service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Conditions diagnosed"
              title="What GI biopsy can help diagnose"
              description="Biopsy is essential when tissue-level confirmation is needed for safe and accurate treatment planning."
            />
            <ul className="mt-8 grid gap-3">
              {giBiopsyConditions.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Symptoms that may require a biopsy"
              description="Your doctor may advise biopsy when symptoms or test findings need confirmation before treatment."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {giBiopsySymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure"
            title="GI biopsy procedure: step by step"
            description="Biopsy is usually quick, minimally invasive, and performed as part of an endoscopy, colonoscopy, EUS, or selected liver procedure."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {giBiopsySteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              Diagnostic Gastro Specialist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan has experience in endoscopy-guided biopsies,
              cancer diagnosis support, colonoscopy, EUS-guided procedures, liver
              disease evaluation, and advanced gastro diagnostics.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "GI biopsy procedures",
              "Cancer diagnosis support",
              "Endoscopy and colonoscopy",
              "EUS-guided biopsy",
              "Liver disease evaluation",
              "Advanced gastro diagnostics",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is GI biopsy safe?",
              text: "Yes. GI biopsy is safe and routine when performed by experienced specialists using sterilized instruments and careful monitoring.",
            },
            {
              title: "GI biopsy cost in Lucknow",
              text: "Cost depends on biopsy type, procedure method, sedation, and laboratory analysis. Pricing is explained transparently.",
            },
            {
              title: "Why early biopsy matters",
              text: "Early biopsy supports timely cancer diagnosis, confirms disease type, and helps patients avoid delayed or incorrect treatment.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-[#fbfdff] p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              GI biopsy questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {giBiopsyFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best GI biopsy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for accurate diagnosis and early detection
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a trusted center for GI biopsy in Lucknow,
              offering advanced diagnostic services for digestive and liver
              diseases with a focus on accuracy, early detection, patient safety,
              and reliable results.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              GI biopsy connects naturally with EUS, ERCP, colonoscopy, upper
              endoscopy, fatty liver evaluation, GERD care, and cancer diagnosis
              pathways.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {giBiopsyRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book GI biopsy in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not delay diagnosis
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Get accurate tissue diagnosis and treatment planning from an
              experienced gastroenterology team.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/eus-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View EUS Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MotilityStudiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: ["Gastroenterology", "Digestive Care", "GERD Care"],
      },
      {
        "@type": "Physician",
        name: "Dr. Juned Ahmad Khan",
        medicalSpecialty: "Gastroenterology",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "MedicalTest",
        name: "Motility Studies",
        usesDevice: "Manometry and pH Monitoring System",
        bodyLocation: "Esophagus",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
          medicalSpecialty: "Gastroenterology",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine/${motilityStudiesSlug}#webpage`,
        url: `${siteUrl}/gastro-medicine/${motilityStudiesSlug}`,
        name: "Motility Studies in Lucknow | Esophageal Manometry and pH Monitoring",
        about: {
          "@type": "MedicalTest",
          name: "Motility Studies",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. Juned Ahmad Khan",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Motility Studies in Lucknow",
            item: `${siteUrl}/gastro-medicine/${motilityStudiesSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: motilityStudiesFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gastro-medicine" className="hover:text-blue-800">Gastro Medicine</Link>
              <span className="mx-2">/</span>
              <span>Motility Studies in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Esophageal manometry and pH monitoring
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Motility Studies in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for motility studies in Lucknow, Myra City
              Hospital offers advanced diagnostic testing to evaluate digestive
              muscle function, reflux activity, swallowing coordination, and
              functional gastrointestinal disorders.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Motility testing is supervised by Dr. Juned Ahmad Khan, an
              experienced specialist in GERD, swallowing disorders, and functional
              digestive diseases.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Motility Study Consultation
              </Link>
              <Link href="/gastro-medicine/acid-reflux-treatment-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View GERD Treatment
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=85"
                alt="Motility studies and GERD testing consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Advanced GERD and swallowing disorder diagnosis
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Esophageal pressure testing",
            "24-hour reflux monitoring",
            "Swallowing disorder evaluation",
            "No sedation required",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What are motility studies?"
            title="Functional testing for how the digestive tract moves"
            description="Motility studies are specialized tests that assess how well digestive muscles work by measuring movement, muscle contractions, esophageal pressure, and acid exposure."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              These tests help diagnose conditions that routine endoscopy or
              imaging may not detect. They are especially important for chronic
              GERD, swallowing difficulty, achalasia, reflux-related cough, and
              functional chest or throat symptoms.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Food movement assessment",
                "Muscle contraction measurement",
                "Esophageal pressure mapping",
                "Acid exposure monitoring",
                "Non-surgical testing",
                "Targeted treatment planning",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Tests available"
            title="Types of motility tests"
            description="Your gastroenterologist selects the test based on symptoms, previous endoscopy findings, and treatment response."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {motilityTestTypes.map((test) => (
              <article key={test.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-semibold">{test.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{test.measures}</p>
                <p className="mt-5 text-sm font-semibold text-slate-950">Used for diagnosing</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                  {test.diagnoses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Conditions diagnosed"
              title="What motility studies can identify"
              description="Motility studies help explain symptoms when structure looks normal but function is abnormal."
            />
            <ul className="mt-8 grid gap-3">
              {motilityConditions.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="Symptoms that may require motility testing"
              description="These symptoms may need functional testing if they persist or do not respond to standard treatment."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {motilitySymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure"
            title="Motility study procedure: step by step"
            description="The tests are outpatient, non-surgical, and designed to capture muscle function or reflux activity accurately."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {motilitySteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Dr. Juned Ahmad Khan
            </h2>
            <p className="mt-2 text-blue-100">
              GERD and Functional GI Specialist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. Juned Ahmad Khan specializes in GERD, acid reflux, motility
              disorders, swallowing problems, functional digestive diseases, and
              advanced diagnostic planning.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "GERD and acid reflux",
              "Esophageal manometry",
              "24-hour pH monitoring",
              "Swallowing problems",
              "Functional GI diseases",
              "Advanced diagnostics",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Is motility testing safe?",
              text: "Yes. Motility studies are safe, non-surgical, and well-tolerated. Temporary throat or nasal discomfort can occur.",
            },
            {
              title: "Motility test cost in Lucknow",
              text: "Cost depends on whether manometry, pH monitoring, impedance-pH testing, or combined evaluation is needed.",
            },
            {
              title: "Motility study vs endoscopy",
              text: "Endoscopy shows structure, while motility studies measure function. Both may be used together for complete GERD or swallowing evaluation.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-[#fbfdff] p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Motility testing questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {motilityStudiesFaqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best motility studies in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for GERD and swallowing disorder diagnosis
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for motility studies in
              Lucknow, offering advanced diagnostic testing for GERD, swallowing
              disorders, achalasia, reflux-related cough, and functional digestive
              diseases.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Motility testing supports the GERD authority cluster and connects
              naturally with endoscopy, upper endoscopy, EUS, colonoscopy, and
              broader gastro medicine services.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {motilityRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book motility studies in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Get accurate testing for reflux and swallowing symptoms
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Speak with a gastro specialist for GERD, manometry, pH monitoring,
              and functional digestive evaluation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/acid-reflux-treatment-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View GERD Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function GenericServicePage({
  service,
}: {
  service: (typeof gastroMedicineServices)[number];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
      },
      {
        "@type": "MedicalWebPage",
        name: service.title,
        description: service.description,
        url: `${siteUrl}/gastro-medicine/${service.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-slate-950">
      <JsonLd data={schema} />
      <section className="border-b bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <nav className="text-sm font-medium text-slate-600">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gastro-medicine">Gastro Medicine</Link>
            <span className="mx-2">/</span>
            <span>{service.title}</span>
          </nav>
          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            {service.content.intro}
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-[1fr_0.65fr] md:px-6">
        <article className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">Diagnosis and Treatment</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {service.content.diagnosis}
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              {service.content.treatment}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Symptoms</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {service.content.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200">
              {service.content.faqs.map((faq) => (
                <div key={faq.q} className="p-5">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
        <aside className="h-fit rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
          <h2 className="text-xl font-semibold">Why Choose Myra City Hospital?</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
            {service.content.whyChoose.map((item) => (
              <li key={item} className="rounded-md bg-white p-3">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={hospital.phoneHref}
            className="mt-6 block rounded-md bg-blue-800 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Call {hospital.phone}
          </a>
        </aside>
      </section>
    </main>
  );
}

export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = gastroMedicineServices.find((item) => item.slug === slug);

  if (!service) return notFound();

  if (slug === endoscopySlug) {
    return <EndoscopyPage />;
  }

  if (slug === colonoscopySlug) {
    return <ColonoscopyPage />;
  }

  if (slug === fattyLiverSlug) {
    return <FattyLiverPage />;
  }

  if (slug === acidRefluxSlug) {
    return <AcidRefluxPage />;
  }

  if (slug === ercpSlug) {
    return <ErcpPage />;
  }

  if (slug === upperEndoscopySlug) {
    return <UpperEndoscopyPage />;
  }

  if (slug === capsuleEndoscopySlug) {
    return <CapsuleEndoscopyPage />;
  }

  if (slug === eusSlug) {
    return <EusPage />;
  }

  if (slug === giBiopsySlug) {
    return <GiBiopsyPage />;
  }

  if (slug === motilityStudiesSlug) {
    return <MotilityStudiesPage />;
  }

  return <GenericServicePage service={service} />;
}
