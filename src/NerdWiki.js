const NerdWiki = (function () {
    const htmlHelper = (function () {
        function HTMLHelper() {
        }

        HTMLHelper.prototype.copyToClipboard = async function (text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    await navigator.clipboard.writeText(text)

                    this.showNotification(globalConfig.notification.copy.success)
                    return
                } catch (e) {
                }
            }

            const textarea = document.createElement('textarea')
            textarea.value = text
            textarea.style.position = 'absolute'
            textarea.style.left = '-9999px'

            document.body.appendChild(textarea)
            textarea.select()
            try {
                document.execCommand('copy') // dont remove this is for old browsers
                this.showNotification(globalConfig.notification.copy.success)
            } catch (err) {
                this.showNotification(globalConfig.notification.copy.error, 'danger')
            } finally {
                document.body.removeChild(textarea)
            }
        }

        HTMLHelper.prototype.showNotification = function showNotification(message, type = 'success', duration) {
            const notification = document.createElement('div')
            notification.className = `notification notification--${type} notification--show`
            notification.innerText = message

            const closeButton = document.createElement('button')
            closeButton.innerHTML = '&times;'
            closeButton.setAttribute('aria-label', 'Close notification')
            closeButton.onclick = () => removeNotification(notification)
            notification.appendChild(closeButton)
            document.body.appendChild(notification)

            if (!duration && type !== 'danger') {
                duration = globalConfig.notification.timeouts[type]
            }

            let autoRemoveTimeout

            if (duration) {
                autoRemoveTimeout = setTimeout(() => removeNotification(notification), duration)
            }

            function removeNotification(notification) {
                autoRemoveTimeout && clearTimeout(autoRemoveTimeout)
                notification.classList.remove('notification-show')
                setTimeout(() => notification.remove(), 300) // Wait for the fade-out transition
            }
        }

        HTMLHelper.prototype.createTooltip = function createTooltip(text, tooltipText) {
            return this.createElement(
                'div',
                {class: 'tooltip'},
                text,
                this.createElement('span', {class: 'tooltip-text'}, tooltipText),
            )
        }

        HTMLHelper.prototype.createSectionItem = function ({url, title}) {
            const copyButton = this.createElement(
                'button',
                {class: 'link-section__item-link-copy'},
                this.createTooltip(
                    this.createElement('img', {src: '/assets/circle-heart.png'}), `Copy ${title} link`)
            )

            copyButton.addEventListener('click', () => this.copyToClipboard(url))

            return this.createElement(
                'div',
                {class: 'link-section__item'},
                this.createElement('a', {class: 'link-section__item-link', href: url}, title),
                copyButton,
            )
        }

        HTMLHelper.prototype.createSection = function (data) {
            return this.createElement(
                'section',
                {class: 'link-section'},
                this.createElement('h2', {class: 'link-section__title'}, data.title),
                ...data.links.map(this.createSectionItem.bind(this)),
            )
        }

        HTMLHelper.prototype.createElement = function (type, attributes = {}, ...children) {
            const element = document.createElement(type)

            for (const [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value)
            }

            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child))

                    return
                }

                if (child instanceof HTMLElement) {
                    element.appendChild(child)

                    return
                }

                if (Array.isArray(child)) {
                    child.forEach(nestedChild => element.appendChild(nestedChild))
                }
            })

            return element
        }

        return new HTMLHelper()
    }())

    function NerdWiki() {
        this.links = globalConfig.links
        this.appRoot = document.querySelector('[app-root]')
    }

    NerdWiki.prototype.init = function () {
        const links = this.links.map(s => htmlHelper.createSection(s))

        this.appRoot.append(...links)
    }

    return NerdWiki
}())
