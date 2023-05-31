---
layout: post
title: Symbiota EML Export Module
featured: true
author: laura
tags: [symbiota, eml, edi, php, sql, xml]
image: "/images/posts/edi-screenshot.jpg"
---

The [NEON Biorepository Data Portal](https://biorepo.neonscience.org/) is a Symbiota portal that curates not only biological specimens data, but also non-biological data, such as soil samples. 

Biological specimens with reliable data are published in the [GBIF](https://www.gbif.org/) network. However, there are also some collections that will never be published to GBIF for a variety of reasons.

To improve data discoverability, the NEON Biorepository Data Portal publishes all data that does not fit to GBIF into the [Environmental Data Initiative](https://environmentaldatainitiative.org/) (EDI) website.

While GBIF uses the [Darwin Core](https://dwc.tdwg.org/) standard, EDI uses the [Ecological Metadata Language](https://eml.ecoinformatics.org/) (EML) standard.

With this in mind, I was tasked with designing and coding a module that manipulates specimens' data on demand to export data packages in the EML format (including Darwin Core compliant fields) ready to be published on the EDI Data Portal.

This module is available currently only at the NEON Biorepository Data Portal, but it can be adapted to other Symbiota portals if there is demand.

![Symbiota EML Export Module Screenshot](/images/posts/edi-screenshot.jpg)
_Screenshot of an example of a package produced by the EML export module at the NEON Biorepository Data Portal, and then published to EDI_ - [See it on EDI](https://portal.edirepository.org/nis/mapbrowse?scope=edi&identifier=1312&revision=1)