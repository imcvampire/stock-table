function calDiff(firstList, newList) {
  return newList.map((stock, index) => ({
    ...stock,
    change: Number((stock.price - firstList[index].price).toFixed(2)),
    percentage: Number(
      ((stock.price - firstList[index].price) / firstList[index].price).toFixed(2),
    ),
  }))
}

export default calDiff
