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
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Apache2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'IBM'){
    return 'https://opensource.org/licenses/IPL-1.0'
  }
  if (license === 'None'){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}


# Description
${data.description}

#Table of Contents

# Installation Instructions
${data.installation}

# Usage Information
${data.usage}

# License
${renderLicenseLink(data.license)}

# Contribution Guidelines 
${data.contribution}

# Test Instructions
${data.test}

# Questions


`;
}

module.exports = generateMarkdown;
