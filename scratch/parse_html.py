import os
from bs4 import BeautifulSoup

html_file_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\5dede23f-1137-4884-bbe3-f214b39a7a6b\.system_generated\steps\323\content.md"

if os.path.exists(html_file_path):
    with open(html_file_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # The file has a header like "Title: Live Content..." before the HTML
    # Let's find the start of the HTML
    html_start = html_content.find("<!DOCTYPE html>")
    if html_start != -1:
        html_content = html_content[html_start:]

    soup = BeautifulSoup(html_content, "html.parser")
    
    links = set()
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('http') and 'skydot' in href.lower():
            links.add(href)
        elif href.startswith('/'):
            links.add(f"https://skydotinfotech.com{href}")
            
    print("Links found:")
    for link in sorted(list(links)):
        print(link)
        
    print("\n--- TEXT CONTENT ---")
    text = soup.get_text(separator='\n', strip=True)
    lines = text.split('\n')
    
    # Print the first 100 non-empty lines to get an idea of the content
    count = 0
    for line in lines:
        if line.strip():
            print(line.strip())
            count += 1
            if count >= 100:
                break
else:
    print("File not found")
