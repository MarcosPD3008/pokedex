import { Sprites } from '../../core/models/pokemon.model'
export class URLExtractor {
    private urls: { [key: string]: string } = {};

    // Public method to initiate the URL extraction into a plain object
    public extractUrls(sprites: Sprites): { [key: string]: string } {
      this.urls = {}; // Reset the URLs object
      this.recurseExtract(sprites, ''); // Start the recursive extraction with an empty path
      return this.urls;
    }
  
    // Private recursive method to traverse the sprites object
    private recurseExtract(sprites: Sprites | string, path: string): void {
      if (typeof sprites === 'string') {
        // Base case: If the current sprites is a string (URL), store it using the path as the key
        this.urls[path] = sprites;
      } else {
        // Recursive case: Iterate through each key-value pair in the sprites object
        Object.entries(sprites).forEach(([key, value]) => {
          if (value !== null) {
            // Construct a new path that includes the current key
            // If it's the first level, path will be empty, so no need to add a dot
            const newPath = path ? `${path}.${key}` : key;
            // Recurse with the value and the new path
            this.recurseExtract(value, newPath);
          }
        });
      }
    }
}
  