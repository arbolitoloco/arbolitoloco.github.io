---
layout: post
title: Symbiota Label Format Generator
featured: true
author: laura
tags: [javascript, php, json, css, symbiota, labels]
image: "/images/posts/symbiota-label-generator-screenshot.jpg"
---

Many Symbiota portals are used as natural history collections management software. One of the features available for curators in Symbiota is the ability to generate specimen labels for printing.
In 2020/2021, Ed Gilbert and I re-worked the way that label formats can be generated and saved for re-use.

Label declarations are provided in Symbiota in JSON format, and are further customized via front-end manipulation of CSS and JavaScript. I have created a drag & drop interface for users to define custom label formats in a user-friendly manner. A preview of that interface is available [in this Symbiota Label Generator prototype](https://laura.rochaprado.com/symbiota-label-generator/). This prototype has been integrated into Symbiota-Light in late 2020.

![Screenshot of Symbiota Label Format Generator Prototype](/images/posts/symbiota-label-generator-screenshot.jpg)

This tool was prototyped entirely in vanilla JavaScript, HTML and CSS, and it outputs and imports JSON files with the configurations for the label format created by dragging and dropping the available fields into the specific label blocks. The user can also format each field and line, by using the control panel on the right to select font types and weights, as well as spacing and position in line.

All portals using Symbiota-Light as their framework should have this feature implemented, available through the label format editor, by clicking in the "visual editor" tool in the form. In Symbiota-Light, the [tool was rewritten to adjust to PHP](https://github.com/BioKIC/Symbiota-light/pull/20/commits/a4a4938e2b7ed16a26b9649049c8762402d9527b).

Further customizations (apart from the font and spacing styles) require detailed manipulation of the configuration files. I have assisted (and continue to assist) curators and collection managers with more specific label requirements. A gallery of selected labels can be seen [in the Custom Symbiota Labels page](/2021/01/20/custom-symbiota-labels).

I'm adjusting this tool to work as a standalone label generator, so that anyone can upload (locally) a spreadsheet, create a label format and print labels without having to be a Symbiota user.
