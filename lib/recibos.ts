export function generarNumeroRecibo(ultimoNumero: number): number {
  return ultimoNumero + 1;
}

export function formatearNumeroRecibo(numero: number): string {
  return numero.toString().padStart(6, '0');
}