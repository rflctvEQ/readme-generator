// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if  (license.license == 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license.license == 'GNU General Public License v3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
    } else if (license.license == 'Apache License v2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license.license == 'Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-green.svg)](https://unlicense.org/)`
    } else {
        return '';
    };
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if  (license.license == 'MIT License') {
        return `[MIT License link](https://www.mit.edu/~amini/LICENSE.md)`
    } else if (license.license == 'GNU General Public License v3.0') {
        return `[GNU General Public License v3.0 link](https://www.gnu.org/licenses/gpl-3.0.en.html)`
    } else if (license.license == 'Apache License v2.0') {
        return `[Apache License v2.0 link](https://www.apache.org/licenses/LICENSE-2.0)`
    } else if (license.license == 'Unlicense') {
        return `[Unlicense link](https://unlicense.org/)`
    } else {
        return '';
    };
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if  (license.license == 'MIT License') {
        return `Copyright (c) 2021 ${license.title}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    } else if (license.license == 'GNU General Public License v3.0') {
        return `${license.title}
Copyright (C) 2021  ${license.myName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`
    } else if (license.license == 'Apache License v2.0') {
        return `Copyright 2021 ${license.myName}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    } else if (license.license == 'Unlicense') {
        return `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>`
    } else {
        return '';
    };
}

// Function for rendering markdown for Tests section based on user input
function generateTestsMd(data) {
    if (!data.tests == '') {
        return `
## Tests
${data.tests}`
    } else {
        return '';
    }
}

// Function for rendering markdown for License section based on user input 
function generateLicenseMd(data) {
    if (!renderLicenseBadge(data) == '') {
    return `
## License
${renderLicenseBadge(data)}

${renderLicenseLink(data)}

${renderLicenseSection(data)}
`
    } else {
        return '';
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
    // console.log(data);
  return `# ${data.title}
  
${renderLicenseBadge(data)}

## Description 
${data.description}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation 
${data.installation}

## Usage 
${data.usage}

## Credits 

### Number of contributers: ${data.numContributers}  

${data.myName}  
${data.contributer1}  
${data.contributer2}  
${data.contributer3}  
${data.contributer4}  

${generateTestsMd(data)}

## Questions
Have questions? Email me at: [${data.email}](mailto:${data.email}).

You can also visit my GitHub profile: [Link to ${data.myName}'s GitHub profile](https://github.com/${data.gitHubUser})

${generateLicenseMd(data)}


This README was generated using [rflctvEQ's README-generator.](https://github.com/rflctvEQ/readme-generator) 
`};

module.exports = generateMarkdown;
