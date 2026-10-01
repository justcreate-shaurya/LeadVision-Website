import os
import re
import glob

# Find all HTML files
html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Use regex to find and replace the <style>...</style> block
    # It might span multiple lines, so we use re.DOTALL
    new_content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="global.css">', content, flags=re.DOTALL)
    
    # Add animate-up class to sections if they don't have it
    # We want to keep existing classes if any. Let's just add it to <section>
    new_content = new_content.replace('<section>', '<section class="animate-up">')
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
    else:
        print(f"No changes for {file}")
