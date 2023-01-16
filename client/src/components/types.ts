export interface exchangeData {
  data?:
    | {
        amount: number;
        currency_from: string;
        currency_to: string;
        date: string;
        id: number;
        rate: number;
        type: string;
      }[]
    | undefined;
}
