# NUPL – Niyati Udyog Pvt. Ltd.

Website for **Niyati Udyog Pvt. Ltd. (NUPL)**, a construction-material distributor in Bhubaneswar, Odisha. NUPL is an authorised distributor of JSW NeoSteel. It also supplies JSW One TMT, JSW Colouron+, Finolex, JSW Cement and JSW Paints.

> *One Partner. Multiple Building Solutions. Endless Possibilities.*

The site is plain HTML, CSS and JavaScript. It has no framework, build step or dependencies.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero with the 3D JSW NeoSteel TMT image, brand strip, who we are, core products, industries, why NUPL, supply process, testimonials |
| About Us | `about.html` | Company role, product portfolio, focus areas, commitment |
| Products & Brands | `products.html` | All six brands, plus JSW NeoSteel applications and technical details |
| Industries We Serve | `industries.html` | Five customer segments and their typical requirements |
| Our Capabilities | `capabilities.html` | Five-step customer journey and why to choose NUPL |
| Contact Us | `contact.html` | Address, phone, hours and the quote request form |

## Project structure

```
NUPL/
├── index.html, about.html, products.html,
│   industries.html, capabilities.html, contact.html
└── assets/
    ├── style.css      # all styles
    ├── app.js         # shared header and footer, content data, animations
    └── tmt-hero.jpg   # JSW NeoSteel TMT bar image
```

`assets/app.js` adds the shared header, the "Request a Quote" section and the footer to every page. It also holds the content data, so these are the places to edit:

- `PRODUCTS`: product names, descriptions, uses and images
- `SEGMENTS`: industry segments
- `WHY`, `STEPS`, `TESTI`: why-choose-us points, process steps and testimonials
- `PHONE`, `ADDR`, `MAP`: contact details

## Features

- **3D TMT hero (home page only):** the JSW NeoSteel image comes forward when the page loads, tilts with the mouse, and has a light shine and a highlight that follows the cursor.
- **3D tilt on photos:** product and segment photos tilt towards the cursor, with a glare effect and a slight zoom.
- **Scroll animations:** sections reveal as you scroll, a progress bar runs along the top, the hero background moves slower than the page, and the process steps light up in turn.
- **Hover effects:** buttons pull towards the cursor, industry panels widen on hover, cards lift and icons rotate.
- **Testimonials:** change automatically every 15 seconds, with a countdown bar.
- **Products page:** sticky brand menu that highlights the current section, and expandable application sections.
- **Contact form:** checks required fields. "Enquire Now" buttons fill in the matching product.
- **Layout and motion:** works on phones, and respects the "reduce motion" accessibility setting.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server 5500
```

Then visit http://localhost:5500.

## Deploy

The site is fully static, so the folder can be uploaded as-is to GitHub Pages, Netlify, Vercel or any web host.

## Still to do

- [ ] Connect the contact form to a backend or form service. It currently only shows a confirmation message.
- [ ] Add the company email address.
- [ ] Replace the stock Unsplash photos with NUPL's own photos, starting with JSW Colouron+.

---

© 2026 Niyati Udyog Pvt. Ltd. Brand names are trademarks of their respective owners.
