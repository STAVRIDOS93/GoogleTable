# GoogleTable

Getting data from google table, and rendering in a document

# Installation

<!-- tabs = true/false // adds the name of sheets to the tab buttons;
link = link to google table ('https://docs.google.com/spreadsheets/d/14-jNTfF24BWJ72r6hKumpsqJ0q8LCjccDMzKCtHepe4/htmlview");
template { pattern strings } = `<div>{{nameColumns}}</div>` // the first line is used to name the properties of the object;
parent { string } = Parent element selector

window.GoogleTable(
link,
template,
parent,
tabs
) -->

This project was bootstrapped with [AutoGoogleTable](https://github.com/STAVRIDOS93/GoogleTable).

## window.GoogleTable( link, template, parent, tabs)

properties that are passed to window.GoogleTable:

### `link {string} `

[Test link to google table](https://docs.google.com/spreadsheets/d/14-jNTfF24BWJ72r6hKumpsqJ0q8LCjccDMzKCtHepe4/htmlview)

### `template {pattern strings}: <div>{{nameColumns}}</div>`

The template you need in the form of template strings and first line is used to name the properties of the object.

### `parent {string}`

The identifier of the parent element where you want to insert the result of the script execution.

### `tabs {boolean}: true/false`

Boolean value true or false, depending on the requirements, if it is not needed, you can omit it, default false.
