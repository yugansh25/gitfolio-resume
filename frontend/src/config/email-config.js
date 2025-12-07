// Email service configuration
// This file centralizes all email service settings from environment variables

const emailConfig = {
    // Email service provider: 'EMAILJS' or 'WEB3FORMS'
    provider: process.env.REACT_APP_EMAIL_SERVICE || 'EMAILJS',

    // EmailJS configuration
    emailjs: {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
    },

    // Web3Forms configuration
    web3forms: {
        accessKey: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || '',
    }
};

// Debug logging
console.log('=== Email Config Debug ===');
console.log('Provider:', emailConfig.provider);
console.log('Web3Forms Access Key:', emailConfig.web3forms.accessKey ? `${emailConfig.web3forms.accessKey.substring(0, 10)}...` : 'NOT SET');
console.log('==========================');

export default emailConfig;
