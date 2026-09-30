import glob

html_files = glob.glob('*.html')
count = 0

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the incorrect homepage reference with the correct one
    new_content = content.replace('href="leadvision-homepage-v2.html"', 'href="01-leadvision-homepage-v2.html"')
    new_content = new_content.replace('href="leadvision-homepage-v2.html#products"', 'href="01-leadvision-homepage-v2.html#products"')
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        print(f"Fixed links in {file}")

print(f"Fixed {count} files.")
