## Description

The **URL Shortener** project is a JavaScript-based utility designed to create short, memorable links for long URLs. It also allows you to retrieve the original URL from the shortened one, making it a useful tool for simplifying complex links.

---

## Features

- **Random Short URL Generation**: Generates a unique 6-character identifier for each URL.
- **In-Memory Mapping**: Stores long URLs and their corresponding short versions in memory.
- **URL Retrieval**: Retrieves the original URL when provided with the shortened version.
- **Collision-Free**: Ensures no duplicate short URLs are generated.

---

## How to Use

### Clone the Repository

```bash
git clone https://github.com/TriggeredLegend/URL-Shortener.git
cd URL-Shortener
```

### Prerequisites

- Node.js (version 14 or above)

### Run the Script

1. Open a terminal and navigate to the project directory.
2. Run the script with Node.js:
   ```bash
   node url_shortener.js
   ```

### Example Usage

```javascript
const shortener = new URLShortener();

const longUrl = "https://www.example.com/some/very/long/url";
console.log("Original URL:", longUrl);

const shortUrl = shortener.shortenUrl(longUrl);
console.log("Shortened URL:", shortUrl);

const retrievedUrl = shortener.retrieveUrl(shortUrl);
console.log("Retrieved URL:", retrievedUrl);
```

**Sample Output**:
```
Original URL: https://www.example.com/some/very/long/url
Shortened URL: http://short.ly/abc123
Retrieved URL: https://www.example.com/some/very/long/url
```

---

## Testing

### Additional Test Cases

1. Shorten another URL:
   ```javascript
   const anotherLongUrl = "https://www.different-example.com/path/to/resource";
   const anotherShortUrl = shortener.shortenUrl(anotherLongUrl);
   console.log("Another Shortened URL:", anotherShortUrl);
   console.log("Retrieved URL:", shortener.retrieveUrl(anotherShortUrl));
   ```

2. Test a non-existent short URL:
   ```javascript
   const nonExistentShortUrl = "http://short.ly/nonExistent";
   console.log("Retrieved URL for non-existent short URL:", shortener.retrieveUrl(nonExistentShortUrl));
   ```

---

## Future Enhancements

- **Persistent Storage**: Implement a database to store URLs for long-term use.
- **Web Interface**: Build a frontend using Express.js or another framework to make the tool more user-friendly.
- **Analytics**: Track how often a shortened URL is accessed.
- **Custom Short URLs**: Allow users to create their own custom short URL identifiers.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/TriggeredLegend/URL-Shortener/blob/main/LICENSE) file for details.

---

## Contact

Created by [TriggeredLegend](https://github.com/TriggeredLegend). For any inquiries, open an issue in the repository.
