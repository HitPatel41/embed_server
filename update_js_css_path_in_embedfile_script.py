import re
import os

# Paths
A_BUILD_DIR = "../parth_frontend_popup/build"
B_EMBED_FILE = "embed.js"

# Step 1: Define the directories
css_dir = os.path.join(A_BUILD_DIR, 'static/css')
js_dir = os.path.join(A_BUILD_DIR, 'static/js')

# Step 2: Fetch the current CSS and JS file names from the build directory
css_files = [f for f in os.listdir(css_dir) if f.startswith('main') and f.endswith('.css')]
js_files = [f for f in os.listdir(js_dir) if f.startswith('main') and f.endswith('.js')]

if not css_files or not js_files:
    raise FileNotFoundError("Could not find the required CSS or JS files in the build directory.")

css_file = css_files[0]
js_file = js_files[0]

css_path = f'https://admin.parth2success.com/popup/static/css/{css_file}'
js_path = f'https://admin.parth2success.com/popup/static/js/{js_file}'

print(f"CSS Path: {css_path}")
print(f"JS Path: {js_path}")

# Step 3: Update the embed.js file in the B directory
with open(B_EMBED_FILE, 'r') as file:
    embed_content = file.read()

embed_content = re.sub(r"cssLink.href = 'https://admin\.parth2success\.com/popup/static/css/.*?\.css';",
                       f"cssLink.href = '{css_path}';", embed_content)
embed_content = re.sub(r"appScript.src = 'https://admin\.parth2success\.com/popup/static/js/.*?\.js';",
                       f"appScript.src = '{js_path}';", embed_content)

with open(B_EMBED_FILE, 'w') as file:
    file.write(embed_content)

print("embed.js has been updated successfully.")
