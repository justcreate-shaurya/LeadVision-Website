import glob
import re

html_files = glob.glob('*.html')
class_counts = {}
section_classes = {}

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all classes
    classes = re.findall(r'class="([^"]+)"', content)
    for c_str in classes:
        for c in c_str.split():
            class_counts[c] = class_counts.get(c, 0) + 1
            if c not in section_classes:
                section_classes[c] = set()
            section_classes[c].add(file)

# We are interested in classes that end in -grid, -list, -card, -col, -item, or start with 'stat', 'feature', 'usecase', 'pricing', 'compare', etc.
target_classes = []
for c in class_counts.keys():
    if any(k in c for k in ['grid', 'list', 'card', 'col', 'item', 'stat', 'feature', 'use', 'price', 'compare', 'right', 'metric']):
        target_classes.append(c)

target_classes.sort()

print("Potentially unstyled or layout classes:")
for c in target_classes:
    print(f"- {c} (in {len(section_classes[c])} files: {', '.join(list(section_classes[c])[:3])})")
