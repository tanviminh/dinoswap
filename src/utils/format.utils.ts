function currency(data: any) {
  return Number.parseFloat((Math.round(data * 100) / 100).toFixed(2));
}

export { currency };
