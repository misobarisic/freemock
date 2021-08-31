<h1 align="center">Welcome to FreeMock API 👋</h1>

## About

This RESTful Mock API is completely free, requires no configuring and no registration. Not to mention, a hard coded
request rate limiter is not present.

## Usage

Send a HTTP GET request to `https://mockapi.misobarisic.com/mock`
with the body containing your custom mock object:

```json
{
  "<key>": "<type>"
}
```

## Example

```json
{
  "exampleBool": "boolean",
  "exampleInt": "integer",
  "exampleFloat": "float",
  "exampleDate": "date",
  "advancedInt": "int 5d",
  "advancedFloat": "fl 3d",
  "complex": {
    "real": "float",
    "imaginary": "float"
  }
}
```

## Types

- boolean / bool -> returns true or false
- date -> returns current date
- float / fl -> returns a floating point number
- integer / int

## Options

Passing additional parameters is also supported. Just make sure to append them to the end of your strings.

### Float

- d -> defines the number of decimals placed -> "float 5d"

### Integer

- d -> defines the max amount of digits a number can have -> "int 3d"

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/misobarisic/freemock/)

## Author

👤 **Mišo Barišić**

* Website: https://www.misobarisic.com
* GitHub: [@misobarisic](https://github.com/misobarisic)
* GitLab: [@misobarisic](https://gitlab.com/misobarisic)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/misobarisic/mockrest/blob/master/LICENSE) licensed.
