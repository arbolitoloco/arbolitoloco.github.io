---
layout: post
title: Symbiota Taxonomy Exporter Module
featured: true
author: laura
tags: [symbiota, php, sql, dwc, gbif, taxonomy]
image: "/images/posts/symbiota-tax-exporter.jpg"
---

I have been working as a biodiversity informatician, but I am also a beetle taxonomist. My group of interest, a leaf-beetle subfamily called Galerucinae, is very diverse and has a lot of species that are not yet described. Its taxonomy is, not surprisingly, chaotic and hard to follow.

One of my constant passions has been to develop tools to allow taxonomists to publish digitally versions of the tree of life of their groups of interest. In that context, ever since I started working with Symbiota, I have lobbied to enable the export of the taxonomic backbone of portals, so that the community of curators of such portals can publish and version their data in aggregators like [ChecklistBank](https://www.checklistbank.org/) and the [Catalogue of Life](https://www.catalogueoflife.org/).

In early 2023 I was tasked with designing a simple Symbiota module to export the taxonomic backbone of a portal, and to transform the data to make it ready for importing in a different Symbiota portals, or for versioning and publishing elsewhere.

The module is still in development, but the code can be previewed at [GitHub](https://github.com/BioKIC/Symbiota/tree/tax-exporter).

Once activated, this module adds a button in the Taxonomic Tree Explorer page of a portal, which allows the portal administrator to export the full taxonomic backbone or a selected node of a portal. The data is then exported into a package containing the CSV files with the full taxonomic structure of the portal, ready for importing into a different Symbiota portal.

![Symbiota Taxonomy Exporter Module Screenshot](/images/posts/symbiota-tax-exporter.jpg)
_Screenshot of the button that is added by the Taxonomy Exporter Module to a test Symbiota portal_

Futurely I plan to add the option to export the data in the format ready to publish for the ChecklistBank and the Catalogue of Life.

If you'd like to know more about this module, please contact me.