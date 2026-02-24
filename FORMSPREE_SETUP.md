# Formspree Setup Instructions for Areca Bio Contact Form

Formspree is a simple service that handles your contact form submissions and sends them to your email. No backend code or server needed!

## Setup Steps (Takes 2 Minutes)

### 1. Create a Formspree Account

1. Go to: https://formspree.io/
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email (or use GitHub/Google login)
4. Verify your email address

### 2. Create a New Form

1. Once logged in, click **"+ New Form"** button
2. Give your form a name: **"Areca Bio Contact Form"**
3. Enter the email where submissions should go: **tsears@ucsd.edu**
4. Click **"Create Form"**

### 3. Get Your Form ID

After creating the form, you'll see your form's unique endpoint URL. It looks like:
```
https://formspree.io/f/YOUR_FORM_ID
```

The `YOUR_FORM_ID` part is what you need. It's a random string like `xwkgpvyz` or `mqkrzjnp`.

**Copy this form ID!**

### 4. Update Your Contact Page

Open your `contact.html` file and find this line (around line 215):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with the actual form ID you copied. For example:
```javascript
const response = await fetch('https://formspree.io/f/xwkgpvyz', {
```

Save the file.

### 5. Upload and Test

1. Upload your updated `contact.html` to your web server
2. Visit your contact page
3. Fill out the form and click "Send Message"
4. Check tsears@ucsd.edu for the email!

**Note:** The first submission will require email confirmation. Formspree will send a confirmation email to tsears@ucsd.edu - just click the link to activate the form.

## Features Included

✅ **Free Plan includes:**
- 50 submissions per month
- Email notifications to tsears@ucsd.edu
- Spam filtering
- File uploads (if needed)
- Submission archive in dashboard

✅ **What the email will contain:**
- First Name
- Last Name
- Email (with reply-to set automatically)
- Message
- Timestamp
- IP address (for spam prevention)

## Formspree Dashboard

Log in to https://formspree.io/ to:
- View all form submissions
- Download submissions as CSV
- Configure spam filtering
- Set up custom reply-to emails
- Add reCAPTCHA (recommended to prevent spam)
- Set up auto-reply emails

## Optional: Add reCAPTCHA (Recommended)

To prevent spam:
1. In your Formspree dashboard, click on your form
2. Go to **Settings** → **Spam Protection**
3. Enable **reCAPTCHA**
4. Follow the instructions to add the reCAPTCHA code to your form

## Upgrading (If Needed)

If you need more than 50 submissions/month:
- **Gold Plan**: $10/month - 1,000 submissions
- **Platinum Plan**: $40/month - 10,000 submissions

Most small business websites don't exceed the free tier.

## Troubleshooting

**Problem:** Form says "Please confirm your email"
- **Solution:** Check tsears@ucsd.edu for a confirmation email from Formspree. Click the confirmation link.

**Problem:** Not receiving emails
- **Solution:** 
  1. Check spam folder
  2. Verify the email address in Formspree settings
  3. Check form submissions in Formspree dashboard

**Problem:** Getting spam submissions
- **Solution:** Enable reCAPTCHA in Formspree settings

**Problem:** Form showing error message
- **Solution:** Make sure you replaced `YOUR_FORM_ID` with your actual form ID

## Alternative: No Sign-Up Method

Formspree also offers a no-signup method:
```html
<form action="https://formspree.io/f/tsears@ucsd.edu" method="POST">
```

However, this requires email confirmation on EVERY submission and is not recommended.

## Support

- Formspree Documentation: https://help.formspree.io/
- Contact Formspree Support: https://formspree.io/contact

---

That's it! Your contact form is now set up with zero backend code or server management needed.
