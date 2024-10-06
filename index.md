---
layout: home
---

# Welcome to My Ethical Hacking Journey

## Recent Posts

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date_to_string }}</p>
  <p>{{ post.excerpt }}</p>
{% endfor %}

[View all OverTheWire posts](/overthewire/)