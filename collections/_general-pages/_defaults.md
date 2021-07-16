---
layout: page
title:
date:
page_blocks: []
_array_structures:
  # —————————————————————————————————————
  # Page Blocks (Layers)
  # —————————————————————————————————————
  page_blocks:
    # ———
    # General Content
    # ———
    - label: General Content
      icon: wysiwyg # fonts.google.com/icons
      value:
        _id: general_content # use file name w/ underscores
        general_content_html:
    # ———
    # Large Intro Paragraph
    # ———
    - label: Large Intro Paragraph
      icon: notes # fonts.google.com/icons
      value:
        _id: lg_intro_paragraph # use file name w/ underscores
        large_intro_paragraph:
    # ———
    # Full Width Image
    # ———
    - label: Full Width Image
      icon: insert_photo # fonts.google.com/icons
      value:
        _id: full_w_image # use file name w/ underscores
        full_w_image:
    # ———
    # Team Section
    # ———
    - label: Team Section
      icon: groups # fonts.google.com/icons
      value:
        _id: team # use file name w/ underscores
        intro_heading:
        team_member:
            - name:
              job_title:
              bio_html:
              image:
    # ———
    # Our Customers
    # ———
    - label: Customers
      icon: crop_portrait # fonts.google.com/icons
      value:
        _id: customers # use file name w/ underscores
        intro_heading:
        customer_sections:
        - customer_name:
          case_study_url:
    # ———
    # Video Embed
    # ———
    - label: Youtube Embed Code
      icon: movie # fonts.google.com/icons
      value:
      _id: youtube_embed_code_block # use file name w/ underscores
          youtube_embed_code_block:
---