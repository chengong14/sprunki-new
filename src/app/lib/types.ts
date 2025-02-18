export interface Game {
    id: number;
    game: string;
    search_url: string;
    description: string;
    iframe: string;
    img_url: string;
    metadata?: {
        title?: string;
        description?: string;
        keywords?: string[];
    };
}
  