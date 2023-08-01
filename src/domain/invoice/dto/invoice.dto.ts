export class InvoiceDto {
  id: number;
  rut: string;
  name: string;
  amount: number;
  date: Date;

  constructor(
    id: number,
    rut: string,
    name: string,
    amount: number,
    date: Date,
  ) {
    this.id = id;
    this.rut = rut;
    this.name = name;
    this.amount = amount;
    this.date = date;
  }
}
