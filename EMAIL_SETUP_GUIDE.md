# Email Service Setup Guide

## Quick Setup Instructions

Your portfolio now has a working contact form with **two email service options**: EmailJS and Web3Forms. You can easily switch between them!

## 🚀 Quick Start

### Option 1: Web3Forms (Easiest - 2 minutes)

1. **Get your access key:**
   - Visit https://web3forms.com/
   - Enter your email address
   - You'll receive a free access key instantly (no signup needed!)

2. **Configure your portfolio:**
   - Open `/repo/gitfolio-resume/frontend/.env`
   - Set `REACT_APP_EMAIL_SERVICE=WEB3FORMS`
   - Update `REACT_APP_WEB3FORMS_ACCESS_KEY=your_access_key_here`

3. **Restart dev server:**
   ```bash
   cd /repo/gitfolio-resume/frontend
   yarn start
   ```

4. **Test it:**
   - Fill out your contact form
   - Check your email inbox!

---

### Option 2: EmailJS (More Features - 5 minutes)

EmailJS offers more customization with email templates.

1. **Sign up at EmailJS:**
   - Visit https://www.emailjs.com/
   - Create a free account (200 emails/month)

2. **Connect your email:**
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection instructions

3. **Create email template:**
   - Go to "Email Templates" → "Create New Template"
   - Use these template variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     
     ---
     Reply to: {{reply_to}}
     ```
   - Save your template

4. **Get your credentials:**
   - **Service ID**: Found in "Email Services" tab
   - **Template ID**: Found in "Email Templates" tab
   - **Public Key**: Found in "Account" → "General"

5. **Configure your portfolio:**
   - Open `/repo/gitfolio-resume/frontend/.env`
   - Set `REACT_APP_EMAIL_SERVICE=EMAILJS`
   - Update these values:
     ```env
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
     ```

6. **Restart dev server:**
   ```bash
   cd /repo/gitfolio-resume/frontend
   yarn start
   ```

---

## 🔄 Switching Between Services

Simply change one line in `.env`:

```env
# Use EmailJS
REACT_APP_EMAIL_SERVICE=EMAILJS

# OR use Web3Forms
REACT_APP_EMAIL_SERVICE=WEB3FORMS
```

Then restart your dev server!

---

## ✉️ How It Works

### EmailJS:
- **You receive:** Formatted email in your inbox
- **Reply feature:** Click "Reply" to respond directly to sender
- **Customization:** Full control over email template design
- **Free tier:** 200 emails/month

### Web3Forms:
- **You receive:** Plain text email in your inbox
- **Reply feature:** Click "Reply" to respond directly to sender
- **Simplicity:** No configuration needed
- **Free tier:** Unlimited emails

---

## 📧 What You'll Receive

When someone fills out your contact form, you'll get an email like this:

```
From: John Doe (john@example.com)
Subject: Portfolio Contact: Message from John Doe

Hi Yugansh,

I'd love to discuss a project with you...

---
Reply to: john@example.com
```

Just hit **Reply** to respond directly to the sender!

---

## 🐛 Troubleshooting

### Not receiving emails?

1. **Check your `.env` file:**
   - Make sure all API keys are correct
   - No extra spaces or quotes around values

2. **Restart dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   yarn start
   ```

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for error messages when submitting form

4. **Verify spam folder:**
   - Sometimes emails go to spam initially

5. **Try the other service:**
   - If EmailJS isn't working, try Web3Forms
   - If Web3Forms isn't working, try EmailJS

### Still having issues?

Check the browser console for specific error messages. Common issues:
- Invalid API keys → Double-check your credentials
- Template not found → Make sure EmailJS template exists
- Service not connected → Reconnect your email in EmailJS dashboard

---

## 🎯 Next Steps

1. **Choose your preferred service** (Web3Forms is quickest to start)
2. **Get your API keys** from the service
3. **Update `.env` file** with your credentials
4. **Restart dev server**
5. **Test the form** by submitting a message
6. **Check your email inbox**

That's it! Your contact form is now live and sending emails directly to your inbox. 🎉
