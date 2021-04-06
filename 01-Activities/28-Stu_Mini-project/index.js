const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name:'state',
            message:'What state do you live in?',
        },
        {
            type: 'input',
            name: 'city',
            message: 'What city do you live in?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is the URL to your LinkedIn profile?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the URL to your Github profile?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Tell me a little about yourself!',
        }
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
        console.log(data);

        const htmlData = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="style.css"></link>
        </head>
        <body>
            <div id="container">
                <h1 id="name">${data.name}</h1>
                <section id="aboutMe">
                    <h2>About Me</h2>
                    <p>${data.bio}</p>
                </section>
                <h2 id="contactHeader">Contact Me</h2>
                <section id="contactMe">
                    <p>Location: ${data.city}, ${data.state}</p>
                    <p><a href="${data.github}">Github</a></p>
                    <p><a href="${data.linkedin}">Linkedin</a></p>
                </section>
            </div>
        </body>
        </html>
        `
        fs.writeFile(filename,htmlData, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });