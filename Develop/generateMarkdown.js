// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description

  ${input.description}

  ## Contents

  *[Installation](#installation)
  *[Contributing](#contributions)
  *[Licensing](#license)

  ## Installation
  ${input.install}

  ## Contributions
  ${input.contributions}

  ## Let's Talk!
  ${contactInfo(input)}

  ## Licensing
  ${input.license}

`;
}

module.exports = generateMarkdown;
