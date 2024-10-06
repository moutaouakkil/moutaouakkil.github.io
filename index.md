---
layout: default
title: Home
---

# Welcome to My Ethical Hacking Journey

## Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}