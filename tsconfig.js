module.exports = {
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "strictPropertyInitialization": false,
    "baseUrl": "./src",
    "allowJs": true,
    "paths": {
      "@modules/*": [
        "modules/*"
      ],
      "@config/*": [
        "config/*"
      ],
      "@shared/*": [
        "shared/*"
      ]
    },
    "compilerOptions": {
      "esModuleInterop": true,
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
