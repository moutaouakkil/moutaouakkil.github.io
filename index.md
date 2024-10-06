---
layout: default
title: Home
---

# Welcome to My Ethical Hacking Journey

## About Me

I'm Othmane Moutaouakkil, an aspiring ethical hacker documenting my journey through various cybersecurity challenges and learning platforms.

## What You'll Find Here

- **OverTheWire Writeups**: Detailed solutions and explanations for the OverTheWire wargames, including Bandit, Natas, and more.
- **Hack The Box Challenges**: Walkthroughs of both Linux and Windows boxes from Hack The Box.
- **TryHackMe Rooms**: Guides and solutions for various TryHackMe challenges.

## Recent Posts

{% for post in site.posts limit:5 %}
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p>{{ post.date | date_to_string }}</p>
  <p>{{ post.excerpt }}</p>
{% endfor %}

## Skills & Tools

- Linux Command Line
- Python Scripting
- Network Security
- Web Application Security
- Penetration Testing Tools (Nmap, Metasploit, Burp Suite, etc.)

## Get in Touch

Feel free to reach out if you have any questions, suggestions, or just want to connect!

- GitHub: [moutaouakkil](https://github.com/moutaouakkil)
- Twitter: [@otmnmt](https://twitter.com/otmnmt)
- Email: contact@otmnmt.com

Happy hacking!