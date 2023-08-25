
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  
  ${answers.description}
  
  ## Installation
  
  To install all modules and dependencies, run
  
  \`\`\`
  ${answers.installation}
  \`\`\`
  
  ## Usage
  
  ${answers.usage}
    
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  In order to test the application, run
  
  \`\`\`
  ${answers.test}
  \`\`\`
`;
}

module.exports = generateMarkdown;
