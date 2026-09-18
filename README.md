# Cherry Hill Estate

Lovable Prompt — Cherry Hill Estate Website

Project Overview

Build a classic, elegant landing page for Cherry Hill, a historic mansion estate located in Roanoke, Virginia. The website will eventually be a full marketing and booking site for the property, but for now I need a polished single-page landing site with a navigation structure that stubs out future pages.

Aesthetic & Tone

Vibe: Classic and elegant. Think timeless Southern estate, boutique heritage hotel, understated luxury.

Typography: Pair a refined serif for headings (something like Playfair Display, Cormorant Garamond, or EB Garamond) with a clean, readable serif or humanist sans-serif for body copy (e.g., Lora, Source Serif, or Inter).

Color palette: Warm, traditional tones — cream/ivory backgrounds, deep forest green or burgundy as accents, soft gold for highlights, charcoal for body text. Avoid anything trendy, neon, or overly modern.

Feel: Generous whitespace, subtle grain or paper textures if tasteful, soft shadows, never flashy. The design should feel heirloom, not corporate.

Primary Focus

The landing page should emphasize the estate itself — its grandeur, architecture, and sense of place. Photography is the hero. Use large, cinematic image placeholders throughout. Text should be minimal and evocative, letting the visuals lead.

Page Structure (Single-Page Landing)

Navigation bar (sticky, transparent over hero, solid on scroll)

Logo/wordmark: "Cherry Hill" in elegant serif

Links: Home · History · Rent a Room · About the Owners · Contact

Links for pages not yet built should route to placeholder pages that say "Coming Soon" with the same header/footer styling

Hero section

Full-viewport cinematic image placeholder of the mansion exterior (see attached image)

Overlay with the estate name in large serif type

A short, evocative tagline (e.g., "A historic estate in the heart of Roanoke, Virginia")

Subtle scroll indicator

Introduction section

Brief welcome paragraph introducing Cherry Hill. Use this copy:

Completed in 1925, Cherry Hill is a Georgian mansion designed by New York architect A. J. Bodker for industrialist Edgar M. Funkhouser. Built of brick and steel with teak floors and a sweeping curved staircase, the estate served for nearly two decades as the home of the Roanoke Fine Arts Center — the institution that would one day become the Taubman Museum of Art.

Style: centered, narrow column (max ~650px wide), generous line height, set in the body serif. A small decorative divider (thin gold line or ornamental glyph) above the paragraph would be nice.

Image gallery / grid

A curated 4–6 image grid showcasing different views of the estate (exterior, interior rooms, grounds, details)

Use placeholder images with clear labels like "Exterior — Front Facade," "Parlor," "Gardens," etc. so I know what to replace

Hover effects should be subtle (gentle zoom or soft fade)

"A Glimpse of the History" teaser

Section heading: "A Glimpse of the History"

Copy:

On a five-acre rise in South Roanoke, Cherry Hill has stood for a century. In 1965, the Funkhouser family donated the estate to the Roanoke Fine Arts Center, and for nearly two decades it served as the cultural heart of the city. Now, a hundred years after it was built, Cherry Hill begins its next chapter.

Call-to-action button: "Read the Full History" → links to the History page stub

"Stay With Us" teaser

Short paragraph inviting guests to consider renting a room

Call-to-action button: "Inquire About Rooms" → links to the Rent a Room page stub

Footer

Estate name, Roanoke, Virginia

Contact placeholder (email, phone)

Simple social icons (Instagram, Facebook)

Copyright line

Stubbed Future Pages (create routes, minimal content)

Create these as navigable routes that share the site's header and footer:

/history — History of Cherry Hill. Not a "Coming Soon" page — seed it with the following content, styled as an elegant long-form article (narrow column, serif body, large serif headings, plenty of whitespace). Include a hero image placeholder at the top labeled "Historic exterior — archival photo":

A Georgian Estate in South Roanoke

Cherry Hill was completed in 1925 on a five-acre rise in South Roanoke, designed by New York architect A. J. Bodker for Edgar M. Funkhouser. A Georgian home of brick and steel with teak floors and a swirling staircase, it was built for a generation that believed a house should last centuries.

The Fine Arts Years

In 1965, Anne Funkhouser Francis donated the family estate to the Roanoke Fine Arts Center. For nearly two decades, Cherry Hill served as the cultural heart of the city — the forerunner of what is today the Taubman Museum of Art. When the collection moved downtown in 1983, the mansion returned to private life.

A New Chapter

Now, a century after it was built, Cherry Hill begins its next chapter.

/rent-a-room — Rent a Room. "Coming Soon" placeholder that matches site styling.

/about — About the Owners. "Coming Soon" placeholder that matches site styling.

Technical Notes

Fully responsive; mobile-first

Smooth scroll behavior

Accessible (semantic HTML, proper alt text, good color contrast)

Keep the code clean and well-organized so I can extend it later

Favicon placeholder

What NOT to Do

No stock-feeling generic hotel imagery — keep placeholders clearly labeled

No animations that feel overly trendy (parallax scrolling everywhere, aggressive fades, etc.)

No chatbot widgets, popups, or cookie banners

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cherryhill.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/352e820b-e09d-41fb-8918-0433ff633da7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
