import { ProductCategoryModel } from './product-category.model';
import { UnityModel } from './unity.model';

export interface ProductModel {
    id?: number;
    unit: UnityModel;
    description: string;
    ean: string;
    sku: string;
    origin: string;
    type: string;
    ncm: string;
    cfop: string;
    cest: string;
    price_sale: number;
    unity: string;
    quantity_stock: number;
    net_weight: string;
    gross_weight: string;
    type_pack: string;
    width: string;
    heigth: string;
    length: string;
    description_comp: string;
    image: string;
    category: ProductCategoryModel;
    brand: string;
    manufacturer: string;
    cod_product: string;
    unit_per_box: string;
    price_cost: number;
    line_product: string;
    guarantee: string;
    situation: string;
    gtin: string;
    unit_tributary: string;
    conversion: string;
    ipi: string;
    value_ipi: number;
}