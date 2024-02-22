# Bun Plugin - .env loader

## ☘️ Features

- Simple `.env` file loader
- Supports a wide variety of .env types
  - `.env`, `.env.local`, `.env.staging`, `.env.development`, `.env.dev`, `.env.beta` etc.

## 🤖 Usage

```bash
bun install -d bun-plugin-env
```

You may now use it in your project:

```ts
import env from './.env'

// Accessing environment variables
const apiKey = env.API_KEY
const databaseUrl = env.DATABASE_URL

console.log(`API Key: ${apiKey}`)
console.log(`Database URL: ${databaseUrl}`)
```

## 🧪 Testing

```bash
bun test
```

## 📈 Changelog

Please see our [releases](https://github.com/stacksjs/bun-plugin-env/releases) page for more information on what has changed recently.

## 🚜 Contributing

Please review the [Contributing Guide](https://github.com/stacksjs/contributing) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.gg/stacksjs)

## 🙏🏼 Credits

Many thanks to the following core technologies & people who have contributed to this package:

- [Mot](https://github.com/motdotla)
- [dotenv](https://github.com/motdotla/dotenv)
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](../../contributors)

## 📄 License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with 💙
