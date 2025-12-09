# BCS Landing Pages - Navigation Guide

## ✅ **Working Features**

### 🔗 **Clickable Logo**
- **Logo Location:** Top-left of the navbar
- **Action:** Click the BCS logo to smoothly scroll back to the top of the page
- **Works:** Desktop and mobile

---

## 📍 **Navigation Links - All Working**

The navbar includes smooth scrolling to these sections:

### 1. **Services** → Scrolls to Services Section
   - Shows all 8 IT services with animated cards
   - ID: `#services`

### 2. **Why Choose Us** → Scrolls to Benefits Section
   - Displays 8 benefit cards with unique gradient icons
   - ID: `#benefits`

### 3. **Portfolio** → Scrolls to Portfolio/Case Studies Section
   - Shows 6 recent projects with images
   - ID: `#portfolio`

### 4. **Reviews** → Scrolls to Testimonials Section
   - Displays 6 client testimonials with ratings
   - ID: `#testimonials`

### 5. **About** → Scrolls to Local SEO/About Section
   - Shows city-specific information and benefits
   - ID: `#about`

### 6. **Areas Dropdown** → Quick Links to All 5 Cities
   - Austin
   - Round Rock
   - Cedar Park
   - Leander
   - Pflugerville
   - **Note:** When switching cities, the page scrolls to the top

### 7. **Get a Quote Button** → Scrolls to Contact Form
   - Jumps directly to the contact form section
   - ID: `#contact`

---

## 📱 **Mobile Navigation**

### Hamburger Menu Features:
- ✅ All navigation links work with smooth scrolling
- ✅ Service areas dropdown included
- ✅ Contact phone number (click-to-call)
- ✅ "Get a Quote" button
- ✅ Menu closes automatically after selection

---

## 🔄 **Smooth Scrolling Behavior**

All navigation uses **smooth scroll** with:
- **80px offset** from the top (accounts for fixed navbar height)
- **Smooth animation** for better user experience
- **Auto-close** mobile menu after navigation

---

## 🎯 **How to Test Navigation**

### Test on Any City Page:

**Example URL:** https://board-flight-22558278.figma.site/#bussiness-communication-solution/austin

1. **Click Logo** → Should scroll to top
2. **Click "Services"** → Should scroll to Services section
3. **Click "Why Choose Us"** → Should scroll to Benefits section
4. **Click "Portfolio"** → Should scroll to Portfolio section
5. **Click "Reviews"** → Should scroll to Testimonials section
6. **Click "About"** → Should scroll to Local SEO/About section
7. **Click "Areas" → Select Another City** → Should navigate to that city's page and scroll to top
8. **Click "Get a Quote"** → Should scroll to Contact form

### Footer Navigation:
- **Service Links** → Scroll to services section
- **Area Links** → Navigate to other city pages
- **"Back to Top" Button** → Smooth scroll to page top

---

## 🔗 **All City Page URLs (Remember the # symbol!)**

1. **Austin**
   ```
   https://board-flight-22558278.figma.site/#bussiness-communication-solution/austin
   ```

2. **Round Rock**
   ```
   https://board-flight-22558278.figma.site/#bussiness-communication-solution/round-rock
   ```

3. **Cedar Park**
   ```
   https://board-flight-22558278.figma.site/#bussiness-communication-solution/cedar-park
   ```

4. **Leander**
   ```
   https://board-flight-22558278.figma.site/#bussiness-communication-solution/leander
   ```

5. **Pflugerville**
   ```
   https://board-flight-22558278.figma.site/#bussiness-communication-solution/pflugerville
   ```

---

## 🎨 **Navigation Visual Features**

### Navbar Scroll Effect:
- **Default State:** Slightly transparent with blur effect, larger logo
- **Scrolled State:** Solid white background, shadow, smaller logo
- **Transition:** Smooth 300ms animation

### Hover Effects:
- **Nav Links:** Color changes from `#0B4F6C` to `#01BAEF`
- **Dropdown:** Highlights current city with blue background
- **CTA Button:** Color change and shadow increase on hover

---

## ✨ **Section IDs Reference**

For developers or custom navigation:

| Section Name | ID | Description |
|-------------|-----|-------------|
| Hero | (top) | No ID needed, scroll to top |
| Services | `services` | 8 service cards |
| Benefits | `benefits` | Why Choose Us section |
| Portfolio | `portfolio` | Case studies and projects |
| Testimonials | `testimonials` | Client reviews |
| About/Local SEO | `about` | City-specific information |
| Business Info | (no ID) | Company details and BBB badge |
| Contact | `contact` | Contact form and info |

---

## 🚀 **Quick Navigation Commands**

### Scroll to Specific Section from Console:
```javascript
// Scroll to Services
document.getElementById('services').scrollIntoView({ behavior: 'smooth' });

// Scroll to Contact
document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

// Scroll to Top
window.scrollTo({ top: 0, behavior: 'smooth' });
```

---

## 📞 **Contact Actions**

### Phone Number Links:
- **Format:** `tel:+15122571433`
- **Action:** Opens phone dialer on mobile, Skype/FaceTime on desktop
- **Location:** Navbar (desktop), Mobile menu, Contact section, Footer

### Email Links:
- **Format:** `mailto:austin@bcs-ip.com`
- **Action:** Opens default email client
- **Location:** Contact section, Footer

---

## ✅ **Everything is Working!**

All navigation features have been implemented and tested:

✅ Logo is clickable and scrolls to top
✅ All navbar links scroll to correct sections
✅ Dropdown navigates to different city pages
✅ Mobile menu works perfectly
✅ Smooth scrolling with proper offset
✅ "Get a Quote" buttons scroll to contact form
✅ Footer "Back to Top" button works
✅ All section IDs are properly set

**You're all set to use the navigation system!**
