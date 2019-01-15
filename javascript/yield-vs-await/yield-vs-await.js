function* gen() {
  yield
    1
  yield 2
}

for (const i of gen()) {
  console.log(i)
}

async function a() {
  const z = await
    1

  console.log(z)
  const b = await 2
  console.log(b)
}

a()