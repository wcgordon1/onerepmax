Here's how to handle large-scale content translation efficiently:
Separate Translation Files
Instead of one massive config.ts, split translations into:
UI translations (current setup for buttons, navigation, etc.)
Content translations (blog posts, articles)
Content Structure
Create a content directory structure like:
content/
  blog/
    en/
      post-1.md
      post-2.md
    fr/
      post-1.md
      post-2.md
    es/
      post-1.md
      post-2.md

Translation Management
Two main approaches:
A. Content Management System (CMS) Approach:
Use a headless CMS like Strapi or Contentful
Store all blog content there
Use their built-in localization features
Pull content at build time
B. File-based Approach:
Use Markdown/MDX files
Implement a translation workflow with tools like:
Crowdin
Lokalise
POEditor
These tools can:
Manage translation files
Export to your repo
Track changes
Handle versioning
Build Process
At build time, generate pages from content files
Use Astro's content collections
Cache translations
Only load translations for the current language
This way:
UI translations stay in i18n config
Content translations are managed separately
Better performance
Easier to maintain
Scalable for thousands of pages
Would you like me to elaborate on any of these approaches?