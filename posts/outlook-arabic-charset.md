---
layout: layout.liquid
title: Outlook Desktop breaking unicode on its own
tags: ['post', 'email dev', 'outlook', 'unicode']
---

# {{title}}

Outlook Desktop yet found a new way to trick me. And it did cost me several hours to debug this one.

We build emails that get translated in different languages. But then I found out Outlook Desktop broke the email styling.
After several hours of debugging, trying to identify where the issue was coming from, I found a new Oulook magic:

It was creating some encoding issue.
Even though I had already set the unicode in the `<head>` of my email:

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

but actually it was encoding it as arabic.
Yet for some reason when writing the email in spanish it would respect the encoding.
It seems like when Outlook detect some spanish characters such as `á` then it would not automatically set the encoding on arabic anymore.
hence the small hack:

```html
<!-- START hack to force charset utf-8 automatic picking from Outlook Desktop  -->
<div
  style="display:none; font-size:1px; color:#333333; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;"
>
  é á
</div>
<!-- END hack to force charset automatic picking from Outlook Desktop  -->
```

it ain't pretty but it works. 1 Outlook problem solved at a time :wink:
