# Welcome to My Project

## W3 Shopping Cart

* First, I created the project:

```bash
npm create vite@latest
```

* Then I set up Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

* Next, I built the UI of the project. I designed the navbar, search bar, product grid, and overall layout using Tailwind CSS. I made sure the UI was clean, responsive, and smooth to interact with.

* Used **axios** to fetch data from the FakeStore API and handle all product-related requests.

* Installed **react-icons** and used icons from Fi and Ci libraries to improve the UI. Managed API calls inside **useEffect** so data loads automatically when the page opens.

* Used **useMemo** to optimize search filtering and avoid unnecessary re-renders, improving performance.

* I also implemented a working search bar with clear button and icon. Finally, pushed everything to GitHub

* Live version available here: **abc.com**

---

## Project Summary 

* Vite se project setup kiya
* Tailwind CSS lagaya styling ke liye
* Pure UI khud design ki — navbar, search bar, cards, sab custom
* **axios** use kiya FakeStore API se products fetch karne ke liye
* API ko **useEffect** me handle kiya taaki component load hote hi data aa jaye
* Search bar fast rakhne ke liye **useMemo** use kiya, unnecessary renders avoid kiye
* **react-icons** use kiye (FiShoppingCart, CiSearch) clean UI ke liye
* Products ko responsive grid me show kiya
* Button, price, layout — sab Tailwind se optimize kiya
* End me project ko GitHub pe push kiya aur live deploy bhi kiya

Bas simple language me bolein to:
**project smooth, fast, clean UI + optimized search + API integration ke sath ready ho gaya.**
