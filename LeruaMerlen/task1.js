const backendResponse = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента",
    },
  },
  stock: {
    stocks: {
      34: {
        2: "35",
        3: "42",
        4: "58",
        5: "57",
        6: "112",
        20: "51",
        22: "78",
        26: "34",
        32: "22",
        35: "358",
        40: "28",
        43: "68",
        45: "58",
        49: "31",
        51: "29",
        56: "42",
        62: "26",
        64: "0",
        65: "57",
        86: "15",
        114: "41",
        117: "46",
        143: "46",
        162: "4",
        171: "0",
        176: "12",
      },
    },
  },
}

let getProductName = (jsonResp) => {
  return jsonResp.displayedName.displayedName.value[0]
}

let getShopNumArray = (jsonResp) => {
  let shopsInRegion = jsonResp.stock.stocks[34]
  let resultArray = []

  for (let key in shopsInRegion) {
    if (shopsInRegion[key] !== "0") {
      resultArray.push(key)
    }
  }

  return resultArray
}

let getMaxProductsNum = (jsonResp) => {
  let shopsInRegion = jsonResp.stock.stocks[34]
  let result = {
    shop: 0,
    productsNum: 0,
  }

  for (let key in shopsInRegion) {
    if (+shopsInRegion[key] > +result["productsNum"]) {
      result["shop"] = key
      result["productsNum"] = shopsInRegion[key]
    }
  }

  return result
}

console.log(getProductName(backendResponse))
console.log(getShopNumArray(backendResponse))
console.log(getMaxProductsNum(backendResponse))
