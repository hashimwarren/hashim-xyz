from playwright.sync_api import sync_playwright
import os

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local file
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Check for key elements
        print("Checking for header...")
        header = page.locator("header h1")
        assert header.inner_text() == "Hashim Warren"

        print("Checking for Work History...")
        work_section = page.locator("#work h2")
        assert work_section.inner_text() == "Work History"

        print("Checking for Projects...")
        projects_section = page.locator("#projects h2")
        assert projects_section.inner_text() == "Projects"

        # Take a screenshot
        print("Taking screenshot...")
        screenshot_path = "verification/homepage_screenshot.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_homepage()
