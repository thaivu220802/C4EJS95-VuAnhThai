import { jobData } from './jobData.js';
const JOB_DATA = jobData.hits;

// Get all the job hits

console.log(`Job hits:`);
console.log(JOB_DATA);

// Get the first job hit

console.clear();
console.log(`Job hits:`);
console.log(JOB_DATA[0]);

// Get jobTitle of the first job hit

console.clear();
console.log(`First job title:`);
console.log(JOB_DATA[0].jobTitle);

// Get the benefits of the first job hit

console.clear();
console.log(`Job hits:`);
console.log(JOB_DATA[0].benefits);

// Print out ALL benefitValues of the first job hit

console.clear();
const jobBenefits = JOB_DATA[0].benefits.map(x => x.benefitValue);
console.log(`First job hit benefit:`);
for (let i = 0; i < jobBenefits.length; i ++) {
    console.log(`- ${jobBenefits[i]}.`);
}

// Log out jobTitle and benefitValue of ALL job hits

console.clear();
let jobLength = JOB_DATA.length;
for(let i = 0; i < jobLength; i ++) {
    console.log(JOB_DATA[i].jobTitle);
    const jobBenefits = JOB_DATA[i].benefits.map(x => x.benefitValue);
    console.log(`Benefits:`);
    for (let j = 0; j < jobBenefits.length; j ++) {
        console.log(`- ${jobBenefits[j]}.`);
    }
    console.log('-'.repeat(20));
}

// Log out jobTitle, locations, skills, jobSalary and benefitValues of ALL job hits

console.clear();
for(let i = 0; i < jobLength; i ++) {
    console.log(`Title: ${JOB_DATA[i].jobTitle}`);
    console.log(`Salary: ${JOB_DATA[i].jobSalary}`);
    console.log(`Locations:
    ${JOB_DATA[i].locationIds}`);
    const jobBenefits = JOB_DATA[i].benefits.map(x => x.benefitValue);
    console.log(`Benefits:`);
    for (let j = 0; j < jobBenefits.length; j ++) {
        console.log(`- ${jobBenefits[j]}.`);
    }
    console.log(`Skills:`)
    for (let j = 0; j < JOB_DATA[i].skills.length; j ++) {
        console.log(`- ${JOB_DATA[i].skills[j]}.`);
    }
    console.log('-'.repeat(20));
}