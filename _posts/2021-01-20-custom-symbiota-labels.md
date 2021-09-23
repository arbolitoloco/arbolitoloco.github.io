---
layout: post
title: Custom Symbiota labels
featured: true
author: laura
tags: [javascript, json, css, symbiota, labels]
image: "/images/posts/labels_mam.jpg"
---

Many Symbiota portals are used as natural history collections management software. One of the features available for curators in Symbiota is the ability to generate specimen labels for printing.
In 2020/2021, Ed Gilbert and I re-worked the way that label formats can be generated and saved for re-use.

Label declarations are provided in Symbiota in JSON format, and are further customized via front-end manipulation of CSS and JavaScript. I have created a drag & drop interface for users to define custom label formats in a user-friendly manner. A preview of that interface is available [in this Symbiota Label Generator prototype](https://laura.rochaprado.com/symbiota-label-generator/). This prototype has been integrated into Symbiota-Light in late 2020.

Further customizations require detailed manipulation of the configuration files. I have assisted (and continue to assist) curators and collection managers with more specific label requirements.

Here is a gallery of featured label formats that I customized to fit very specific curators' constraints:

## Vial labels

---

### NEON Mammal Skull

![image tooltip here](/images/posts/label_neon_skull_vial.jpg)

- **Symbiota Portal**: [NEON Biorepository Data Portal](https://biorepo.neonscience.org/)
- **Special features**: custom barcode image, custom size
- **Designed by**: Laura Steger, NEON Biorepository Plants & Vertebrates Collection Manager

## Box labels

---

### NEON Mammal (Wet)

![image tooltip here](/images/posts/label_neon_mam_box.jpg)

- **Symbiota Portal**: [NEON Biorepository Data Portal](https://biorepo.neonscience.org/)
- **Special features**: custom barcode image, custom size
- **Designed by**: Laura Steger, NEON Biorepository Plants & Vertebrates Collection Manager

### NEON Fish

![image tooltip here](/images/posts/label_neon_fish.jpg)

- **Symbiota Portal**: [NEON Biorepository Data Portal](https://biorepo.neonscience.org/)
- **Special features**: custom barcode image
- **Designed by**: Laura Steger, NEON Biorepository Plants & Vertebrates Collection Manager

## Packets

### Symbiota Generic Lichen Packet

![image tooltip here](/images/posts/packet_asu_lichen.jpg)

- **Symbiota Portal**: [NEON Biorepository Data Portal](https://biorepo.neonscience.org/)
- **Special features**: custom barcode image, fold marks, option to output collection short name on top of barcode image, custom size
- **Designed by**: Frank Bungartz, ASU Lichen Herbarium collection manager

### ASU Mollusks Collection

![image tooltip here](/images/posts/label_asumoc_box.jpg)

- **Symbiota Portal**: [Invert-E-Base](https://invertebase.org/)
- **Special features**: custom barcode image, custom label project name in each label, custom size
- **Designed by**: Sangmi Lee, ASU Hasbrouck Insect Collection curator
