---
layout: home
title: NYPL Digital Toolkit
---

# NYPL Design Toolkit

{% for section in site.sections %}
## <a href="{{ section.url }}">{{ section.title }}</a>
{{ section.description }}
{% endfor %}