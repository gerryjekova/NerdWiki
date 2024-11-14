// NerdWiki Module
// This code creates a module to display sections of links on a web page with functionalities 
// like copying to clipboard, showing notifications, and adding tooltips.

const NerdWiki = (function () {
    // `htmlHelper` - Helper functions to manage HTML elements and UI interactions.
    const htmlHelper = (function () {
        
        // HTMLHelper Constructor
        function HTMLHelper() {}

        // Function to copy text to the clipboard
        HTMLHelper.prototype.copyToClipboard = async function (text) {
            // Try using the modern clipboard API if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    await navigator.clipboard.writeText(text);
                    this.showNotification(globalConfig.notification.copy.success);
                    return;
                } catch (e) {
                    // If an error occurs, fallback to the traditional method
                }
            }

            // Fallback method: Create a hidden textarea to hold the text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px'; // Move textarea off-screen

            document.body.appendChild(textarea);
            textarea.select();

            try {
                // Use `execCommand` to copy text for older browsers
                document.execCommand('copy');
                this.showNotification(globalConfig.notification.copy.success);
            } catch (err) {
                this.showNotification(globalConfig.notification.copy.error, 'danger');
            } finally {
                document.body.removeChild(textarea); // Clean up the hidden textarea
            }
        };

        // Function to show a notification on the page
        HTMLHelper.prototype.showNotification = function showNotification(message, type = 'success', duration) {
            // Create notification div with a close button
            const notification = document.createElement('div');
            notification.className = `notification notification--${type} notification--show`;
            notification.innerText = message;

            const closeButton = document.createElement('button');
            closeButton.innerHTML = '&times;';
            closeButton.setAttribute('aria-label', 'Close notification');
            closeButton.onclick = () => removeNotification(notification);
            notification.appendChild(closeButton);
            document.body.appendChild(notification);

            // Set the duration to automatically remove the notification
            if (!duration && type !== 'danger') {
                duration = globalConfig.notification.timeouts[type];
            }

            let autoRemoveTimeout;

            if (duration) {
                autoRemoveTimeout = setTimeout(() => removeNotification(notification), duration);
            }

            // Function to remove the notification with a fade-out effect
            function removeNotification(notification) {
                autoRemoveTimeout && clearTimeout(autoRemoveTimeout);
                notification.classList.remove('notification-show');
                setTimeout(() => notification.remove(), 300); // Wait for the fade-out transition
            }
        };

        // Function to create a tooltip element for displaying additional information on hover
        HTMLHelper.prototype.createTooltip = function createTooltip(text, tooltipText) {
            return this.createElement(
                'div',
                {class: 'tooltip'},
                text,
                this.createElement('span', {class: 'tooltip-text'}, tooltipText),
            );
        };

        // Function to create each link section item with a copy button and tooltip
        HTMLHelper.prototype.createSectionItem = function ({url, title}) {
            const copyButton = this.createElement(
                'button',
                {class: 'link-section__item-link-copy'},
                this.createTooltip(
                    this.createElement('img', {src: '/assets/circle-heart.png'}), `Copy ${title} link`)
            );

            // Add a click event to copy the URL when the button is clicked
            copyButton.addEventListener('click', () => this.copyToClipboard(url));

            // Return the complete link section item with a title and copy button
            return this.createElement(
                'div',
                {class: 'link-section__item'},
                this.createElement('a', {class: 'link-section__item-link', href: url}, title),
                copyButton,
            );
        };

        // Function to create a full section for each group of links
        HTMLHelper.prototype.createSection = function (data) {
            return this.createElement(
                'section',
                {class: 'link-section'},
                this.createElement('h2', {class: 'link-section__title'}, data.title),
                ...data.links.map(this.createSectionItem.bind(this)),
            );
        };

        // Utility function to create HTML elements with specified attributes and children
        HTMLHelper.prototype.createElement = function (type, attributes = {}, ...children) {
            const element = document.createElement(type);

            for (const [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value); // Set each attribute
            }

            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                    return;
                }

                if (child instanceof HTMLElement) {
                    element.appendChild(child);
                    return;
                }

                if (Array.isArray(child)) {
                    child.forEach(nestedChild => element.appendChild(nestedChild));
                }
            });

            return element;
        };

        // Return an instance of HTMLHelper with all these methods attached
        return new HTMLHelper();
    }());

    // `NerdWiki` - Main class that initializes and displays content on the page
    function NerdWiki() {
        this.links = globalConfig.links; // Load configuration data for links
        this.appRoot = document.querySelector('[app-root]'); // Main container for the app content
    }

    // Initialization method for NerdWiki
    NerdWiki.prototype.init = function () {
        // Create and append each section for links
        const links = this.links.map(s => htmlHelper.createSection(s));
        this.appRoot.append(...links);
    };

    // Return the NerdWiki object as a module
    return NerdWiki;
}());
