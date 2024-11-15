// Global configuration object for the NerdWiki application
const globalConfig = {
    // Notification settings for the application
    notification: {
        copy: {
            success: 'Link Copied!',   // Message shown when text is successfully copied to clipboard
            error: 'Try again'         // Message shown if the copy action fails
        },
        timeouts: {
            success: 3000              // Duration (in milliseconds) for showing a success notification
        }
    },

    // List of categorized link sections displayed in the application
    links: [
        {
            // First section: "Twitch Tools"
            title: "Twitch Tools",      // Category title
            links: [
                {
                    title: "Twitch Vids Batch Download",   // Link title
                    url: "https://www.twitchanz.com/"      // URL to be opened when clicked
                },
                {
                    title: "Twitch Clip Downloader",
                    url: "https://clipr.xyz/"
                },
                {
                    title: "Twitch Emote Resizer",
                    url: "https://tma02.github.io/twitch-emote-resizer/"
                },
                {
                    title: "Eklipse Automatic Clip Maker",
                    url: "https://studio.eklipse.gg/"
                }
            ]
        },
        {
            // Second section: "GIFs & Videos"
            title: "GIFs & Videos",
            links: [
                {
                    title: "Gif Library",
                    url: "https://tenor.com/"
                },
                {
                    title: "Remove Gif Background",
                    url: "https://www.unscreen.com/upload"
                },
                {
                    title: "Tiktok Downloader No Watermark",
                    url: "https://snaptik.app/"
                },
                {
                    title: "Gif Maker and Editor",
                    url: "https://ezgif.com/"
                },
                {
                    title: "Capcut Video Editor",
                    url: "https://www.capcut.com/my-edit"
                }
            ]
        },
        {
            // Third section: "Designs & Images"
            title: "Designs & Images",
            links: [
                {
                    title: "Canva Image Editor",
                    url: "https://www.canva.com/"
                },
                {
                    title: "Convert Webp to Png",
                    url: "https://cloudconvert.com/webp-to-png"
                },
                {
                    title: "Icons",
                    url: "https://www.flaticon.com/"
                },
                {
                    title: "Remove Image Background",
                    url: "https://www.remove.bg/upload"
                },
                {
                    title: "Upscale Images",
                    url: "https://imgupscaler.com/"
                },
                {
                    title: "Color Palettes",
                    url: "https://colorhunt.co/"
                },
                {
                    title: "Hex Color",
                    url: "https://www.google.com/search?q=hex+color&oq=hex+color&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEIMTI5MWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8"
                }
            ]
        },
        {
            // Fourth section: "Automation"
            title: "Automation",
            links: [
                {
                    title: "Bitly for Shortening URLs",
                    url: "https://app.bitly.com/"
                },
                {
                    title: "Decent Translator for Clean Text",
                    url: "https://www.deepl.com/"
                },
                {
                    title: "Chat GPT",
                    url: "https://chatgpt.com/"
                },
                {
                    title: "Github Profile Home - NEW",
                    url: "https://github.com/NqmaNazad"
                }
            ]
        },
        {
            // Fifth section: "Audio"
            title: "Audio",
            links: [
                {
                    title: "Youtube to Mp3",
                    url: "https://ytmp3.nu/CNtD/"
                },
                {
                    title: "Adobe Audio Enhancer",
                    url: "https://podcast.adobe.com/"
                },
                {
                    title: "Audio Trimmer Online",
                    url: "https://github.com/NqmaNazad"
                },
                {
                    title: "Sounds For Vids",
                    url: "https://www.myinstants.com/en/search/?name=download"
                },
                {
                    title: "TTS Purposes with Good Voices",
                    url: "https://elevenlabs.io/"
                }
            ]
        }
    ]
};
