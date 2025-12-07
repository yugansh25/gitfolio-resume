# 🌐 Hosting on GitHub Pages with Custom Domain

We have configured your project for deployment! Here are the final steps to get your site live on `yugansh.dev`.

---

## 🚀 Step 1: Deploy from Codebase

Run this command in your terminal (`/frontend` directory):

```bash
npm run deploy
# OR
yarn deploy
```

This will:
1. Build your React app
2. Push the build to a `gh-pages` branch on GitHub

---

## ⚙️ Step 2: Configure GitHub Repository

1. Go to your repository on GitHub: `https://github.com/yugansh25/gitfolio-resume`
2. Click **Settings** (tab at top right)
3. Navigate to **Pages** (sidebar on left)
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages` branch and `/ (root)` folder
   - Click **Save**
5. Under "Custom domain":
   - Enter `yugansh.dev`
   - Click **Save**
   - **Wait (important!)**: It takes a moment for GitHub to verify DNS
   - Check **"Enforce HTTPS"** once it becomes available (might take up to 24h for certificate, usually 15mins)

---

## 🌐 Step 3: Configure DNS (GoDaddy, Namecheap, etc.)

Go to your domain registrar (where you bought `yugansh.dev`) and update the DNS records.

### Add "A" Records (Point to GitHub)
Create **4 A records** pointing to GitHub's IPs:
- Host: `@` (or leave blank) -> Value: `185.199.108.153`
- Host: `@` -> Value: `185.199.109.153`
- Host: `@` -> Value: `185.199.110.153`
- Host: `@` -> Value: `185.199.111.153`

### Add "CNAME" Record (Point to username)
Create **1 CNAME record** for the `www` subdomain:
- Type: `CNAME`
- Host: `www`
- Value: `yugansh25.github.io`

---

## ✅ Verification

1. Wait for DNS propagation (can take 5 mins to 24 hours)
2. Visit `https://yugansh.dev`
3. If you see your site, you're live! 🎉

---

### Troubleshooting

- **404 Error?** Wait 5-10 minutes. GitHub Pages takes time to update.
- **Privacy Error?** HTTPS certificate is still generating. Wait ~15 mins.
- **Site blank?** Check console errors (F12). We fixed paths with `homepage` in `package.json`, so it should work.
