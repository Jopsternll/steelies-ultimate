export type Segment = 'parkers' | 'metrisch' | 'houtdraad' | 'verankeringen' | 'nagels'

export interface Product {
  artikelnummer: string
  ean: string
  omschrijving: string
  verpakking: number
  oververpakking: number
  segment: Segment
}
