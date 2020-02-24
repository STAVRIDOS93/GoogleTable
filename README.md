# GoogleTable
Getting data from google table, and rendering in a document

# Installation
tabs = true/false // adds the name of sheets to the tab buttons;
link = link to google table ('https://docs.google.com/spreadsheets/d/14-jNTfF24BWJ72r6hKumpsqJ0q8LCjccDMzKCtHepe4/htmlview");
template { pattern strings } = `<div>{{nameColumns}}</div>` // the first line is used to name the properties of the object;
parent { string } = Parent element selector

window.GoogleTable(
    link,
    template,
    parent,
    tabs
)