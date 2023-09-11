export interface Document {
    title: string;
    locationUri: string;
    lastUpdated: Date
}

export interface SectorFile {
    name: string;
    locationUri: string;
    airspacePrefix: string[];
}