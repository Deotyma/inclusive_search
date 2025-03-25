# Inclusive Search

**Inclusive Search** is a browser extension that enhances profile search on LinkedIn, especially in **Polish** and **French**, by recognizing feminine forms of job titles, inclusive and gendered keywords, and disability-related descriptors. 

> **Currently supports only IT-related job titles** (e.g. developer, tester, engineer, analyst). Other domains may be added in the future.

---

## Why isn’t English the default language?

This project was originally created for Polish and French use cases, where job titles are **strongly gendered**, and gender-inclusive search can significantly improve visibility.  
Since English job titles tend to be gender-neutral, the same issues do not apply in most English-speaking contexts. However, **English support is welcome and encouraged!**

---

## Getting Started

You can run the plugin locally in your browser to test or develop it.

### 1. Clone the project

```bash
git clone https://github.com/yourusername/inclusive_search.git
cd inclusive_search
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the extension

```bash
npm run build
```
# 4. Load it into your browser

1. Go to `chrome://extensions/`
2. Enable **Developer mode** (top right corner)
3. Click **Load unpacked**
4. Select the `dist/` folder from this project

---

## How to Contribute

We’re happy to welcome contributions!

### Recommended workflow

. **Fork** this repository
2. **Clone** your fork locally:

```bash
git clone https://github.com/yourusername/inclusive_search.git
cd inclusive_search
```
3. Create a feature branch:

```bash
git checkout -b my-awesome-feature
```

4. Make your changes, then commit and push:

```bash
git add .
git commit -m "Describe your change"
git push origin my-awesome-feature
```

5. Open a Pull Request from your fork to the develop branch of the original repository.

## Keeping your fork up to date

If you've forked this repository and want to keep your version in sync with the original (upstream), follow these steps:

1. Add the original repository as a remote
In your local project directory:

```bash
git remote add upstream https://github.com/original-author/inclusive_search.git
```

Now you have two remotes:

origin → your fork (on your GitHub account)
upstream → the original repository

2. Fetch the latest changes from upstream

```bash
git fetch upstream
```

3. Switch to your main branch

```bash
git checkout main
```

4. Merge upstream changes into your local main

```bash
git merge upstream/main
```

If there are no conflicts, your local main branch now matches the original repository.

5. Push the updates to your fork on GitHub

```bash
git push origin main
```

---

## Tip: Check your remotes
To see which remotes are configured:

```bash
git remote -v
```
