export type ConceptoKey =
  | 'dni10'
  | 'alabastro'
  | 'oracionAyuno'
  | 'asistenciaSocial'
  | 'compasion'
  | 'otros'
  | 'distrito14'
  | 'jni15'
  | 'resurreccion'
  | 'cumpleanos'
  | 'ofrendaAnoNuevo'
  | 'evangelismo'
  | 'educTeologica2'
  | 'mni10'
  | 'accionDeGracias'
  | 'retiroPastoral'
  | 'proyectosEspeciales'
  | 'fem';

export type ReciboConceptos = Partial<Record<ConceptoKey, number>>;

export interface ReciboData {
  numero: string;
  monto: number;
  fecha: string;
  lugar: string;
  recibidoDe: string;
  cantidadLetras: string;
  mes: string;
  boletaDeposito?: string;
  cheques?: number;
  chequeNo?: string;
  firma?: string;
  conceptos: ReciboConceptos;
}

export const columnasConceptos: Array<Array<{ key: ConceptoKey; label: string }>> = [
  [
    { key: 'dni10', label: '10% DNI' },
    { key: 'alabastro', label: 'Alabastro' },
    { key: 'oracionAyuno', label: 'Oración y Ayuno' },
    { key: 'asistenciaSocial', label: 'Asistencia Social' },
    { key: 'compasion', label: 'Compasión' },
    { key: 'otros', label: 'Otros' },
  ],
  [
    { key: 'distrito14', label: '14% Distrito' },
    { key: 'jni15', label: '15% JNI' },
    { key: 'resurreccion', label: 'Resurrección' },
    { key: 'cumpleanos', label: 'Cumpleaños' },
    { key: 'ofrendaAnoNuevo', label: 'Ofrenda de Año Nuevo' },
    { key: 'evangelismo', label: 'Evangelismo' },
  ],
  [
    { key: 'educTeologica2', label: '2% Educ. Teológica' },
    { key: 'mni10', label: '10% MNI' },
    { key: 'accionDeGracias', label: 'Acción de Gracias' },
    { key: 'retiroPastoral', label: 'Retiro Pastoral' },
    { key: 'proyectosEspeciales', label: 'Proyectos Especiales' },
    { key: 'fem', label: 'FEM' },
  ],
];