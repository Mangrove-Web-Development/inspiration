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
      icon: wysiwyg
      value:
        _id: general_content # use file name w/ underscores
        general_content_html:
    # ———
    # Large Intro Paragraph
    # ———
    - label: Large Intro Paragraph
      icon: notes
      value:
        _id: lg_intro_paragraph # use file name w/ underscores
        large_intro_paragraph:
            # ———
    # Full Width Image
    # ———
    - label: Full Width Image
      icon: notes
      value:
        _id: full_w_image # use file name w/ underscores
        full_w_image:
    # ———
    # Team Section
    # ———
    - label: Team Section
      icon: groups
      value:
        _id: team # use file name w/ underscores
        intro_heading:
        intro_text:
        add_intro: false
        team_section_title:
        team_member:
            - name:
              job_title:
              bio_html:
              image:
    # ———
    # Our Customers
    # ———
    - label: Customers
      icon: notes
      value:
        _id: customers
        intro_heading:
        customer_sections:
        - customer_name:
          case_study_url:
    # ———
    # Video Embed
    # ———
---