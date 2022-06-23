// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licensePicked = data.license;

  let licenseBadge = "";

  if (licensePicked === "MIT") {
    licenseBadge = `![License](https://img.shields.io/badge/licnese-MIT-blue.svg)`;
    return licenseBadge;
  }
  if (licensePicked === "Apache") {
    licenseBadge =
      `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      return licenseBadge;
  }
  if (licensePicked === "Boost") {
    licenseBadge =
      `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
      return licenseBadge;
  }
  if (licensePicked === "BDS 3-Clause") {
    licenseBadge =
      `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
      return licenseBadge;
  } if (licensePicked === 'None') {
    return licenseBadge;
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseTableOfContents = (data) => {
  const licensePicked = data.license;
 
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return "- [License](#license)";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licensePicked = data.license;
  
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return `# License
    ${renderLicenseBadge(data)}`;
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Test](#test)
  ${renderLicenseTableOfContents(data)}
  - [Questions](#questions)
 
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors

  ${data.contributing}
  
  ## Test

  ${data.test}

  ${renderLicenseSection(data)}

  ## Questions

  If you have any questions, contact ${data.email}. <br />
  Github repo: https://github.com/${data.username}

`;
}

module.exports = {generateMarkdown};

