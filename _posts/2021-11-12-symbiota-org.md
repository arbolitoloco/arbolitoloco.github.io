---
layout: post
title: Symbiota.org Revamp
featured: true
author: laura
tags: [symbiota, wordpress, css]
image: "/images/posts/symbiota.org_revamped-detail-small.jpg"
---

Since the Symbiota Support Hub has moved most of the efforts in creating documentation and help resources to the [Symbiota Docs]() website and repository, I was tasked with revamping the main [Symbiota.org]() WordPress website.

I've used the stylish logo created by Andy Miller (reworked by Samanta Orellana) to pick a color palette that was not too flashy. I reworked the content from the original front-page (initially worked on by Cat Chapman and later by Katelin Pearson) to adapt it to a modern layout. I have also changed fonts and font-sizes to make the looks aligned with the ones I proposed for the [Symbiota Docs]() website.

 <div id='symbiota-compare' class='compare-container'  style='height:800px'>
    <div class='img background-img'></div>
    <div class='img foreground-img'></div>
    <input type='range' min='1' max='100' value='50' class='slider' name='symbiota-slider' id='symbiota-slider' oninput='slideCompare(this)' data-cont='symbiota-compare'>
    <div class='slider-button'></div>
  </div>
  *Slide the bar to reveal the changes made in the original Symbiota.org design. [See the live portal in its full glory]()*.

![Full screenshot of the front-page of Symbiota.org](/images/posts/symbiota.org_revamped.jpg)
_Full screenshot of the front-page of Symbiota.org (taken in November 2021)_

  <script src='{{ base.url | prepend: site.url }}/js/compare-slider.js'></script>
