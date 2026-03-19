add dashboard, i've done create the project before.



here's the project i want to create.
use industry pattern for code and the folders. search best practice using
web-search mcp. use context7 mcp  for updated framework/code usage.

Make sure the code design is scalable


below is design project i've create. recreted it with react

Building a high-performance portfolio on Vercel's free tier is all about choosing tools that offer the most "bang for your buck" without bloating your bundle size. Since you're focusing purely on the frontend, you can leverage **Static Site Generation (SSG)** to ensure your site is lightning-fast and stays well within Vercel's execution limits.

Here is a lean, professional tech stack and architecture recommendation to complement **React** and **Vite**.

---

## The "Lean & Mean" Tech Stack

To keep the project modern but lightweight, I suggest adding these specific tools:

| Category | Recommended Tool | Why? |
| :--- | :--- | :--- |
| **Styling** | **Tailwind CSS** | Zero runtime overhead; it purges unused CSS, keeping your Vercel deployment tiny. |
| **UI Components** | **shadcn/ui** | It’s not a library you install; it’s code you own. No extra `node_modules` bloat. |
| **Icons** | **Lucide React** | Highly tree-shakable and consistent. |
| **State** | **Zustand** | Much lighter than Redux (approx. 1kb) and much simpler to set up. |
| **Animations** | **Framer Motion** | Adds that "premium" feel to a portfolio with minimal configuration. |
| **Data Handling** | **TanStack Query** | Perfect for managing "mock" data or external APIs with built-in caching. |

---

## Suggested Architecture: Feature-Based

Since you aren't using a backend, your "business logic" will live entirely in the frontend. Instead of a traditional "folder-by-type" structure (where all hooks are in one folder, all components in another), I recommend a **Feature-Based Architecture**. 

This makes your portfolio modular and easy to showcase to potential employers because they can see exactly how you organize specific domains.

### Folder Structure
```text
src/
├── assets/          # Images, SVGs, global styles
├── components/      # Truly global, reusable UI (Buttons, Inputs)
├── features/        # The "meat" of your app
│   ├── project-list/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/  # Where your mock JSON data "fetch" lives
│   │   └── types.ts
│   └── contact-form/
├── hooks/           # Global utility hooks
├── store/           # Zustand store definitions
└── utils/           # Helper functions (date formatting, etc.)
```



### Handling "Data" Without a Backend
Since you want to stay backend-free, you have two great options to make the app feel "real":
1.  **Local JSON files:** Store your project details in a `data.json` file and "fetch" it using TanStack Query. This mimics real-world API handling.
2.  **Contentful or Sanity (CMS):** Both have excellent free tiers that integrate perfectly with Vercel. This allows you to update your portfolio content without redeploying code.

---

## Staying "Free Tier" Friendly on Vercel

Vercel's free tier is quite generous, but here is how to stay safe:

* **Image Optimization:** Don't ship raw 5MB JPEGs. Use Vite plugins like `vite-plugin-imagemin` or serve images from a CDN (like Unsplash or Cloudinary) to keep your build times low.
* **Code Splitting:** Vite does this automatically, but using `React.lazy()` for different "pages" (like a /projects vs /about page) ensures users only download what they need.
* **Environment Variables:** Even without a backend, use `.env` files for any API keys (like a Public Mapbox key or a Formspree ID) and set them in the Vercel Dashboard.

> **Pro Tip:** For a "no-backend" contact form, use **Formspree** or **Getform**. They have free tiers that let you receive emails directly from your React form without needing a server.




DESIGN REFERENCES:

PAGE 1
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-background": "#dce1fb",
              "on-secondary-container": "#aeb9d0",
              "primary-container": "#001b22",
              "surface-container-high": "#23293c",
              "secondary-fixed": "#d8e3fb",
              "on-surface": "#dce1fb",
              "on-tertiary-container": "#009182",
              "surface-tint": "#3cd7ff",
              "inverse-primary": "#00677e",
              "on-secondary": "#263143",
              "secondary": "#bcc7de",
              "tertiary": "#3cddc7",
              "surface": "#0c1324",
              "outline": "#909097",
              "surface-dim": "#0c1324",
              "on-primary": "#003642",
              "tertiary-fixed": "#62fae3",
              "on-tertiary": "#003731",
              "on-surface-variant": "#c6c6cd",
              "surface-bright": "#33394c",
              "surface-container-low": "#151b2d",
              "on-secondary-fixed-variant": "#3c475a",
              "on-secondary-fixed": "#111c2d",
              "error-container": "#93000a",
              "on-primary-fixed": "#001f27",
              "tertiary-fixed-dim": "#3cddc7",
              "secondary-container": "#3e495d",
              "surface-container-highest": "#2e3447",
              "on-error": "#690005",
              "primary": "#3cd7ff",
              "surface-variant": "#2e3447",
              "tertiary-container": "#001c18",
              "error": "#ffb4ab",
              "primary-fixed-dim": "#3cd7ff",
              "on-tertiary-fixed": "#00201c",
              "on-primary-container": "#008daa",
              "primary-fixed": "#b4ebff",
              "secondary-fixed-dim": "#bcc7de",
              "on-tertiary-fixed-variant": "#005047",
              "inverse-on-surface": "#2a3043",
              "on-primary-fixed-variant": "#004e5f",
              "surface-container-lowest": "#070d1f",
              "outline-variant": "#45464d",
              "inverse-surface": "#dce1fb",
              "on-error-container": "#ffdad6",
              "surface-container": "#191f31",
              "background": "#0c1324"
            },
            fontFamily: {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #0c1324;
            color: #dce1fb;
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="flex min-h-screen">
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full flex flex-col py-6 px-4 h-screen w-64 bg-[#151b2d] border-none z-50">
<div class="mb-10 px-2">
<h1 class="text-xl font-black text-[#3cd7ff] tracking-tighter font-headline">Editorial Intelligence</h1>
<p class="text-[10px] text-on-surface-variant tracking-widest uppercase mt-1">Secure AI Sentinel</p>
</div>
<button class="mb-8 flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-md font-bold text-sm transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(60,215,255,0.3)]">
<span class="material-symbols-outlined text-sm" data-icon="chat">chat</span>
            New Secure Chat
        </button>
<nav class="flex-grow space-y-1">
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="text-sm font-medium">Workspace</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
<span class="text-sm font-medium">History</span>
</a>
<!-- ACTIVE TAB: Files (Context Management) -->
<a class="flex items-center gap-3 px-3 py-2.5 rounded text-[#3cd7ff] font-bold border-r-2 border-[#3cd7ff] bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span class="text-sm">Files</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="shield">shield</span>
<span class="text-sm font-medium">Security Rules</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="list_alt">list_alt</span>
<span class="text-sm font-medium">Audit Logs</span>
</a>
</nav>
<div class="mt-auto pt-6 space-y-1">
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="key">key</span>
<span class="text-sm font-medium">API Vault</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 text-[#c6c6cd] hover:text-white hover:bg-[#191f31]" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
<div class="flex items-center gap-3 px-3 py-4 mt-4 border-t border-outline-variant/20">
<div class="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
<img class="w-full h-full object-cover" data-alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VFWRl6wwDGSCUCNPgQjnr7Z55ReKvUEtbjP9LZlDfmfv20MzpXDYcHemc295v_mSTqu-AZhqwkh3j9OMCUgYp90Jny2iQRio5oPnZMUzCxiWo86kTjYurx5XwKlSqwAIN9NLBHB8hGZ212mrgfU-MQtU6U58xr-AWiRyAdjfECfCs7Rry3IDrRL_9sbp4SzFUZ9VMowAFs2zBmXObuw3ZXvnOS3oF_2hMPQliCEWIYei6NbBlXInprQf-s9wDzcLXrlTf5LmEVU"/>
</div>
<div>
<p class="text-xs font-bold text-on-surface">Admin</p>
<p class="text-[10px] text-on-surface-variant">Active Session</p>
</div>
</div>
</div>
</aside>
<!-- Main Content Wrapper -->
<div class="flex-grow flex flex-col ml-64">
<!-- TopAppBar -->
<header class="flex justify-between items-center px-8 h-16 w-full sticky top-0 z-40 bg-[#0c1324]/80 backdrop-blur-xl">
<div class="flex items-center gap-8">
<span class="text-lg font-bold text-[#3cd7ff] font-headline">Sentinel Gate</span>
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input class="bg-surface-container-lowest border-none rounded-md pl-10 pr-4 py-1.5 text-xs w-64 focus:ring-1 focus:ring-primary/40 transition-all" placeholder="Search context records..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<nav class="flex gap-6">
<a class="text-xs font-medium text-[#c6c6cd] hover:text-[#3cd7ff] cursor-pointer transition-colors" href="#">User Console</a>
<a class="text-xs font-medium text-[#3cd7ff] border-b-2 border-[#3cd7ff] pb-1 cursor-pointer" href="#">Admin Terminal</a>
</nav>
<div class="flex items-center gap-4 border-l border-outline-variant/30 pl-6">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="notifications">notifications</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="help_outline">help_outline</button>
<button class="bg-primary/10 text-primary px-4 py-1.5 rounded text-xs font-bold hover:bg-primary/20 transition-all">Deploy Policy</button>
</div>
</div>
</header>
<!-- Page Canvas -->
<main class="p-10 max-w-7xl mx-auto w-full">
<!-- Hero Header Section -->
<section class="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 class="text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-4">Context <span class="text-primary">Management</span></h2>
<p class="text-on-surface-variant max-w-xl text-lg font-body leading-relaxed">
                        Securely manage high-fidelity data sources for the current chat session. Our AI Sentinel redacts PII automatically before analysis.
                    </p>
</div>
<div class="flex flex-col items-end gap-2">
<div class="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-none">
<div class="text-right">
<p class="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Total Storage</p>
<p class="text-xl font-headline font-bold text-primary">1.2 GB / 5.0 GB</p>
</div>
<div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-container text-primary">
<span class="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
</div>
</div>
</div>
</section>
<!-- Action Bar -->
<div class="flex flex-wrap items-center justify-between gap-4 mb-8">
<div class="flex gap-2">
<button class="px-4 py-2 bg-surface-container text-on-surface text-sm font-medium rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
<button class="px-4 py-2 bg-surface-container text-on-surface text-sm font-medium rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-lg" data-icon="sort">sort</span>
                        Latest
                    </button>
</div>
<button class="flex items-center gap-3 bg-surface-container-highest border border-primary/20 hover:border-primary/60 px-6 py-3 rounded-xl transition-all group">
<div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="add">add</span>
</div>
<span class="font-bold text-sm">Attach New Context Source</span>
</button>
</div>
<!-- Context Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 1: Redacted -->
<div class="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl" data-icon="description">description</span>
</div>
<span class="px-3 py-1 bg-tertiary/20 text-tertiary text-[10px] font-bold uppercase tracking-widest rounded-full">Redacted</span>
</div>
<div>
<h3 class="text-xl font-headline font-bold mb-2">Q3_Security_Audit.pdf</h3>
<p class="text-sm text-on-surface-variant font-body mb-6">Internal financial projections and infrastructure risks. 124 pages of sensitive data.</p>
<div class="flex items-center gap-4">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[8px] font-bold">JD</div>
<div class="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[8px] font-bold">AK</div>
</div>
<span class="text-[10px] text-on-surface-variant">Modified 2h ago</span>
</div>
</div>
</div>
<!-- Card 2: Analyzed -->
<div class="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl" data-icon="table_chart">table_chart</span>
</div>
<span class="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Analyzed</span>
</div>
<div>
<h3 class="text-xl font-headline font-bold mb-2">User_Behavior_Dataset.csv</h3>
<p class="text-sm text-on-surface-variant font-body mb-6">Anonymized user telemetry for trend correlation. Securely vectorized into chat context.</p>
<div class="flex items-center gap-4">
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-primary h-full w-full"></div>
</div>
</div>
<p class="text-[10px] text-primary mt-2 font-bold">100% Vectorized</p>
</div>
</div>
<!-- Card 3: Processing -->
<div class="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between group hover:bg-surface-container transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 rounded-xl bg-secondary-container text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl" data-icon="article">article</span>
</div>
<span class="px-3 py-1 bg-secondary-container/50 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full animate-pulse">Processing</span>
</div>
<div>
<h3 class="text-xl font-headline font-bold mb-2">Legal_Brief_2024.docx</h3>
<p class="text-sm text-on-surface-variant font-body mb-6">Confidential legal brief for ongoing acquisition. AI is currently performing entity extraction.</p>
<div class="flex items-center gap-4">
<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-[65%]"></div>
</div>
</div>
<p class="text-[10px] text-on-secondary-container mt-2 font-bold">Extracting Entities (65%)</p>
</div>
</div>
<!-- Card 4: Threat Meter / Alert State -->
<div class="bg-surface-container-low p-6 rounded-2xl border-l-4 border-error/50 flex flex-col justify-between group hover:bg-surface-container transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 rounded-xl bg-error/10 text-error flex items-center justify-center">
<span class="material-symbols-outlined text-2xl" data-icon="warning">warning</span>
</div>
<span class="px-3 py-1 bg-error/20 text-error text-[10px] font-bold uppercase tracking-widest rounded-full">Rejected</span>
</div>
<div>
<h3 class="text-xl font-headline font-bold mb-2">Root_Credentials.json</h3>
<p class="text-sm text-on-surface-variant font-body mb-6">Upload blocked. Plaintext secrets detected. Policy Sentinel prevents this context attachment.</p>
<button class="text-xs text-error font-bold underline underline-offset-4 hover:text-error/80 transition-colors">View Violation Report</button>
</div>
</div>
<!-- Card 5: Knowledge Graph Status -->
<div class="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between col-span-1 md:col-span-2 group hover:bg-surface-container transition-all duration-300">
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-xl bg-primary-container text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-2xl" data-icon="hub">hub</span>
</div>
<div class="text-right">
<span class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Global Linkage</span>
<p class="text-lg font-headline font-bold text-tertiary">Operational</p>
</div>
</div>
<div class="flex gap-12 mt-4 items-center">
<div class="flex-grow">
<h3 class="text-xl font-headline font-bold mb-2">Cross-Reference Engine</h3>
<p class="text-sm text-on-surface-variant font-body">All attached sources are being cross-referenced against the Enterprise Knowledge Base (EKB) for factual consistency.</p>
</div>
<div class="flex items-center justify-center p-4 bg-surface-container-highest rounded-full border border-primary/20">
<span class="material-symbols-outlined text-4xl text-primary" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
</div>
</div>
<!-- Drag & Drop Zone -->
<section class="mt-12 p-12 border-2 border-dashed border-outline-variant/30 rounded-3xl bg-surface-container-lowest flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-all cursor-pointer">
<div class="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors" data-icon="upload_file">upload_file</span>
</div>
<h4 class="text-2xl font-headline font-bold mb-2">Drop local files or paste data</h4>
<p class="text-on-surface-variant font-body mb-8">PDF, CSV, JSON, TXT or DOCX (Max 500MB per file)</p>
<div class="flex gap-4">
<button class="px-8 py-3 bg-primary text-on-primary rounded-md font-bold text-sm hover:brightness-110 transition-all">Select Files</button>
<button class="px-8 py-3 bg-surface-container-high text-on-surface rounded-md font-bold text-sm hover:bg-surface-container-highest transition-all">Connect Drive</button>
</div>
</section>
</main>
<!-- Subtle Footer Info -->
<footer class="px-10 py-8 text-center">
<p class="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-medium">All data encrypted with AES-256 and subjected to automated PII scrubbing prior to indexing.</p>
</footer>
</div>
</body></html>