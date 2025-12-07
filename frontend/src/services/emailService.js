import emailjs from '@emailjs/browser';
import emailConfig from '../config/email-config';

/**
 * Email Service Abstraction Layer
 * Supports both EmailJS and Web3Forms
 * Switch between providers using REACT_APP_EMAIL_SERVICE environment variable
 */

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data with name, email, and message
 * @returns {Promise} - Resolves on success, rejects on error
 */
const sendViaEmailJS = async (formData) => {
    const { serviceId, templateId, publicKey } = emailConfig.emailjs;

    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your .env file.');
    }

    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            reply_to: formData.email, // This allows you to reply directly
        };

        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        );

        return {
            success: true,
            message: 'Message sent successfully via EmailJS!',
            data: response
        };
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw new Error(error.text || 'Failed to send message via EmailJS');
    }
};

/**
 * Send email using Web3Forms
 * @param {Object} formData - Form data with name, email, and message
 * @returns {Promise} - Resolves on success, rejects on error
 */
const sendViaWeb3Forms = async (formData) => {
    const { accessKey } = emailConfig.web3forms;

    console.log('Web3Forms Debug - Access Key:', accessKey ? 'Present' : 'Missing');

    if (!accessKey) {
        throw new Error('Web3Forms access key is not configured. Please check your .env file.');
    }

    try {
        const payload = {
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact: Message from ${formData.name}`,
        };

        console.log('Web3Forms Debug - Sending payload:', payload);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log('Web3Forms Debug - Response status:', response.status);

        const result = await response.json();
        console.log('Web3Forms Debug - Response data:', result);

        if (result.success) {
            return {
                success: true,
                message: 'Message sent successfully via Web3Forms!',
                data: result
            };
        } else {
            throw new Error(result.message || 'Failed to send message via Web3Forms');
        }
    } catch (error) {
        console.error('Web3Forms Error Details:', error);
        throw new Error(error.message || 'Failed to send message via Web3Forms');
    }
};

/**
 * Send email using the configured provider
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - Message content
 * @returns {Promise} - Resolves with success message, rejects with error
 */
export const sendEmail = async (formData) => {
    const provider = emailConfig.provider.toUpperCase();

    console.log(`Using email provider: ${provider}`);

    switch (provider) {
        case 'EMAILJS':
            return await sendViaEmailJS(formData);

        case 'WEB3FORMS':
            return await sendViaWeb3Forms(formData);

        default:
            throw new Error(
                `Invalid email provider: ${provider}. Please set REACT_APP_EMAIL_SERVICE to either EMAILJS or WEB3FORMS`
            );
    }
};

export default { sendEmail };
