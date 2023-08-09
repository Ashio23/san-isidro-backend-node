export interface IInvoiceDto {
  issue_date: string;
  rut: number;
  verification_digit: string;
  name: string;
  address: string;
  commune: string;
  business_line: string;
  referenced_document: number;
  num_doc_reference: number;
  guide_number: number;
  net_amount: number;
  iva: number;
  total: number;
  due_date: string;
  payment_method: string;
  observation: string;
}
export interface IInvoiceResponse {
  id_invoice: number;
}
