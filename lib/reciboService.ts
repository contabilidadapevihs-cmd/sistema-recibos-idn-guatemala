import { supabase } from './supabaseClient';
import { numeroALetras } from './numeroALetras';

export async function crearReciboAutomatico({ iglesia_id, monto, fecha, recibidoDe }: any) {
  // 1. guardar ofrenda
  const { data: ofrenda, error: errOfrenda } = await supabase
    .from('ofrendas')
    .insert([{ iglesia_id, monto, fecha }])
    .select()
    .single();

  if (errOfrenda) throw errOfrenda;

  // 2. obtener último número
  const { data: ultimo } = await supabase
    .from('recibos')
    .select('numero')
    .order('numero', { ascending: false })
    .limit(1);

  const numero = (ultimo?.[0]?.numero || 0) + 1;

  // 3. convertir a letras
  const letras = numeroALetras(monto);

  // 4. crear recibo
  const { data: recibo, error } = await supabase
    .from('recibos')
    .insert([
      {
        numero,
        iglesia_id,
        ofrenda_id: ofrenda.id,
        monto,
        fecha,
        recibido_de: recibidoDe,
        cantidad_letras: letras
      }
    ])
    .select()
    .single();

  if (error) throw error;

  return recibo;
}
