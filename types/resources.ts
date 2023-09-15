export interface Document {
    title: string;
    locationUri: string;
    lastUpdated: Date;
    id: string;
}

export interface SectorFile {
    name: string;
    locationUri: string;
    airspacePrefix: string[];
}