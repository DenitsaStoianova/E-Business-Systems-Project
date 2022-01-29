export interface Workspace {
    type: string,
    description: string,
    price: string,
    iconPath: string,
    status : string // not needed in the database, used only in frontend ro determine status - IN CART or to show price
}
