// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  return ` 
  # ${userResponses.title}

  ## Description

  ${userResponses.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [License] (#License)
  - [Badges](#Badges)
  - [Questions](#Questions)
  - [Github Info](#Github)
 
  ## Installation

  ${userResponses.installation}

  ## Usage

  ${userResponses.usage}

  ## Contributors

  ${userResponses.contributing}
  
  ## Test

  ${data.test}

  ## License

  ${userResponses.license}

  ## Badges

  ${userResponses.badge}

  ## Questions

  If you have any questions, contact ${data.email}.
  Github username: ${data.username}.
`;
}



