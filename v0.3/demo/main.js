const el = document.createElement('div')

el.innerText = 'Hello World!'

document.body.append(el)

let i = 0
while (i < 1000000000) {
  i++
}