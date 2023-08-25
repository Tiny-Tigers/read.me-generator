
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Installation
  
  To install all modules and dependencies, run
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  In order to test the application, run
  
  \`\`\`
  ${data.test}
  \`\`\`
`;
}

module.exports = generateMarkdown;
