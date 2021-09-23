---
layout: post
title: NEON Biorepository Symbiota Portal Redesign
featured: true
author: laura
tags: [symbiota, php, javascript, html, css, design, responsive-design]
image: '/images/posts/neon-after.png'
---

One of my first tasks as a biodiversity informatician for the NEON Biorepository at Arizona State University was to transform the visuals of the [Symbiota-based portal used for the NEON Biorepository Data Portal](https://biorepo.neonscience.org/).

I had to borrow all the design elements applied to the [NEON Science Portal](https://www.neonscience.org/) at the time (early 2019), and customize Symbiota's PHP and CSS files to adapt to these guidelines. As you can see in the slider below, Symbiota ships with a very basic, non-mobile responsive template.

 <div id='biorepo-compare' class='compare-container'>
    <div class='img background-img'></div>
    <div class='img foreground-img'></div>
    <input type='range' min='1' max='100' value='50' class='slider' name='biorepo-slider' id='biorepo-slider' oninput='slideCompare(this)' data-cont='biorepo-compare'>
    <div class='slider-button'></div>
  </div>
  *Slide the bar to reveal the changes made in the basic Symbiota-Light design to customize the NEON Biorepository Data Portal. [See the live portal in its full glory](https://biorepo.neonscience.org/portal/)*.

From this customization experiment, and, in an effort to make it easier for other developers to change Symbiota portals visuals, I have also proposed a restructuring in the Symbiota templating system, by removing table elements that were used before for layouts, and applying a system similar to what is used in WordPress and other PHP frameworks, where the `head` element is dynamically included and can be adapted to use custom CSS and JavaScript files. This is the system that is currently in place, and you can view the code in [Symbiota-Light GitHub repository](https://github.com/BioKIC/Symbiota-light).

  <script src='{{ base.url | prepend: site.url }}/js/compare-slider.js'></script>