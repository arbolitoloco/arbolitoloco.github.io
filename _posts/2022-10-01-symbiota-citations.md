---
layout: post
title: Symbiota Collection Citations Module
featured: true
author: laura
tags: [symbiota, citations, gbif, php, javascript, sql]
image: "/images/posts/symbiota-citation-detail.jpg"
---

To encourage data citations and to improve the discoverability of data published in Symbiota portals, I created a module that enables citation templates to be referenced by each collection in a Symbiota portal.

Each portal can have a different set of citation templates with different formats. By default, the module includes templates for a general portal citation, a collection citation, and a dataset citation. The templates are simple text files that can be edited by the portal administrator.

Once activated, the templates will be added to the portal's "Data policy" page, to each collection metadata page (profile), and to each public dataset page.

In the NEON Biorepository Data Portal, additionally, every time a data package is downloaded, the citation template for the dataset is included in a file called `CITEME.txt`. 

Finally, the module adds a GBIF widget for literature citations in datasets published at GBIF.

![Symbiota Collection Citations Module Screenshot](/images/posts/symbiota-citation-screenshot.jpg)
_Screenshot of the Symbiota Collection Citations Module as exemplified at the NEON Biorepository Data Portal_ - [See it on GitHub](https://github.com/BioKIC/symbiota-docs/)

There is some documentation about the module available at the [Symbiota Docs](https://biokic.github.io/symbiota-docs/citations/) website.