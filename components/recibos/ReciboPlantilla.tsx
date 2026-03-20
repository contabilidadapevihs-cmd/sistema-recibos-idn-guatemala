import { ReciboData, columnasConceptos } from '@/lib/reciboTypes';

export function ReciboPlantilla({ data }: { data: ReciboData }) {
  return (
    <div style={{ width: 900, border: '2px solid #333', padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>IGLESIA DEL NAZARENO</h2>
      <p style={{ textAlign: 'center' }}>DISTRITO OCCIDENTE GUATEMALA</p>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <strong>COMPROBANTE OFICIAL DE INGRESOS</strong>
        </div>
        <div>
          <strong>RECIBO No. {data.numero}</strong>
          <div>Q. {data.monto.toFixed(2)}</div>
        </div>
      </div>

      <p>
        {data.lugar}, {data.fecha}
      </p>

      <p>
        Recibimos de: <strong>{data.recibidoDe}</strong>
      </p>

      <p>
        La cantidad de: <strong>{data.cantidadLetras}</strong>
      </p>

      <div style={{ display: 'flex', gap: 10 }}>
        {columnasConceptos.map((col, i) => (
          <div key={i} style={{ flex: 1 }}>
            {col.map((c) => (
              <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{c.label}</span>
                <span>Q. {data.conceptos[c.key]?.toFixed(2) || ''}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p>Mes: {data.mes}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Boleta Depósito: {data.boletaDeposito}</span>
        <span>Cheques: {data.cheques}</span>
        <span>Cheque No: {data.chequeNo}</span>
      </div>

      <div style={{ marginTop: 40, textAlign: 'right' }}>
        ____________________________
        <br />Firma
      </div>
    </div>
  );
}
