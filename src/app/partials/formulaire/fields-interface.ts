export interface Validator {
    name: string;
    validator: any;
    message: string;
}

/**
 * @param label le texte du libellé (optionnel)
 * @param name attribut name du composant (optionnel)
 * @param inputType attribut type d'un input (optionnel)
 * @param options tableau de string pour les options d'un select (optionnel)
 * @param type composant UI à générer input|button|checkbox|datepicker|radio|select
 * @param value valeur du composant (optionnel)
 * @param validations validations à appliquer (optionnel)
 * @param classe classe CSS à appliquer (optionnel),
 * @param aligner type boolean alignement des composants UI (optionnel)
 */
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: {value: string, text: string}[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    classe?: string;
    width?: string
    alignerContainer?: boolean;
    alignerLabel?: boolean;
}
