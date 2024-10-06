---
   layout: default
   title: Home

    # Feel free to add content and custom Front Matter to this file.
    # To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
   
   ---

   # Welcome to My Ethical Hacking Journey

   Here you'll find write-ups and tutorials on various cybersecurity challenges and topics.

   ## Recent Posts

   {% for post in site.posts limit:5 %}
   - [{{ post.title }}]({{ post.url | relative_url }})
   {% endfor %}