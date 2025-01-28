// Project: URL Shortener
// File: url_shortener.js

class URLShortener {
    constructor() {
        this.urlMapping = new Map();
        this.baseUrl = "http://short.ly/";
    }

    _generateShortUrl() {
        // Generate a random 6-character short URL identifier.
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join("");
    }

    shortenUrl(longUrl) {
        // Shortens a given long URL.
        if (this.urlMapping.has(longUrl)) {
            return this.baseUrl + this.urlMapping.get(longUrl);
        }

        let shortUrl = this._generateShortUrl();
        while ([...this.urlMapping.values()].includes(shortUrl)) {
            shortUrl = this._generateShortUrl();
        }

        this.urlMapping.set(longUrl, shortUrl);
        return this.baseUrl + shortUrl;
    }

    retrieveUrl(shortUrl) {
        // Retrieves the original URL given a short URL.
        const shortIdentifier = shortUrl.replace(this.baseUrl, "");
        for (const [longUrl, storedShort] of this.urlMapping.entries()) {
            if (storedShort === shortIdentifier) {
                return longUrl;
            }
        }
        return null;
    }
}

// Example usage
const shortener = new URLShortener();

const longUrl = "https://www.example.com/some/very/long/url";
console.log("Original URL:", longUrl);

const shortUrl = shortener.shortenUrl(longUrl);
console.log("Shortened URL:", shortUrl);

const retrievedUrl = shortener.retrieveUrl(shortUrl);
console.log("Retrieved URL:", retrievedUrl);

// Additional Test Cases
const anotherLongUrl = "https://www.different-example.com/path/to/resource";
console.log("Original URL:", anotherLongUrl);

const anotherShortUrl = shortener.shortenUrl(anotherLongUrl);
console.log("Shortened URL:", anotherShortUrl);

const anotherRetrievedUrl = shortener.retrieveUrl(anotherShortUrl);
console.log("Retrieved URL:", anotherRetrievedUrl);

const nonExistentShortUrl = "http://short.ly/nonExistent";
console.log("Retrieved URL for non-existent short URL:", shortener.retrieveUrl(nonExistentShortUrl));
