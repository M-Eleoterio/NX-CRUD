export const Masks = {
  money(value: string | number): string {
    if (value === null || value === undefined) return "R$ 0,00";

    const cleanValue = value
      .toString()
      .replace(/[^\d,.-]/g, "")
      .replace(",", ".");
    const floatValue = parseFloat(cleanValue);
    if (isNaN(floatValue)) return "R$ 0,00";

    return floatValue.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },

  clearMoney(value: string | number): number {
    if (value === null || value === undefined) return 0;

    let str = value.toString().replace(/[^\d,.-]/g, "");

    str = str.replace(/\.(?=\d{3}(?:\D|$))/g, "").replace(",", ".");

    const n = parseFloat(str);
    if (isNaN(n)) return 0;

    return Math.round(n * 100) / 100;
  },
};
