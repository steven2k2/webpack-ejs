# Exciter Theme# Style Guidelines for a Demo Website Inspired by *Exciter* (Depeche Mode)

The aesthetic of *Exciter* conveys a blend of organic, futuristic, and minimalistic elements with a dark, moody undertone. This style guide will incorporate those themes into a cohesive web design.

---

## 1. Color Palette

Inspired by the shades of green, black, and white in the album cover.


| Role         | Color Name         | Hex Code  | Notes |
|-------------|--------------------|----------|-------|
| **Primary**  | Dark Spring Green  | `#3B6C3C` | Main theme color (buttons, highlights) |
| **Secondary** | Asparagus        | `#779A5A` | Accent color (hover effects, links) |
| **Background** | Eerie Black     | `#0F1F19` | Dark moody backdrop |
| **Highlight**  | Celadon         | `#BBD3B4` | Soft green for emphasis |
| **Light**      | Honeydew        | `#DAE9D4` | Used for contrast (text on dark background) |
| **Danger/Alert** | Firebrick      | `#B22222` | For errors and warnings |

---

## 2. Typography

The typography should reflect *Exciter’s* handwritten yet futuristic look.

- **Headings (H1-H3):** *Custom handwritten font or grunge sans-serif*
    - Recommended: [Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker), [Amatic SC](https://fonts.google.com/specimen/Amatic+SC)
    - Backup: `Impact, sans-serif`

- **Body Text (P, Lists):** *Minimalist sans-serif*
    - Recommended: [Inter](https://fonts.google.com/specimen/Inter), [Raleway](https://fonts.google.com/specimen/Raleway)
    - Backup: `Arial, sans-serif`

- **Call-to-Action (Buttons, Links):** *Condensed futuristic sans-serif*
    - Recommended: [Oswald](https://fonts.google.com/specimen/Oswald), [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)

---

## 3. UI Components & Design Elements

### 3.1. Buttons

- **Primary Button:**
    - Background: `#3B6C3C` (Dark Spring Green)
    - Text: `#DAE9D4` (Honeydew)
    - Hover: `#779A5A` (Asparagus)

```css
.button {
  background-color: #3B6C3C;
  color: #DAE9D4;
  font-family: "Oswald", sans-serif;
  padding: 12px 24px;
  border: none;
  text-transform: uppercase;
  transition: background 0.3s;
}
.button:hover {
  background-color: #779A5A;
}
```

---

## 4. Imagery & Aesthetic
- **Organic meets industrial:** High-contrast nature photography with minimal, sharp UI elements.
- **High saturation green overlays** for hover effects.
- **Black-and-white or duotone filter** on images to match the album’s surreal tone.

---

5. Layout & Interaction Design
- **Minimalist grid layout:** Large whitespace, text with breathing room.
- **Hover effects with soft glow or blur.**
- **Slow, smooth transitions (200–400ms) for an ethereal feel.**