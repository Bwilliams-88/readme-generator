// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }
  if (license === 'None'){
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'MIT'){
//     return 'MIT License: https://opensource.org/licenses/MIT'
//   }
//   if (license === 'Apache2.0'){
//     return 'Apache2.0 License: https://opensource.org/licenses/Apache-2.0'
//   }
//   if (license === 'IBM'){
//     return 'IBM License: https://opensource.org/licenses/IPL-1.0'
//   }
//   if (license === 'None'){
//     return ''
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseInfo = {
    'MIT': {
      name: 'MIT License',
      url: 'https://opensource.org/licenses/MIT'
    },
    'Apache2.0': {
      name: 'Apache2.0 License',
      url: 'https://opensource.org/licenses/Apache-2.0'
    },
    'IBM': {
      name: 'IBM License',
      url: 'https://opensource.org/licenses/IPL-1.0'
    },
  };

  if (licenseInfo.hasOwnProperty(license)) {
    const licenseName = licenseInfo[license].name;
    const licenseURL = licenseInfo[license].url;
    const licenseSection = `This project is licensed under [${licenseName}](${licenseURL}).`;
    return licenseSection;
  } else {
    return 'Invalid license type'
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const contents = {
    installation: '#installation-instructions',
    usage: '#usage-information',
    license: '#license',
    contribution: '#contribution-guidelines',
    test: '#test-instructions',
    questions: '#questions',
  }
  return `# ${data.title}

${renderLicenseBadge(data.license)}


# Description
${data.description}

# Table of Contents
[Installation Instructions](${contents.installation})\n
[Usage Information](${contents.usage})\n
[License](${contents.license})\n
[Contribution Guidelines](${contents.contribution})\n
[Test Instructions](${contents.test})\n
[Questions](${contents.questions})\n

# Installation Instructions
${data.installation}

# Usage Information
${data.usage}

# License
${renderLicenseSection(data.license)}


# Contribution Guidelines 
${data.contribution}

# Test Instructions
${data.test}

# Questions
If you have any questions you can reach me here!\n

[Github](${data.github})\n
(${data.email})

`;
}

module.exports = generateMarkdown;
