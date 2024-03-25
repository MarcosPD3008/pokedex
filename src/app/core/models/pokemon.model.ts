export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
  
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
      front_shiny?: string;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  versions: {
    [key: string]: {
      [version: string]: {
        back_default?: string;
        back_female?: string | null;
        back_shiny?: string;
        back_shiny_female?: string | null;
        back_shiny_transparent?: string;
        back_transparent?: string;
        front_default?: string;
        front_female?: string | null;
        front_shiny?: string;
        front_shiny_female?: string | null;
        front_shiny_transparent?: string;
        front_transparent?: string;
        animated?: {
          back_default?: string;
          back_female?: string | null;
          back_shiny?: string;
          back_shiny_female?: string | null;
          front_default?: string;
          front_female?: string | null;
          front_shiny?: string;
          front_shiny_female?: string | null;
        };
      };
    };
  };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprites;
  url:string
  stats:Stats[];
}
  
export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}