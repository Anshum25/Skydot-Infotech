import urllib.request
from bs4 import BeautifulSoup
import re
import os

urls = [
    ("skyerpnext", "https://skyerpnext.in/"),
    ("skydotinfotech", "https://skydotinfotech.com/"),
    ("nivasync", "https://www.nivasync.in/")
]

os.makedirs("scratch", exist_ok=True)

for name, url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(html, features="html.parser")

        # kill all script and style elements
        for script in soup(["script", "style"]):
            script.extract()    # rip it out

        # get text
        text = soup.get_text(separator='\n')

        # break into lines and remove leading and trailing space on each
        lines = (line.strip() for line in text.splitlines())
        # break multi-headlines into a line each
        chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
        # drop blank lines
        text = '\n'.join(chunk for chunk in chunks if chunk)

        with open(f"scratch/{name}.txt", "w", encoding="utf-8") as f:
            f.write(f"URL: {url}\n\n{text}")
        print(f"Successfully scraped {url}")
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")
