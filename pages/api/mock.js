export default function handler(req, res) {
  const count = req.body.count || 1
  delete req.body.count

  let result = []
  if (count > 1) {
    for (let i = 0; i < count; i++) {
      result.push(decode(req.body))
    }
  } else {
    result = decode(req.body)
  }

  res.status(200).json(result)
}

function decode(input) {
  const output = {}
  const dRegex = /(\d+)d/;

  for (let key in input) {
    let data = input[key]

    if (typeof data === "string") {
      if (data.startsWith("boolean") || data.startsWith("bool")) {
        data = getRandomBool()
      } else if (data.startsWith("int") || data.startsWith("integer")) {
        let digits = data.match(dRegex)
        digits = digits && digits[1] > 0 ? digits[1] : 2;
        data = getRandomInt(digits)
      } else if (data.startsWith("float") || data.startsWith("fl")) {
        let decimals = data.match(dRegex)
        decimals = decimals && decimals[1] > 0 ? decimals[1] : 2;
        data = getRandomFloat(decimals)
      } else if (data.startsWith("date")) {
        data = new Date()
      }
    } else {
      data = decode(data)
    }
    output[key] = data
  }

  return output
}

const getRandomInt = digits => Math.round(Math.random() * Math.round(Math.random() * Math.pow(10, digits)));
const getRandomFloat = decimals => Number(Math.random().toFixed(decimals))
const getRandomBool = () => Math.random() > 0.5
