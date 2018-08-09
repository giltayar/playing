const axios = require('axios')

async function main() {
  for (let i = 0; i < 1000; ++i) {
    const x = async (i) => {
      const res = await axios({
        "proxy": null, "headers": {
          "Accept": "application/json", "Content-Type": "application/json",
          "X-Auth-Token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNbUttdG0zXzIwU1lwVG5YX0xvbTR3fn4iLCJpYXQiOjE1MzMxOTk3MTEsImV4cCI6MTUzMzIyMTMxMSwiaXNzIjoidGVzdGV5ZXNhcGkuYXBwbGl0b29scy5jb20ifQ.PL27ETA9cW9cYT5O6K7WqLPnoP40114ZL5w4vUdjCMQdTr1TrpE-o86y8KbOw1Z_k973aXEjlaHNKDFN0y7iATMbXxZSWdb6S2gXyvRoScCvXrfxdVjPXTFRHJ7_YRmREtJ3zvngBgWyMGcsF7Gtcco-X_Ve7E_pdDBc0VNt2Gs",
          "Host": "render-wus.applitools.com"
        },
        "timeout": 300000, "responseType": "json", "params": {}, "method": "POST", "url": "https://104.196.248.157/render-status",
        "data": ["89e31ae3-ffdc-4c73-b386-84d13eb5120e"]
      })

      console.log(i, res.data[0].status)
    }

    await Promise.all(Array(40).fill(0).map(_ =>x(i)))
  }
}

main().catch(console.error)
