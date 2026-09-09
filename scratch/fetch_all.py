import asyncio
import aiohttp
from bs4 import BeautifulSoup
import os

urls = [
    "https://skydotinfotech.com/about/",
    "https://skydotinfotech.com/contact/",
    "https://skydotinfotech.com/author/skydot/",
    
    # Products
    "https://skydotinfotech.com/products/accounting-software/",
    "https://skydotinfotech.com/products/agriculture-directory/",
    "https://skydotinfotech.com/products/e-commerce-shopping-cart/",
    "https://skydotinfotech.com/products/education-directory/",
    "https://skydotinfotech.com/products/erp/",
    "https://skydotinfotech.com/products/gujpe/",
    "https://skydotinfotech.com/products/irimee/",
    "https://skydotinfotech.com/products/iriset/",
    "https://skydotinfotech.com/products/irtpms/",
    "https://skydotinfotech.com/products/mcq-software/",
    "https://skydotinfotech.com/products/member-directory/",
    "https://skydotinfotech.com/products/omr-software/",
    "https://skydotinfotech.com/products/online-examination-system/",
    "https://skydotinfotech.com/products/question-paper-software/",
    "https://skydotinfotech.com/products/real-estate-portal/",
    "https://skydotinfotech.com/products/shalamart/",
    "https://skydotinfotech.com/products/tpmis/",
    "https://skydotinfotech.com/products/transport-software/",
    
    # Services
    "https://skydotinfotech.com/services/bulk-sms/",
    "https://skydotinfotech.com/services/business-email/",
    "https://skydotinfotech.com/services/content-management-system/",
    "https://skydotinfotech.com/services/domain-registration/",
    "https://skydotinfotech.com/services/erp-solution/",
    "https://skydotinfotech.com/services/g-suite-email/",
    "https://skydotinfotech.com/services/hr-management-system/",
    "https://skydotinfotech.com/services/mobile-application-development/",
    "https://skydotinfotech.com/services/office-365-solution/",
    "https://skydotinfotech.com/services/seo-search-engine-optimization/",
    "https://skydotinfotech.com/services/software-development/",
    "https://skydotinfotech.com/services/ssl-certificates/",
    "https://skydotinfotech.com/services/web-development/",
    "https://skydotinfotech.com/services/web-hosting/",
]

async def fetch(session, url):
    try:
        async with session.get(url, timeout=15) as response:
            if response.status == 200:
                html = await response.text()
                soup = BeautifulSoup(html, "html.parser")
                
                # Remove header, footer, nav to get core content
                for element in soup(["header", "footer", "nav", "script", "style"]):
                    element.extract()
                    
                text = soup.get_text(separator='\n', strip=True)
                # compress newlines
                text = '\n'.join([line for line in text.split('\n') if line.strip() != ''])
                return f"\n\n{'='*50}\n{url}\n{'='*50}\n" + text
            else:
                return f"\n\n{'='*50}\n{url}\n{'='*50}\nFailed with status: {response.status}"
    except Exception as e:
        return f"\n\n{'='*50}\n{url}\n{'='*50}\nFailed with exception: {e}"

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        
    output_path = r"C:\Users\Admin\Desktop\Skydot Infotech\scratch\all_content.txt"
    with open(output_path, "w", encoding="utf-8") as f:
        for r in results:
            f.write(r)
            
    print(f"Content extracted to {output_path}")

if __name__ == "__main__":
    asyncio.run(main())
