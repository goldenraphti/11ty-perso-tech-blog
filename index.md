---
layout: layout.liquid
title: Home
---

<ul class="posts-list md:w-2/3">
{%- for post in collections.post -%}
    <li>
        <div class="divider"></div>
        <a href="{{ post.url }}">
            <span class="post-title">{{ post.data.title }}</span>
            <!-- {% if post.data.date %}
                <span class="post-date">{{ post.data.date }}</span>
            {% endif %} -->
        </a>
    </li>
{%- endfor -%}
</ul>
