---
layout: layout.liquid
title: Home

---

# {{title}}

This is the list of blog posts:

<ul>
{%- for post in collections.post -%}
    <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
{%- endfor -%}
</ul>
